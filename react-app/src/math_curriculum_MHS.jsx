// ── Package Imports ───────────────────────────────────────────────────────────
import { useState, useRef } from "react";

// ── Data Imports ──────────────────────────────────────────────────────────────

// subjects.js — the list of all six subjects (Math, English, Science, etc.)
//   with their accent colors, grid colors, and availability flags
import { subjects } from "./data/subjects.js";

// math.js — the math-specific data: track/grade course map, pathway colors, and
//   the full program of studies course catalog. When other subjects are built out,
//   their data will be imported here and swapped in based on activeSubject.
//import { mathTracks, mathTrackColors, mathProgramOfStudies } from "./data/math"; -> the import is unused and thus should be commented

// ── Component Imports ─────────────────────────────────────────────────────────

// SubjectTitle        — the clickable subject name in the header ("Mathematics ▾")
// SubjectDropdownMenu — the floating subject switcher panel (rendered at root level)
// CurriculumMap       — the "Curriculum Map" tab (grade timeline + track selector)
// ProgramOfStudies    — the "Program of Studies" tab (full filterable course catalog)
import { SubjectTitle } from "./components/SubjectTitle.jsx";
import { SubjectDropdownMenu } from "./components/SubjectDropdownMenu.jsx";
import { ProgramOfStudies } from "./components/ProgramOfStudies.jsx";
import { CurriculumMap } from "./components/CurriculumMap.jsx";

/*
 * MathCurriculum  (default export — rendered by App.js)
 *
 * Root component of the MHS Curriculum site. Owns all shared state and wires
 * together the header, navigation, and page content.
 *
 * State:
 *   page           — which tab is active: "map" (Curriculum Map) or "pos" (Program of Studies)
 *   activeSubject  — the currently selected subject object from subjects.js; defaults to Math
 *   dropOpen       — whether the subject switcher dropdown is open
 *   btnRef         — ref attached to the SubjectTitle button, shared with SubjectDropdownMenu
 *                    so the menu knows where to position itself on the page
 *
 * Derived values (recalculated whenever activeSubject changes):
 *   accent         — hex color string used to tint interactive elements (badges, nav underline)
 *   gridRgb        — "R, G, B" string injected into the CSS <style> block for the header grid
 *                    and timeline line colors (CSS template literals require this format)
 *
 * Layout structure:
 *   <div root (position: relative)>        ← anchor for absolute-positioned dropdown
 *     <SubjectDropdownMenu />              ← floating menu, sibling of header (not inside it)
 *     <header>                             ← grid background, subtitle, title, description
 *       <SubjectTitle />                   ← clickable subject name button
 *     <nav>                                ← Curriculum Map / Program of Studies tabs
 *     <CurriculumMap />   or               ← rendered based on active page
 *     <ProgramOfStudies />
 *     <footer />
 */
