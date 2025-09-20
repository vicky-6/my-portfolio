import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const TrueFocus = ({
  sentence = "Know Who i'm",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
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

  // Auto animation
  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  // Update focus frame
  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  // Manual hover
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
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            style={{
              position: "relative",
              fontSize: "3rem",
              fontWeight: "900",
              cursor: "pointer",
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease, color 0.3s ease`,
              color: isActive ? borderColor : "inherit",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      {/* Focus Frame */}
      <motion.div
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
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
              filter: `drop-shadow(0px 0px 4px ${glowColor})`,
              borderRadius: "3px",
            };

            if (corner === "top-left")
              Object.assign(baseStyle, {
                top: "-10px",
                left: "-10px",
                borderRight: "none",
                borderBottom: "none",
              });
            if (corner === "top-right")
              Object.assign(baseStyle, {
                top: "-10px",
                right: "-10px",
                borderLeft: "none",
                borderBottom: "none",
              });
            if (corner === "bottom-left")
              Object.assign(baseStyle, {
                bottom: "-10px",
                left: "-10px",
                borderRight: "none",
                borderTop: "none",
              });
            if (corner === "bottom-right")
              Object.assign(baseStyle, {
                bottom: "-10px",
                right: "-10px",
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
