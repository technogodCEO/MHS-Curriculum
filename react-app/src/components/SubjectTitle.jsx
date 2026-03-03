/*
 * SubjectTitle
 *
 * The clickable subject name displayed in the page header (e.g. "Mathematics").
 * Renders as a styled button — clicking it toggles the subject switcher dropdown open/closed.
 * The arrow (▾) rotates 180° when the dropdown is open to indicate state.
 *
 * This is a pure display component — it holds no state of its own.
 * All state lives in the main app and is passed down as props.
 *
 * Props:
 *   currentSubject  — the active subject object (from subjects.js), used to display the label
 *   accentColor     — the active subject's hex color, used for the gradient text and arrow tint
 *   open            — whether the dropdown is currently open (controls arrow rotation)
 *   setOpen         — setter function from the parent to toggle dropOpen true/false
 *   btnRef          — ref passed down from the parent so SubjectDropdownMenu can read
 *                     this button's position on the page via getBoundingClientRect()
 */
export function SubjectTitle({ currentSubject, accentColor, open, setOpen, btnRef }) {
  return (
    <button
      ref={btnRef}          // attaches the ref so the dropdown can find this button's position
      onClick={() => setOpen(o => !o)}  // toggles the dropdown open/closed on click
      style={{
        background: "transparent", border: "none", cursor: "pointer",
        padding: 0, display: "inline-flex", alignItems: "center", gap: "10px"
      }}
    >
      {/* Subject name with gradient text in the subject's accent color */}
      <span style={{
        background: `linear-gradient(90deg, ${accentColor}, ${accentColor}cc, ${accentColor})`,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: 900, letterSpacing: "-1px",
      }}>
        {currentSubject.label}
      </span>

      {/* Arrow indicator — rotates 180° when dropdown is open */}
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
        color: accentColor + "99", border: `1px solid ${accentColor}44`,
        borderRadius: "4px", padding: "2px 6px", marginTop: "6px",
        display: "inline-block",
        transform: open ? "rotate(180deg)" : "none", // flips when open
      }}>▾</span>
    </button>
  );
}