export default function MathCurriculum() {
  const [page, setPage] = useState("map");
  const [activeSubject, setActiveSubject] = useState(subjects[0]); // defaults to Mathematics
  const [dropOpen, setDropOpen] = useState(false);
  const btnRef = useRef(null); // attached to SubjectTitle button, read by SubjectDropdownMenu

  // Derived from activeSubject — passed into style blocks and child components
  const accent = activeSubject.accent;
  const gridRgb = activeSubject.gridColor;

  return (
    // position: relative makes this the anchor for the absolute-positioned dropdown menu
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0f0a 100%)",
      minHeight: "100vh",
      color: "#e8e8f0",
      position: "relative",
    }}>
      {/* ── Global styles ─────────────────────────────────────────────────────
          Injected as a <style> tag so they can use JS variables (accent, gridRgb).
          These classes are used by CurriculumMap and ProgramOfStudies child components. */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }

        .curriculum-header {
          padding: 60px 40px 40px;
          text-align: center;
          position: relative;
        }
        .header-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(${gridRgb}, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${gridRgb}, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          transition: background-image 0.4s;
        }
        .main-title { font-family:'Playfair Display',serif; font-size:clamp(2rem,5vw,3.5rem); font-weight:900; letter-spacing:-1px; color:#fff; margin:0 0 8px; position:relative; }
        .subtitle { font-family:'DM Sans',sans-serif; font-size:1rem; color:#888; letter-spacing:0.2em; text-transform:uppercase; margin:0 0 16px; }
        .track-tabs { display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-bottom:0; padding:0 20px 40px; }
        .track-tab { padding:10px 24px; border-radius:100px; font-family:'DM Sans',sans-serif; font-weight:500; font-size:0.875rem; cursor:pointer; border:1.5px solid transparent; transition:all 0.2s; letter-spacing:0.05em; }
        .track-tab.active-accel { background:#f59e0b; color:#000; border-color:#f59e0b; box-shadow:0 0 20px rgba(245,158,11,0.4); }
        .track-tab.active-adv   { background:#60a5fa; color:#000; border-color:#60a5fa; box-shadow:0 0 20px rgba(96,165,250,0.4); }
        .track-tab.active-enr   { background:#c084fc; color:#000; border-color:#c084fc; box-shadow:0 0 20px rgba(192,132,252,0.4); }
        .track-tab.active-std   { background:#94a3b8; color:#000; border-color:#94a3b8; box-shadow:0 0 20px rgba(148,163,184,0.4); }
        .track-tab.inactive { background:transparent; color:#666; border-color:#333; }
        .track-tab.inactive:hover { border-color:#555; color:#999; }
        .timeline { max-width:900px; margin:0 auto; padding:0 24px 80px; position:relative; }
        .timeline::before { content:''; position:absolute; left:50px; top:0; bottom:0; width:2px; background:linear-gradient(180deg,transparent,rgba(${gridRgb},0.3) 10%,rgba(${gridRgb},0.3) 90%,transparent); }
        .grade-row { display:flex; gap:20px; margin-bottom:12px; align-items:flex-start; position:relative; }
        .grade-label { font-family:'DM Mono',monospace; font-size:0.7rem; color:#555; width:44px; flex-shrink:0; padding-top:18px; text-align:right; letter-spacing:0.05em; }
        .timeline-dot { width:12px; height:12px; border-radius:50%; flex-shrink:0; margin-top:20px; border:2px solid; position:relative; z-index:1; transition:all 0.2s; }
        .grade-card { flex:1; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:12px; overflow:hidden; cursor:pointer; transition:all 0.25s; }
        .grade-card:hover, .grade-card.expanded { background:rgba(255,255,255,0.06); border-color:rgba(255,255,255,0.12); transform:translateX(4px); }
        .grade-card.highlight-card { border-color:rgba(${gridRgb},0.3); background:rgba(${gridRgb},0.05); box-shadow:0 0 30px rgba(${gridRgb},0.1); }
        .card-header { padding:16px 20px; display:flex; align-items:center; justify-content:space-between; gap:12px; }
        .course-name { font-family:'Playfair Display',serif; font-size:1.1rem; font-weight:600; color:#f0f0f8; flex:1; line-height:1.3; }
        .badge { font-family:'DM Mono',monospace; font-size:0.65rem; padding:4px 10px; border-radius:100px; letter-spacing:0.08em; white-space:nowrap; flex-shrink:0; }
        .topics-panel { padding:0 20px 16px; border-top:1px solid rgba(255,255,255,0.06); }
        .topics-list { list-style:none; padding:12px 0 0; margin:0; display:flex; flex-direction:column; gap:6px; }
        .topic-item { font-family:'DM Sans',sans-serif; font-size:0.83rem; color:#999; line-height:1.4; display:flex; gap:8px; align-items:flex-start; }
        .topic-item::before { content:'—'; color:#444; flex-shrink:0; }
        .section-divider { text-align:center; margin:20px 0 8px; position:relative; }
        .section-divider span { font-family:'DM Sans',sans-serif; font-size:0.7rem; letter-spacing:0.2em; text-transform:uppercase; color:#555; background:#0a0a0f; padding:0 12px; position:relative; z-index:1; }
        .chevron { font-size:0.7rem; color:#444; transition:transform 0.2s; }
        .chevron.open { transform:rotate(90deg); }
        .phase-label { font-family:'DM Mono',monospace; font-size:0.6rem; letter-spacing:0.15em; text-transform:uppercase; padding:16px 0 4px; color:#555; border-top:1px solid rgba(255,255,255,0.04); margin-top:8px; }
        .page-nav { display:flex; justify-content:center; gap:4px; padding:0 20px 0; margin-bottom:32px; }
        .page-nav-btn { font-family:'DM Sans',sans-serif; font-size:0.82rem; font-weight:500; letter-spacing:0.04em; padding:10px 28px; cursor:pointer; background:transparent; border:none; color:#555; border-bottom:2px solid transparent; transition:all 0.2s; }
        .page-nav-btn:hover { color:#999; }
        .page-nav-btn.pn-active { color:#f0f0f8; border-bottom-color:${accent}; }
        @media (max-width:600px) { .timeline::before { left:36px; } .grade-label { width:30px; font-size:0.6rem; } }
      `}</style>

      {/* ── Subject dropdown menu ──────────────────────────────────────────────
          Rendered here at root level (not inside the header) so it isn't clipped
          by the header's overflow. Only mounted when dropOpen is true. */}
      {dropOpen && (
        <SubjectDropdownMenu
          activeSubject={activeSubject}
          onSelect={setActiveSubject}
          onClose={() => setDropOpen(false)}
          anchorRef={btnRef}
        />
      )}

      {/* ── Header ────────────────────────────────────────────────────────────
          Contains the animated grid background, school name, subject title button,
          and the short description paragraph. */}
      <div className="curriculum-header">
        <div className="header-grid" /> {/* decorative dot-grid, color changes with subject */}
        <p className="subtitle">Montgomery High School</p>
        <h1 className="main-title">
          {/* SubjectTitle is the clickable "Mathematics ▾" button */}
          <SubjectTitle
            currentSubject={activeSubject}
            accentColor={accent}
            open={dropOpen}
            setOpen={setDropOpen}
            btnRef={btnRef}
          />
          {" "}Curriculum
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "0.9rem", maxWidth: 540, margin: "0 auto 0" }}>
          A comprehensive, multi-track program designed for students at Montgomery High School to be able to more easily explore their math progression.
          Pathways are advisory — high school course enrollment is based on prerequisites, not pathway assignment.
        </p>
      </div>

      {/* ── Page navigation tabs ──────────────────────────────────────────────
          Switches between the Curriculum Map and Program of Studies views.
          The active tab gets an underline in the subject's accent color. */}
      <div className="page-nav">
        <button className={`page-nav-btn${page === "map" ? " pn-active" : ""}`} onClick={() => setPage("map")}>
          Curriculum Map
        </button>
        <button className={`page-nav-btn${page === "pos" ? " pn-active" : ""}`} onClick={() => setPage("pos")}>
          Program of Studies
        </button>
      </div>

      {/* ── Page content ─────────────────────────────────────────────────────
          Only one page renders at a time based on the `page` state value. */}

      {/* Curriculum Map — grade timeline with pathway selector */}
      {page === "map" && <CurriculumMap accent={accent} gridRgb={gridRgb} />}

      {/* Program of Studies — full filterable course catalog */}
      {page === "pos" && (
        <div style={{ paddingTop: 8 }}>
          <div style={{ textAlign:"center", padding:"0 20px 32px", maxWidth:600, margin:"0 auto" }}>
            <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#555", fontSize:"0.85rem", lineHeight:1.7 }}>
              Full course descriptions, prerequisites, and credit information for all mathematics courses at Montgomery High School.
              Filter by course level to view a specific tier. Honors and AP courses each carry a +5 grade point weight.
              A graphing calculator is required for most courses. Prerequisites are strictly enforced; waiver applications are available through the Mathematics Supervisor.
            </p>
          </div>
          <ProgramOfStudies />
        </div>
      )}

      {/* ── Footer ── */}
      <footer style={{ textAlign:"center", padding:"20px 0" }}>
        <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#555", fontSize:"0.85rem", lineHeight:1.7 }}>
          2026 © Roshan Kareer, GNU General Public License 3.0 - Beta 1 (Build 6)
        </p>
      </footer>
    </div>
  );
}