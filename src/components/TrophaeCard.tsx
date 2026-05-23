"use client";

import Image from "next/image";

const SKULL_SVG = [
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>",
  "<ellipse cx='10' cy='8.5' rx='6' ry='6' fill='#d4a843' opacity='0.8'/>",
  "<circle cx='7' cy='8' r='1.8' fill='#201727'/>",
  "<circle cx='13' cy='8' r='1.8' fill='#201727'/>",
  "<path d='M9.2 11 L10 12.3 L10.8 11Z' fill='#201727'/>",
  "<rect x='6' y='12.5' width='8' height='3.5' fill='#d4a843' opacity='0.8'/>",
  "<rect x='7.3' y='13' width='1.2' height='2.8' fill='#201727'/>",
  "<rect x='9.4' y='13' width='1.2' height='2.8' fill='#201727'/>",
  "<rect x='11.5' y='13' width='1.2' height='2.8' fill='#201727'/>",
  "</svg>",
].join("");

const SKULL_BG = 'url("data:image/svg+xml,' + encodeURIComponent(SKULL_SVG) + '")';;

export default function TrophaeCard() {
  const wrapperStyle: React.CSSProperties = {
    background: "#201727 " + SKULL_BG + " repeat",
    backgroundSize: "20px 20px",
    padding: "12px",
    borderRadius: 0,
  };

  return (
    <div style={wrapperStyle}>
      <div style={{ background: "#352741", borderRadius: 0, overflow: "hidden" }}>
        <div className="flex flex-col md:flex-row items-stretch min-h-[240px]">

          {/* Trophy image */}
          <div className="flex-shrink-0 flex items-center justify-center p-8 md:p-10 md:pr-4 md:w-52 lg:w-60">
            <Image
              src="/logopreis.png"
              alt="RIP-Trophäe"
              width={300}
              height={234}
              className="w-40 md:w-48 h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Divider */}
          <div
            className="hidden md:block w-px my-8 flex-shrink-0"
            style={{ background: "rgba(212,168,67,0.15)" }}
          />

          {/* Text */}
          <div className="flex-1 px-8 py-8 md:pl-8 flex flex-col justify-center">
            <span className="section-eyebrow mb-2">Preise</span>
            <h3 className="font-serif text-3xl md:text-4xl font-black text-creme-200 mb-3 leading-tight">
              Die Trophäe
            </h3>
            <p className="font-body text-creme-200/70 text-base leading-relaxed mb-2">
              Die Siegertrophäe wird gestiftet von{" "}
              <span className="text-creme-200 font-semibold">Bestattung Himmelblau</span>{" "}
              und gestaltet von{" "}
              <span className="text-gold-400 font-semibold">Ember-Glass</span>.
            </p>
            <p className="font-body text-creme-200/40 text-sm italic">
              Ein Pokal, so einzigartig wie der Tod selbst.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
