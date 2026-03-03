export function CurriculumMap() {
  const [page, setPage] = useState("map");
  const [selectedTrack, setSelectedTrack] = useState("Accelerated");
  const [expandedGrade, setExpandedGrade] = useState(null);
  const [activeSubject, setActiveSubject] = useState(subjects[0]); // Mathematics
  const [dropOpen, setDropOpen] = useState(false)
  const btnRef = useRef(null)

  const accent = activeSubject.accent;
  const gridRgb = activeSubject.gridColor;

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0f0a 100%)",
      minHeight: "100vh",
      color: "#e8e8f0",
      position: "relative",
    }}>
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
        .legend-bar { display:flex; gap:24px; justify-content:center; flex-wrap:wrap; padding:20px; margin-bottom:8px; font-family:'DM Sans',sans-serif; font-size:0.78rem; color:#666; }
        .chevron { font-size:0.7rem; color:#444; transition:transform 0.2s; }
        .chevron.open { transform:rotate(90deg); }
        .phase-label { font-family:'DM Mono',monospace; font-size:0.6rem; letter-spacing:0.15em; text-transform:uppercase; padding:16px 0 4px; color:#555; border-top:1px solid rgba(255,255,255,0.04); margin-top:8px; }
        .page-nav { display:flex; justify-content:center; gap:4px; padding:0 20px 0; margin-bottom:32px; }
        .page-nav-btn { font-family:'DM Sans',sans-serif; font-size:0.82rem; font-weight:500; letter-spacing:0.04em; padding:10px 28px; cursor:pointer; background:transparent; border:none; color:#555; border-bottom:2px solid transparent; transition:all 0.2s; }
        .page-nav-btn:hover { color:#999; }
        .page-nav-btn.pn-active { color:#f0f0f8; border-bottom-color:${accent}; }
        @media (max-width:600px) { .timeline::before { left:36px; } .grade-label { width:30px; font-size:0.6rem; } }
      `}</style>

      {page === "map" && (<>
        <div className="track-tabs">
          {curriculum.tracks.map(track => (
            <button
              key={track}
              className={`track-tab ${selectedTrack === track
                ? track === "Accelerated" ? "active-accel"
                : track === "Advanced" ? "active-adv"
                : track === "Enriched" ? "active-enr"
                : "active-std"
                : "inactive"}`}
              onClick={() => setSelectedTrack(track)}
            >
              {trackColors[track].label}
            </button>
          ))}
        </div>

        <div className="timeline">
          <div className="section-divider" style={{ marginTop: 20 }}><span>High School · Grades 9–12</span></div>
          {curriculum.grades.filter(g => g.grade >= 9).map(gradeData => {
            const course = gradeData.courses[selectedTrack];
            const isExpanded = expandedGrade === gradeData.grade;
            const isHighlight = course.highlight;
            return (
              <div key={gradeData.grade} className="grade-row">
                <div className="grade-label">G{gradeData.grade}</div>
                <div className="timeline-dot" style={{
                  background: course.color + "33",
                  borderColor: course.color,
                  width: isHighlight ? 16 : 12,
                  height: isHighlight ? 16 : 12,
                  boxShadow: isHighlight ? `0 0 20px ${course.color}88` : "none",
                  marginTop: isHighlight ? 18 : 20
                }} />
                <div
                  className={`grade-card${isExpanded ? " expanded" : ""}${isHighlight ? " highlight-card" : ""}`}
                  onClick={() => setExpandedGrade(isExpanded ? null : gradeData.grade)}
                >
                  <div className="card-header">
                    <div className="course-name" style={{ color: isHighlight ? "#fff" : "#f0f0f8" }}>{course.name}</div>
                    {isHighlight && (
                      <span className="badge" style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}>
                        AP
                      </span>
                    )}
                    <span style={{ color: course.color + "aa" }} className={`chevron${isExpanded ? " open" : ""}`}>▶</span>
                  </div>
                  {isExpanded && (
                    <div className="topics-panel">
                      <ul className="topics-list">
                        {course.topics.map((t, i) => {
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

        <div style={{ fontFamily:"'DM Sans',sans-serif", textAlign:"center", padding:"0 20px 60px", color:"#444", fontSize:"0.78rem", maxWidth:600, margin:"0 auto", lineHeight:1.7 }}>
          Track placement is reviewed annually. Students may move between tracks based on performance and teacher recommendation.
          Prerequisites are firmly based on proficiency demonstrated over the entire year of work in the preceding course.
          All tracks are designed to support students in reaching the mathematics level appropriate for their college and career goals. Students requiring a waiver to enroll above recommendation must submit an application through the Mathematics Department Supervisor.
        </div>
      </>)}
    </div>
  );
}