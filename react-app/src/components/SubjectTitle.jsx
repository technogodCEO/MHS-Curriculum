export function SubjectTitle({ currentSubject, accentColor, open, setOpen, btnRef }) {
  return (
    <button ref={btnRef} onClick={() => setOpen(o => !o)}
      style={{ background:"transparent", border:"none", cursor:"pointer", padding:0, display:"inline-flex", alignItems:"center", gap:"10px" }}
    >
      <span style={{
        background: `linear-gradient(90deg, ${accentColor}, ${accentColor}cc, ${accentColor})`,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: 900, letterSpacing: "-1px",
      }}>{currentSubject.label}</span>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
        color: accentColor + "99", border: `1px solid ${accentColor}44`,
        borderRadius: "4px", padding: "2px 6px", marginTop: "6px",
        display: "inline-block", transform: open ? "rotate(180deg)" : "none",
      }}>▾</span>
    </button>
  );
}