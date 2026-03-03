import { useState, useRef, useEffect } from "react";
import { subjects } from "../data/subjects";

/*
 * SubjectDropdownMenu
 *
 * The floating menu that appears when the user clicks the subject title in the header.
 * Lists all subjects (Mathematics, English, Science, etc.) with their status.
 * Unavailable subjects show a "SOON" pill and cannot be clicked.
 * The active subject shows an "ACTIVE" pill.
 *
 * This component renders at the ROOT level of the app (as a sibling of the header,
 * not inside it). This is intentional — it prevents the menu from being clipped
 * by the header's overflow or stacking context. Its position is calculated by
 * reading the anchor button's location on the page using getBoundingClientRect().
 *
 * Props:
 *   activeSubject  — the currently selected subject object (from subjects.js)
 *   onSelect       — callback fired when a subject is chosen; receives the new subject object
 *   onClose        — callback to close the menu (sets dropOpen to false in the parent)
 *   anchorRef      — ref attached to the SubjectTitle button, used to calculate menu position
 *
 * State (local):
 *   pos  — { top, left } pixel position of the menu, calculated on mount
 */
export function SubjectDropdownMenu({ activeSubject, onSelect, onClose, anchorRef }) {
  const menuRef = useRef(null); // ref for the menu div, used to detect outside clicks
  const [pos, setPos] = useState({ top: 0, left: 0 });

  // On mount: read the anchor button's position and calculate where to place the menu.
  // Adding window.scrollY converts viewport coordinates to page coordinates so the
  // menu stays correctly positioned even if the user has scrolled down.
  useEffect(() => {
    if (anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPos({ top: rect.bottom + window.scrollY + 8, left: rect.left + rect.width / 2 });
    }
  }, [anchorRef]);

  // Close the menu when the user clicks anywhere outside both the menu and the anchor button.
  // The event listener is added to the whole document and cleaned up on unmount.
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
    // position: absolute anchors to the root <div> (which has position: relative)
    // transform: translateX(-50%) centers the menu horizontally under the button
    <div ref={menuRef} style={{
      position: "absolute", top: pos.top, left: pos.left,
      transform: "translateX(-50%)", zIndex: 200,
      background: "#0f0f1a", border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "12px", padding: "8px", minWidth: "260px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.6)"
    }}>
      {/* One button per subject */}
      {subjects.map(subj => {
        const isActive = subj.id === activeSubject.id;
        const isDisabled = !subj.available; // unavailable subjects are grayed out and unclickable

        return (
          <button
            key={subj.id}
            disabled={isDisabled}
            onClick={() => { if (!isDisabled) { onSelect(subj); onClose(); } }}
            style={{
              display: "flex", alignItems: "center", gap: "12px",
              width: "100%", padding: "10px 14px", borderRadius: "8px",
              border: "none", background: isActive ? `${subj.accent}15` : "transparent",
              cursor: isDisabled ? "default" : "pointer",
              textAlign: "left", transition: "background 0.15s",
            }}
            onMouseEnter={e => { if (!isDisabled && !isActive) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
            onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
          >
            {/* Color dot — gray for unavailable, accent color for available */}
            <div style={{
              width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
              background: isDisabled ? "#333" : subj.accent,
              boxShadow: isActive ? `0 0 8px ${subj.accent}88` : "none",
            }} />

            {/* Subject label */}
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem",
              fontWeight: isActive ? 500 : 400,
              color: isDisabled ? "#3a3a4a" : isActive ? subj.accent : "#aaa",
              flex: 1,
            }}>
              {subj.label}
            </span>

            {/* Status pill — "SOON" for unavailable, "ACTIVE" for the current subject */}
            {isDisabled && (
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.55rem",
                color: "#333", letterSpacing: "0.08em",
                border: "1px solid #2a2a3a", borderRadius: "100px", padding: "2px 7px",
              }}>SOON</span>
            )}
            {isActive && (
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.55rem",
                color: subj.accent, letterSpacing: "0.08em",
                border: `1px solid ${subj.accent}44`, borderRadius: "100px", padding: "2px 7px",
              }}>ACTIVE</span>
            )}
          </button>
        );
      })}
    </div>
  );
}