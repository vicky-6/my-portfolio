import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const TrueFocus = ({
  sentence = "Know Who I'm",
  manualMode = false,
  blurAmount = 6,
  borderColor = "#4c9aff",
  glowColor = "rgba(76, 154, 255, 0.7)",
  animationDuration = 0.6,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  // Auto Animation
  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  // Focus Frame Position
  useEffect(() => {
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parent = containerRef.current.getBoundingClientRect();
    const active = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: active.left - parent.left,
      y: active.top - parent.top,
      width: active.width,
      height: active.height,
    });
  }, [currentIndex, words.length]);

  // Manual Hover
  const handleMouseEnter = (index) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        display: "flex",
        gap: "1em",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <motion.span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            animate={{
              opacity: isActive ? 1 : 0.25,
              scale: isActive ? 1.25 : 1,
              x: isActive ? 0 : -10,
              filter: isActive
                ? "blur(0px)"
                : `blur(${blurAmount}px) brightness(50%)`,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            style={{
              fontSize: "3.2rem",
              fontWeight: "800",
              cursor: "pointer",
              color: isActive ? borderColor : "#999",
            }}
          >
            {word}
          </motion.span>
        );
      })}

      {/* Animated Focus Frame */}
      <motion.div
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: 1,
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          boxSizing: "content-box",
          border: "none",
        }}
      >
        {["top-left", "top-right", "bottom-left", "bottom-right"].map(
          (corner, i) => {
            const baseStyle = {
              position: "absolute",
              width: "1rem",
              height: "1rem",
              border: `3px solid ${borderColor}`,
              filter: `drop-shadow(0px 0px 8px ${glowColor})`,
              borderRadius: "4px",
            };

            if (corner === "top-left")
              Object.assign(baseStyle, {
                top: "-12px",
                left: "-12px",
                borderRight: "none",
                borderBottom: "none",
              });
            if (corner === "top-right")
              Object.assign(baseStyle, {
                top: "-12px",
                right: "-12px",
                borderLeft: "none",
                borderBottom: "none",
              });
            if (corner === "bottom-left")
              Object.assign(baseStyle, {
                bottom: "-12px",
                left: "-12px",
                borderRight: "none",
                borderTop: "none",
              });
            if (corner === "bottom-right")
              Object.assign(baseStyle, {
                bottom: "-12px",
                right: "-12px",
                borderLeft: "none",
                borderTop: "none",
              });

            return <span key={i} style={baseStyle}></span>;
          }
        )}
      </motion.div>
    </div>
  );
};

export default TrueFocus;
