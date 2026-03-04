import { useState } from "react";
import { mathTracks, mathTrackColors } from "../data/math";
import { scienceTracks, scienceTrackColors } from "../data/science";
import { languageTracks, languageTrackColors } from "../data/language";
import { historyTracks, historyTrackColors } from "../data/history";
import { englishTracks, englishTrackColors } from "../data/english";

/*
 * CurriculumMap
 *
 * Renders the "Curriculum Map" tab — the main visual overview of the math program.
 * Shows a vertical timeline of grades 9–12, with one course card per grade for the
 * currently selected pathway (Accelerated / Advanced / Enriched / Standard).
 *
 * Props:
 *   accent   — the active subject's hex color, used to tint AP badges
 *   gridRgb  — the active subject's color as "R, G, B" string, used in CSS template literals
 *              for the timeline line and highlight card glow (passed in from the main app
 *              because these are injected into a <style> block via template literals)
 *
 * State (local — nothing outside this component needs to know):
 *   selectedTrack  — which of the four pathways is active (tab buttons)
 *   expandedGrade  — which grade card is currently open to show topics (null = all closed)
 */
export function CurriculumMap({ accent, gridRgb, activeSubject }) {
  const [selectedTrack, setSelectedTrack] = useState("Accelerated");
  const [expandedGrade, setExpandedGrade] = useState(null);

  // Maps a subject ID string to the correct track data and color config for that subject.
  // Returns an object with:
  //   trackSubject       — the *Tracks data object (grades array + tracks array)
  //   trackColorsSubject — the *TrackColors map (tab button colors and labels)
  const subject = (type) => {
    switch (type) {
        case 'math':     return { trackSubject: mathTracks,     trackColorsSubject: mathTrackColors };
        case 'science':  return { trackSubject: scienceTracks,  trackColorsSubject: scienceTrackColors };
        case 'language': return { trackSubject: languageTracks, trackColorsSubject: languageTrackColors };
        case 'history':  return { trackSubject: historyTracks,  trackColorsSubject: historyTrackColors };
        case 'english':  return { trackSubject: englishTracks,  trackColorsSubject: englishTrackColors };
        default:
          console.warn(`CurriculumMap: unknown subject "${type}", falling back to math`);
          return { trackSubject: mathTracks, trackColorsSubject: mathTrackColors };
    }
  };

  // Destructure the correct track data and colors for the active subject
  const { trackSubject, trackColorsSubject } = subject(activeSubject.id)

  // Guard: if the previously selected track (e.g. "Accelerated") doesn't exist in
  // the new subject's track list (e.g. History only has "CP" and "AP/Honors"),
  // fall back to the first available track so the UI never shows a broken state.
  const effectiveTrack = trackSubject.tracks.includes(selectedTrack)
    ? selectedTrack
    : trackSubject.tracks[0];


  return (
    <>
      {/* ── Pathway selector tabs ── */}
      <div className="track-tabs">
        {trackSubject.tracks.map(track => (
          <button
            key={track}
            className={`track-tab ${effectiveTrack === track ? "" : "inactive"}`}
            style={effectiveTrack === track ? {
              background: trackColorsSubject[track].bg,
              color: trackColorsSubject[track].text,
              borderColor: trackColorsSubject[track].bg,
              boxShadow: `0 0 20px ${trackColorsSubject[track].bg}66`
            } : {}}
            onClick={() => setSelectedTrack(track)}
          >
            {trackColorsSubject[track].label}
          </button>
        ))}
      </div>

      {/* ── Grade timeline ── */}
      <div className="timeline">
        <div className="section-divider" style={{ marginTop: 20 }}>
          <span>High School · Grades 9–12</span>
        </div>

        {/* One row per grade — filters to grades 9+ in case middle school grades are added later */}
        {trackSubject.grades.filter(g => g.grade >= 9).map(gradeData => {
          const course = gradeData.courses[effectiveTrack]; // pick the course for the active pathway
          const isExpanded = expandedGrade === gradeData.grade;
          const isHighlight = course.highlight; // AP courses get a larger dot and glowing border

          return (
            <div key={gradeData.grade} className="grade-row">
              {/* Grade label on the left (e.g. "G9") */}
              <div className="grade-label">G{gradeData.grade}</div>

              {/* Dot on the timeline line — larger and glowing for AP courses */}
              <div className="timeline-dot" style={{
                background: course.color + "33",
                borderColor: course.color,
                width: isHighlight ? 16 : 12,
                height: isHighlight ? 16 : 12,
                boxShadow: isHighlight ? `0 0 20px ${course.color}88` : "none",
                marginTop: isHighlight ? 18 : 20
              }} />

              {/* Course card — clicking toggles the topic list open/closed */}
              <div
                className={`grade-card${isExpanded ? " expanded" : ""}${isHighlight ? " highlight-card" : ""}`}
                onClick={() => setExpandedGrade(isExpanded ? null : gradeData.grade)}
              >
                <div className="card-header">
                  <div className="course-name" style={{ color: isHighlight ? "#fff" : "#f0f0f8" }}>
                    {course.name}
                  </div>
                  {/* AP badge — only shown on highlight courses */}
                  {isHighlight && (
                    <span className="badge" style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}>
                      AP
                    </span>
                  )}
                  {/* Chevron arrow rotates when card is open */}
                  <span style={{ color: course.color + "aa" }} className={`chevron${isExpanded ? " open" : ""}`}>▶</span>
                </div>

                {/* Topic list — only rendered when this grade's card is expanded */}
                {isExpanded && (
                  <div className="topics-panel">
                    <ul className="topics-list">
                      {course.topics.map((t, i) => {
                        // Topics that are ALL CAPS before a colon are treated as section headers
                        // e.g. "LINEAR ALGEBRA: vectors and matrices" → renders a label + indented item
                        const colonIdx = t.indexOf(": ");
                        const prefix = colonIdx > 0 ? t.slice(0, colonIdx) : null;
                        const isSectionHeader = prefix && prefix === prefix.toUpperCase() && prefix.length < 30;
                        if (isSectionHeader) {
                          return (
                            <li key={i}>
                              <div className="phase-label">{prefix}</div>
                              <div className="topic-item" style={{ marginTop: 4 }}>— {t.slice(colonIdx + 2)}</div>
                            </li>
                          );
                        }
                        return <li key={i} className="topic-item">{t}</li>;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Footer disclaimer ── */}
      <div style={{ fontFamily:"'DM Sans',sans-serif", textAlign:"center", padding:"0 20px 60px", color:"#444", fontSize:"0.78rem", maxWidth:600, margin:"0 auto", lineHeight:1.7 }}>
        Track placement is reviewed annually. Students may move between tracks based on performance and teacher recommendation.
        Prerequisites are firmly based on proficiency demonstrated over the entire year of work in the preceding course.
        All tracks are designed to support students in reaching the mathematics level appropriate for their college and career goals.
        Students requiring a waiver to enroll above recommendation must submit an application through the Mathematics Department Supervisor.
      </div>
    </>
  );
}