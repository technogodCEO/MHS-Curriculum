import { useState } from "react";
import { electiveCategories, electiveTracks, electiveTrackColors } from "../data/electives";

/*
 * CurriculumMapVariableTrackLengths
 *
 * Renders the "Curriculum Map" tab for subjects whose tracks have variable numbers of courses
 * (i.e. not locked to grade levels). Currently used for Electives.
 *
 * Layout: category tab bar → track sidebar → sequential course timeline.
 * Each course card expands to show description, prerequisites, and topics.
 *
 * Props:
 *   accent       — the active subject's hex color, used to tint AP badges
 *   gridRgb      — the active subject's color as "R, G, B" string (CSS template literals)
 *   activeSubject — the currently selected Subject; feeds the subject() switch
 *
 * State (local):
 *   selectedCategory — which category tab is active (controls the sidebar track list)
 *   selectedTrack    — which track within the category is active
 *   expandedCourse   — course.id of the currently open course card (null = all closed)
 */
export function CurriculumMapVariableTrackLengths({ accent, gridRgb, activeSubject }) {
  const [selectedCategory, setSelectedCategory] = useState("AP Capstone");
  const [selectedTrack, setSelectedTrack] = useState("AP Capstone Program");
  const [expandedCourse, setExpandedCourse] = useState(null);

  // Maps a subject ID string to the correct track data and color config for that subject.
  // Returns an object with:
  //   trackSubject       — the *Tracks data object (grades array + tracks array)
  //   trackColorsSubject — the *TrackColors map (tab button colors and labels)
  const subject = (type) => {
    switch (type) {
        case 'electives':     return { trackSubject: electiveTracks,     trackColorsSubject: electiveTrackColors };
        default:
          console.warn(`CurriculumMap: unknown subject "${type}", falling back to electives`);
          return { trackSubject: electiveTracks, trackColorsSubject: electiveTrackColors };
    }
  };

  // Define the correct track data and colors for the active subject using the switch function
  const { trackSubject, trackColorsSubject } = subject(activeSubject.id)

  // Guard: if the previously selected track (e.g. "AP Capstone Program") doesn't exist in
  // the new subject's track list (e.g. History only has "CP" and "AP/Honors"),
  // fall back to the first available track so the UI never shows a broken state.
  const trackKeys = Object.keys(trackSubject.tracks); // creates trackKeys -> an array of all the tracks in the given subject's data file
  const effectiveTrack = trackKeys.includes(selectedTrack) ? selectedTrack : trackKeys[0]; //uses the new trackKeys variable to do the guard check


  return (
    <>
      {/* ── Pathway selector tabs ── */}
      <div className="track-tabs">
        {Object.keys(electiveCategories).map(category => (
          <button
            key={category}
            className={`track-tab ${selectedCategory === category ? "" : "inactive"}`}
            style={selectedCategory === category ? {
              background: electiveCategories[category].color,
              color: "#000",
              borderColor: electiveCategories[category].color,
              boxShadow: `0 0 20px ${electiveCategories[category].color}66`
            } : {}}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedTrack(electiveCategories[category].tracks[0])
              setExpandedCourse(null)
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ── Two-column layout: track sidebar + course timeline ── */}
      <div className="track-layout">
        {/* Left: track list for selected category */}
        <div className="track-sidebar">
          {electiveCategories[selectedCategory].tracks.map(track => {
            const colors = trackColorsSubject[track];
            const active = effectiveTrack === track;
            return (
              <button
                key={track}
                className="track-btn"
                onClick={() => { setSelectedTrack(track); setExpandedCourse(null); }}
                style={active ? {
                  background: colors?.bg,
                  color: colors?.text ?? "#f0f0f8",
                  borderLeft: `3px solid ${colors?.bg ?? "#6b7280"}`,
                  fontWeight: 600,
                } : {}}
              >
                {track}
              </button>
            );
          })}
        </div>

        {/* Right: course timeline */}
        <div className="track-content">
          <h2 className="track-title">{effectiveTrack}</h2>
          <p className="track-description">{trackSubject.tracks[effectiveTrack].description}</p>

          {/* Course Cards */}
          {trackSubject.tracks[effectiveTrack].courses.map((course, idx) => {
            const isExpanded = expandedCourse === course.id;
            const isAP = course.tier === "AP";
            const trackColor = trackColorsSubject[effectiveTrack].bg;
            const courses = trackSubject.tracks[effectiveTrack].courses;
            return (
              <div key={course.id} className="grade-row">

                {/* Timeline dot + connector line */}
                <div className="dot-col">
                  <div className="timeline-dot" style={{
                    background: trackColor + "33",
                    borderColor: trackColor,
                    boxShadow: isAP ? `0 0 20px ${trackColor}88` : "none",
                    width: isAP ? 16 : 12,
                    height: isAP ? 16 : 12,
                    marginTop: isAP ? 18 : 20,
                  }}/>
                  {idx < courses.length - 1 && (
                    <div className="dot-connector" style={{ background:`${trackColor}44` }}/>
                  )}
                </div>

                {/* Card */}
                <div
                  className={`grade-card${isExpanded ? " expanded" : ""}${isAP ? " highlight-card" : ""}`}
                  style={isAP ? {
                    borderColor: `${trackColor}4d`,
                    background: `${trackColor}0d`,
                    boxShadow: `0 0 30px ${trackColor}1a`,
                  } : {}}
                  onClick={() => setExpandedCourse(isExpanded ? null : course.id)}
                >
                  <div className="card-header">
                    <div className="course-name" style={{ color: isAP ? "#fff" : "#f0f0f8" }}>
                      {course.name}
                    </div>
                    {course.tier !== "CP" && (
                      <span className="badge" style={{
                        background: isAP ? `${trackColor}22` : "#6366f122",
                        color: isAP ? trackColor : "#6366f1",
                        border: `1px solid ${isAP ? trackColor + "44" : "#6366f144"}`,
                      }}>
                        {course.tier}
                      </span>
                    )}
                    <span style={{ fontSize:"0.75rem", color:"#9ca3af" }}>
                      {course.gradeLevel} · {course.credits} cr
                    </span>
                    <span style={{ color: trackColor + "aa" }} className={`chevron${isExpanded ? " open" : ""}`}>▶</span>
                  </div>

                  {/* Expanded Panel */}
                  {isExpanded && (
                    <div className="topics-panel">
                      <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.83rem", color:"#999", lineHeight:1.6, marginBottom:10 }}>
                        {course.description}
                      </p>
                      {course.prereqs.length > 0 && (
                        <div style={{ marginBottom:10 }}>
                          <div className="phase-label">Prerequisites</div>
                          <ul className="topics-list">
                            {course.prereqs.map((p, i) => (
                              <li key={i} className="topic-item">
                                {p.course ? `${p.course}${p.minGrade ? ` (min ${p.minGrade})` : ""}` : ""}
                                {p.note ? (p.course ? ` — ${p.note}` : p.note) : ""}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {course.topics.length > 0 && (
                        <div>
                          <div className="phase-label">Topics</div>
                          <ul className="topics-list">
                            {course.topics.map((t, i) => (
                              <li key={i} className="topic-item">{t}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ── Footer disclaimer ── */}
      <div style={{ fontFamily:"'DM Sans',sans-serif", textAlign:"center", padding:"0 20px 60px", color:"#444", fontSize:"0.78rem", maxWidth:600, margin:"0 auto", lineHeight:1.7 }}>
        Track placement is reviewed annually. Students may move between tracks based on performance and teacher recommendation.
        Prerequisites are firmly based on proficiency demonstrated over the entire year of work in the preceding course.
        All tracks are designed to support students in reaching the level appropriate for their college and career goals.
        Students requiring a waiver to enroll above recommendation must submit an application through the {activeSubject.label} Department Supervisor.
      </div>
    </>
  );
}
