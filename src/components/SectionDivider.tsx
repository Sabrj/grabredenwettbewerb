export default function SectionDivider() {
  return (
    <div
      className="flex items-center justify-center gap-5 px-8"
      style={{ background: "#f7f3e8", paddingTop: "4px", paddingBottom: "4px" }}
      aria-hidden="true"
    >
      <div
        className="flex-1 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(53,39,65,0.18))" }}
      />
      <svg width="20" height="20" viewBox="0 0 20 20" className="flex-shrink-0 opacity-20">
        <ellipse cx="10" cy="8.5" rx="6" ry="6" fill="#352741"/>
        <circle cx="7" cy="8" r="1.8" fill="#f7f3e8"/>
        <circle cx="13" cy="8" r="1.8" fill="#f7f3e8"/>
        <rect x="6" y="12.5" width="8" height="3.5" fill="#352741"/>
        <rect x="7.3" y="13" width="1.2" height="2.8" fill="#f7f3e8"/>
        <rect x="9.4" y="13" width="1.2" height="2.8" fill="#f7f3e8"/>
        <rect x="11.5" y="13" width="1.2" height="2.8" fill="#f7f3e8"/>
      </svg>
      <div
        className="flex-1 h-px"
        style={{ background: "linear-gradient(to left, transparent, rgba(53,39,65,0.18))" }}
      />
    </div>
  );
}
