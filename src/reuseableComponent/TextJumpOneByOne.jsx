import React from "react";
import styled, { keyframes } from "styled-components";

// Jump animation
const jump = keyframes`
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-12px); }
  60% { transform: translateY(5px); }
`;

// Each letter styled
const JumpLetter = styled.span`
  display: inline-block;
  animation: ${jump} 1s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || "0s"};
`;

// Component that splits text
const TextJump = ({ text = "" }) => {
  return (
    <span>
      {text.split("").map((char, i) => (
        <JumpLetter key={i} $delay={`${i * 0.2}s`}>
          {char === " " ? "\u00A0" : char}
        </JumpLetter>
      ))}
    </span>
  );
};

export default TextJump;

