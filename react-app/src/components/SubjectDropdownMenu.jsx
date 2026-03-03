export function SubjectDropdownMenu({ activeSubject, onSelect, onClose, anchorRef }) {
  const menuRef = useRef(null);  // to detect clicks outside the menu
  const [pos, setPos] = useState({ top: 0, left: 0 });

  // runs once on mount: reads the button's position and sets top/left
  useEffect(() => {
    if (anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPos({ top: rect.bottom + window.scrollY + 8, left: rect.left + rect.width / 2 });
    }
  }, [anchorRef]);

  // closes menu when you click anywhere outside it
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target) &&
          anchorRef.current && !anchorRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [anchorRef, onClose]);

  return (
    <div ref={menuRef} style={{ position:"absolute", top:pos.top, left:pos.left, transform:"translateX(-50%)", zIndex:200,
  background:"#0f0f1a", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"12px",
  padding:"8px", minWidth:"260px", boxShadow:"0 20px 60px rgba(0,0,0,0.6)" }}>
      {/* Dropdown */}
      {subjects.map(subj => {
        const isActive = subj.id === activeSubject.id;
        const isDisabled = !subj.available;
        return (
          <button
            key={subj.id}
            disabled={isDisabled}
            onClick={() => { if (!isDisabled) { onSelect(subj); onClose(); } }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: "100%",
              padding: "10px 14px",
              borderRadius: "8px",
              border: "none",
              background: isActive ? `${subj.accent}15` : "transparent",
              cursor: isDisabled ? "default" : "pointer",
              textAlign: "left",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => { if (!isDisabled && !isActive) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
            onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
          >
            {/* Color dot */}
            <div style={{
              width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
              background: isDisabled ? "#333" : subj.accent,
              boxShadow: isActive ? `0 0 8px ${subj.accent}88` : "none",
            }} />
            {/* Label */}
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.88rem",
              fontWeight: isActive ? 500 : 400,
              color: isDisabled ? "#3a3a4a" : isActive ? subj.accent : "#aaa",
              flex: 1,
            }}>
              {subj.label}
            </span>
            {/* Status */}
            {isDisabled && (
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.55rem",
                color: "#333",
                letterSpacing: "0.08em",
                border: "1px solid #2a2a3a",
                borderRadius: "100px",
                padding: "2px 7px",
              }}>
                SOON
              </span>
            )}
            {isActive && (
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.55rem",
                color: subj.accent,
                letterSpacing: "0.08em",
                border: `1px solid ${subj.accent}44`,
                borderRadius: "100px",
                padding: "2px 7px",
              }}>
                ACTIVE
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}