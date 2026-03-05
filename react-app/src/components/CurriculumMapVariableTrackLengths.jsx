import { useState } from "react";
import { electiveTracks, electiveTrackColors } from "../data/electives";

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
  const [selectedTrack, setSelectedTrack] = useState("Accelerated");
  const [expandedGrade, setExpandedGrade] = useState(null);

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

  // Guard: if the previously selected track (e.g. "Accelerated") doesn't exist in
  // the new subject's track list (e.g. History only has "CP" and "AP/Honors"),
  // fall back to the first available track so the UI never shows a broken state.
  const effectiveTrack = trackSubject.tracks.includes(selectedTrack) ? selectedTrack : trackSubject.tracks[0];


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

      {/* ── timeline ── */}
      <div className="timeline">
				
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