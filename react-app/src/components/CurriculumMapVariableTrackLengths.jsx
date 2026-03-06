import { useState } from "react";
import { electiveCategories, electiveTracks, electiveTrackColors } from "../data/electives";

/*
 * CurriculumMap
 *
 * Renders the "Curriculum Map" tab — the main visual overview of the math program.
 * Shows a vertical timeline of each track, but in this file does not show grade levels.
 * As these tracks are not grade affiliated, they can have as many courses as necessary per track.
 * Shows the currently selected pathway i.e. (Accelerated / Advanced / Enriched / Standard) for math.
 *
 * Props:
 *   accent   — the active subject's hex color, used to tint AP badges
 *   gridRgb  — the active subject's color as "R, G, B" string, used in CSS template literals
 *              for the timeline line and highlight card glow (passed in from the main app
 *              because these are injected into a <style> block via template literals)
 *  activeSubject - The currently selected Subject, will feed into the switch statement to select the correct subject data files
 *
 * State (local — nothing outside this component needs to know):
 *   selectedTrack  — which of the four pathways is active (tab buttons)
 *   expandedGrade  — which grade card is currently open to show topics (null = all closed)
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
          console.warn(`CurriculumMap: unknown subject "${type}", falling back to math`);
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
              background: accent,
              color: "#fff",
              borderColor: accent,
              boxShadow: `0 0 20px ${accent}66`
            } : {}}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedTrack(electiveCategories[category][0])
              setExpandedCourse(null)
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ── Two-column layout: track sidebar + course timeline ── */}
      <div style={{ display:"flex", alignItems:"flex-start" }}>
				{/* Left: track list for selected category */}
        <div style={{ width:220, flexShrink:0, borderRight:"1px solid #e5e7eb", paddingTop:8 }}>
          {electiveCategories[selectedCategory].map(track => {
            const colors = trackColorsSubject[track];
            const active = effectiveTrack === track;
            return (
              <button
                key={track}
                onClick={() => { setSelectedTrack(track); setExpandedCourse(null); }}
                style={{
                  width:"100%", textAlign:"left",
                  padding:"8px 12px",
                  background: active ? colors?.bg ?? "#f3f4f6" : "none",
                  color: active ? colors?.text ?? "#111" : "#4b5563",
                  border:"none", cursor:"pointer",
                  fontFamily:"'DM Sans',sans-serif", fontSize:"0.82rem",
                  borderLeft: active ? `3px solid ${colors?.bg ?? "#6b7280"}` : "3px solid transparent",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {track}
              </button>
            );
          })}
        </div>

        {/* Right: course timeline */}
        <div style={{ flex:1, padding:"16px 24px" }}>
          <h2 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"1.1rem", fontWeight:700, color:"#111", marginBottom:4 }}>
            {effectiveTrack}
          </h2>
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.82rem", color:"#555", marginBottom:20, lineHeight:1.6 }}>
            {trackSubject.tracks[effectiveTrack].description}
          </p>

          {/* Course Cards*/}
          {trackSubject.tracks[effectiveTrack].courses.map((course, idx) => {
            const isExpanded = expandedCourse === course.id;
            const isAP = course.tier === "AP";
            const trackColor = trackColorsSubject[effectiveTrack].bg;
            const courses = trackSubject.tracks[effectiveTrack].courses;
            return (
              <div key={course.id} style={{ display:"flex", gap:16, marginBottom:16 }}>

                {/* Timeline dot + connector line */}
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", paddingTop:6 }}>
                  <div style={{
                    width:12, height:12, borderRadius:"50%", flexShrink:0,
                    background: trackColor,
                    boxShadow: isAP ? `0 0 8px ${trackColor}` : "none"
                  }}/>
                  {idx < courses.length - 1 && (
                    <div style={{ width:2, flex:1, background:`${trackColor}44`, marginTop:4 }}/>
                  )}
                </div>

                {/* Card */}
                <div
                  onClick={() => setExpandedCourse(isExpanded ? null : course.id)}
                  style={{
                    flex:1, borderRadius:8, 
                    padding:"12px 16px", cursor:"pointer",
                    background: isExpanded ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
                    border: isExpanded ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(255,255,255,0.07)",
                    boxShadow: isExpanded ? `0 0 12px ${trackColor}33` : "none",
                  }}
                >
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:600, fontSize:"0.9rem", color:"#e5e7eb" }}>
                      {course.name}
                    </span>
                    {course.tier !== "CP" && (
                      <span style={{ fontSize:"0.7rem", fontWeight:700, padding:"2px 6px", borderRadius:4,
                        background: isAP ? accent : "#6366f1", color:"#fff" }}>
                        {course.tier}
                      </span>
                    )}
                    <span style={{ marginLeft:"auto", fontSize:"0.75rem", color:"#9ca3af" }}>
                      {course.gradeLevel} · {course.credits} cr
                    </span>
                  </div>
                  
                  {/* Expanded Pannel */}
                  {isExpanded && (
                    <div style={{ marginTop:12 }}>
                      <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.82rem", color:"#ccc", lineHeight:1.6, marginBottom:10 }}>
                        {course.description}
                      </p>
                      {course.prereqs.length > 0 && (
                        <div style={{ marginBottom:10 }}>
                          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.72rem", fontWeight:700,
                            color:"#9ca3af", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:4 }}>
                            Prerequisites
                          </div>
                          {course.prereqs.map((p, i) => (
                            <div key={i} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.8rem", color:"#ccc" }}>
                              {p.course ? `${p.course}${p.minGrade ? ` (min ${p.minGrade})` : ""}` : ""}
                              {p.note ? (p.course ? ` — ${p.note}` : p.note) : ""}
                            </div>
                          ))}
                        </div>
                      )}
                      {course.topics.length > 0 && (
                        <div>
                          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.72rem", fontWeight:700,
                            color:"#9ca3af", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:4 }}>
                            Topics
                          </div>
                          <ul style={{ margin:0, paddingLeft:16 }}>
                            {course.topics.map((t, i) => (
                              <li key={i} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.8rem", color:"#ccc", marginBottom:2 }}>
                                {t}
                              </li>
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