// ScrollAnimations.tsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../index.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations: React.FC = () => {
  const fadeRef = useRef<HTMLDivElement>(null);
  const rotateRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animations = [
      { ref: fadeRef, vars: { opacity: 0, y: 100 } },
      { ref: rotateRef, vars: { rotation: 360, scale: 0.5 } },
      { ref: scaleRef, vars: { scale: 2, y: -100 } },
      { ref: slideRef, vars: { x: -200, opacity: 0 } },
      { ref: flipRef, vars: { rotationY: 180, opacity: 0 } },
    ];

    animations.forEach(({ ref, vars }) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { ...vars }, // starting state
          {
            opacity: 1,
            rotation: 0,
            rotationY: 0,
            scale: 1,
            x: 0,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "top 20%",
              scrub: true,   // 👈 This makes animation reverse on scroll up
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="container">
      {/* Fade In */}
      <div ref={fadeRef} className="section fade">
        <h2>Fade In Animation</h2>
      </div>

      {/* Rotate */}
      <div ref={rotateRef} className="section rotate">
        <h2>Rotate Animation</h2>
      </div>

      {/* Scale */}
      <div ref={scaleRef} className="section scale">
        <h2>Scale Animation</h2>
      </div>

      {/* Slide In */}
      <div ref={slideRef} className="section slide">
        <h2>Slide In Animation</h2>
      </div>

      {/* Flip */}
      <div ref={flipRef} className="section flip">
        <h2>Flip Animation</h2>
      </div>

      {/* Footer */}
      <div className="section footer">
        <h2>End of Demo ✨</h2>
      </div>
    </div>
  );
};

export default ScrollAnimations;
