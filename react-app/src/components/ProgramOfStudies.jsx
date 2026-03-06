import { useState, useEffect } from "react";
import { mathProgramOfStudies } from "../data/math";
import { scienceProgramOfStudies } from "../data/science";
import { languageProgramOfStudies } from "../data/language";
import { historyProgramOfStudies } from "../data/history";
import { englishProgramOfStudies } from "../data/english";
import { electivesProgramOfStudies } from "../data/electives";

/*
 * ProgramOfStudies
 *
 * Renders the "Program of Studies" tab — the full course catalog for mathematics.
 * Shows every individual course offered (not just the 4-track pathway view), grouped
 * by category (e.g. "High School — Mathematics") with expandable detail cards.
 *
 * Each card shows: course name, grade level, tier (CP / Honors / AP), credit weight,
 * and credits. Clicking a card expands it to reveal the full description, prerequisites,
 * and topic chips.
 *
 * A filter bar at the top lets users narrow by tier (All / CP / Honors / AP).
 *
 * State (local — nothing outside this component needs to know):
 *   expandedCourse  — the id of the currently open course card (null = all closed)
 *   filterTier      — the currently selected tier filter ("All", "CP", "Honors", or "AP")
 */
export function ProgramOfStudies({ activeSubject }) {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [filterTier, setFilterTier] = useState("All");

  const allTiers = ["All", "CP", "Honors", "AP"];

  // Color scheme for each tier badge
  const tierStyles = {
    CP:     { bg: "#94a3b822", color: "#94a3b8", border: "#94a3b844" },
    Honors: { bg: "#c084fc22", color: "#c084fc", border: "#c084fc44" },
    AP:     { bg: "#a5adb822", color: "#60a5fa", border: "#60a5fa44" },
  };

  // Maps a subject ID string to the correct Program of Studies data array for that subject.
  // Returns an object with:
  //   posSubject — the *ProgramOfStudies array (categories → courses) for the active subject
  const subject = (type) => {
    switch (type) {
      case 'math':     return { posSubject: mathProgramOfStudies };
      case 'science':  return { posSubject: scienceProgramOfStudies };
      case 'language': return { posSubject: languageProgramOfStudies };
      case 'history':  return { posSubject: historyProgramOfStudies };
      case 'english':  return { posSubject: englishProgramOfStudies };
      case 'electives': return { posSubject: electivesProgramOfStudies};
      default: return { posSubject: 'Error/not implemented' };
    }
  };

  // Destructure the correct Program of Studies data for the active subject
  const { posSubject } = subject(activeSubject.id)

  // Reset expanded card and tier filter whenever the user switches subjects.
  // Without this, switching from Math → Science could leave a Math course card
  // open (invalid id) or a stale tier filter hiding all Science courses.
  useEffect(() => {
    setExpandedCourse(null);
    setFilterTier("All");
  }, [activeSubject]);
  

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}>
      <style>{`
        .pos-filter-bar { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:24px; justify-content:center; }
        .pos-filter-btn { padding:7px 18px; border-radius:100px; font-family:'DM Sans',sans-serif; font-size:0.78rem; letter-spacing:0.05em; cursor:pointer; border:1.5px solid #333; background:transparent; color:#666; transition:all 0.2s; }
        .pos-filter-btn:hover { border-color:#555; color:#999; }
        .pos-filter-btn.f-active-all     { border-color:#e2e8f0; color:#e2e8f0; background:#e2e8f011; }
        .pos-filter-btn.f-active-CP      { border-color:#94a3b8; color:#94a3b8; background:#94a3b811; }
        .pos-filter-btn.f-active-Honors  { border-color:#c084fc; color:#c084fc; background:#c084fc11; }
        .pos-filter-btn.f-active-AP      { border-color:#60a5fa; color:#60a5fa; background:#60a5fa11; }
        .pos-category { margin-bottom:40px; }
        .pos-cat-header { display:flex; align-items:center; gap:12px; margin-bottom:16px; padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.07); }
        .pos-cat-dot { width:10px; height:10px; border-radius:50%; flex-shrink:0; }
        .pos-cat-title { font-family:'Playfair Display',serif; font-size:1.15rem; font-weight:600; color:#e8e8f0; }
        .pos-cat-grades { font-family:'DM Mono',monospace; font-size:0.65rem; color:#555; letter-spacing:0.1em; text-transform:uppercase; margin-left:auto; }
        .pos-card { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:10px; margin-bottom:8px; overflow:hidden; cursor:pointer; transition:all 0.2s; }
        .pos-card:hover { background:rgba(255,255,255,0.05); border-color:rgba(255,255,255,0.1); }
        .pos-card.open { border-color:rgba(255,255,255,0.12); background:rgba(255,255,255,0.04); }
        .pos-card-header { padding:14px 18px; display:flex; align-items:center; gap:12px; }
        .pos-card-name { font-family:'Playfair Display',serif; font-size:1rem; font-weight:600; color:#f0f0f8; flex:1; line-height:1.3; }
        .pos-meta { display:flex; gap:8px; align-items:center; flex-shrink:0; flex-wrap:wrap; justify-content:flex-end; }
        .pos-badge { font-family:'DM Mono',monospace; font-size:0.6rem; padding:3px 9px; border-radius:100px; letter-spacing:0.08em; border:1px solid; white-space:nowrap; }
        .pos-weight-badge { font-family:'DM Mono',monospace; font-size:0.6rem; padding:3px 9px; border-radius:100px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); color:#555; white-space:nowrap; }
        .pos-credit { font-family:'DM Mono',monospace; font-size:0.6rem; padding:3px 9px; border-radius:100px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); color:#555; white-space:nowrap; }
        .pos-grade-lbl { font-family:'DM Mono',monospace; font-size:0.6rem; color:#555; white-space:nowrap; }
        .pos-chevron { color:#444; font-size:0.7rem; transition:transform 0.2s; display:inline-block; }
        .pos-body { padding:0 18px 16px; border-top:1px solid rgba(255,255,255,0.05); }
        .pos-desc { font-family:'DM Sans',sans-serif; font-size:0.875rem; color:#aaa; line-height:1.7; margin:14px 0 14px; }
        .pos-prereq-section { margin-bottom:14px; }
        .pos-lbl { font-family:'DM Mono',monospace; font-size:0.6rem; letter-spacing:0.1em; text-transform:uppercase; color:#444; margin-bottom:8px; }
        .pos-prereq-list { display:flex; flex-direction:column; gap:6px; }
        .pos-prereq-item { display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; font-family:'DM Sans',sans-serif; font-size:0.8rem; }
        .pos-prereq-bullet { color:#333; flex-shrink:0; }
        .pos-prereq-course { color:#bbb; }
        .pos-prereq-grade { font-family:'DM Mono',monospace; font-size:0.68rem; color:#f59e0b; background:#f59e0b11; border:1px solid #f59e0b33; padding:1px 7px; border-radius:100px; white-space:nowrap; flex-shrink:0; }
        .pos-prereq-note { color:#555; font-size:0.75rem; font-style:italic; }
        .pos-chips { display:flex; flex-wrap:wrap; gap:6px; }
        .pos-chip { font-family:'DM Sans',sans-serif; font-size:0.72rem; padding:4px 10px; border-radius:6px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); color:#888; }
        .pos-weight-legend { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; margin-bottom:28px; font-family:'DM Sans',sans-serif; font-size:0.75rem; color:#555; }
        .pos-weight-legend-item { display:flex; align-items:center; gap:6px; }
        .pos-weight-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
      `}</style>

      {/* ── Tier filter buttons (All / CP / Honors / AP) ── */}
      <div className="pos-filter-bar">
        {allTiers.map(t => {
          const isActive = filterTier === t;
          const cls = isActive ? (t === "All" ? "f-active-all" : `f-active-${t}`) : "";
          return (
            <button key={t} onClick={() => setFilterTier(t)} className={`pos-filter-btn ${cls}`}>
              {t === "All" ? "All Courses" : t}
            </button>
          );
        })}
      </div>

      {/* ── Grade weight legend ── */}
      <div className="pos-weight-legend">
        {[["CP","Unweighted (0)","#94a3b8"],["Honors","+5 Weight","#c084fc"],["AP","+5 Weight","#60a5fa"]].map(([tier,wt,clr])=>(
          <div key={tier} className="pos-weight-legend-item">
            <div className="pos-weight-dot" style={{background:clr}}/>
            <span style={{color:clr}}>{tier}</span>
            <span>— {wt}</span>
          </div>
        ))}
      </div>

      {/* ── Course categories (currently just one: High School — Mathematics) ── */}
      {posSubject.map(cat => {
        // Filter courses by selected tier; if "All" selected, show everything
        const visible = filterTier === "All" ? cat.courses : cat.courses.filter(c => c.tier === filterTier);
        if (!visible.length) return null;

        return (
          <div key={cat.category} className="pos-category">
            {/* Category header with color dot, title, and grade range */}
            <div className="pos-cat-header">
              <div className="pos-cat-dot" style={{ background: cat.color }} />
              <div className="pos-cat-title">{cat.category}</div>
              <div className="pos-cat-grades">{cat.grades}</div>
            </div>

            {/* ── Individual course cards ── */}
            {visible.map(course => {
              const isOpen = expandedCourse === course.id;
              const ts = course.tier ? tierStyles[course.tier] : { bg:"#94a3b822", color:"#94a3b8", border:"#94a3b844" };

              return (
                // Clicking the card toggles it open/closed
                <div key={course.id} className={`pos-card${isOpen ? " open" : ""}`} onClick={() => setExpandedCourse(isOpen ? null : course.id)}>
                  <div className="pos-card-header">
                    <div className="pos-card-name">{course.name}</div>
                    <div className="pos-meta">
                      <span className="pos-grade-lbl">{course.gradeLevel}</span>
                      {course.tier && <span className="pos-badge" style={{ background: ts.bg, color: ts.color, borderColor: ts.border }}>{course.tier}</span>}
                      {course.weight !== undefined && <span className="pos-weight-badge">{course.weight === 0 ? "Unweighted" : `+${course.weight}`}</span>}
                      <span className="pos-credit">{course.credits} cr</span>
                      {/* Chevron rotates 90° when card is open */}
                      <span className="pos-chevron" style={{ transform: isOpen ? "rotate(90deg)" : "none" }}>▶</span>
                    </div>
                  </div>

                  {/* ── Expanded body: description, prerequisites, topic chips ── */}
                  {isOpen && (
                    <div className="pos-body">
                      <p className="pos-desc">{course.description}</p>
                      <p className="pos-note">{Object.keys(course).includes("note") && course.note}</p>

                      {/* Prerequisites section — uses prereqs array if present, falls back to prereq string */}
                      <div className="pos-prereq-section">
                        <div className="pos-lbl">Prerequisites</div>
                        {course.prereqs ? (
                          <div className="pos-prereq-list">
                            {course.prereqs.map((p, i) => (
                              <div key={i} className="pos-prereq-item">
                                <span className="pos-prereq-bullet">—</span>
                                <span className="pos-prereq-course">{p.course}</span>
                                {p.minGrade && <span className="pos-prereq-grade">min {p.minGrade}</span>}
                                {p.note && <span className="pos-prereq-note">({p.note})</span>}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.8rem",color:"#777"}}>{course.prereq || "None"}</div>
                        )}
                      </div>

                      {/* Topic chips — each topic rendered as a small pill */}
                      <div className="pos-lbl">Topics Covered</div>
                      <div className="pos-chips">
                        {course.topics.map((t, i) => <span key={i} className="pos-chip">{t}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}