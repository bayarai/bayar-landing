"use client";

import { useState, useEffect } from "react";

const codeLines = [
  "import { Pipeline, Monitor, Guardrails } from 'bayar';",
  "",
  "// 1. Workflow Orchestration",
  "const agent = new Pipeline({ latency: 'low' });",
  "",
  "// 2. Real-time Observability",
  "agent.Monitor.track(['tokens', 'latency']);",
  "",
  "// 3. Governance & Security",
  "agent.Guardrails.enforceAccess();"
];

export default function CodeTerminal() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= codeLines.length) return;

    let charIndex = 0;
    const line = codeLines[lineIndex];

    const typingInterval = setInterval(() => {
      if (charIndex <= line.length) {
        setCurrentLine(line.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLine("");
        setLineIndex((prev) => prev + 1);
      }
    }, line.length === 0 ? 0 : 35); // 35ms typing speed per character

    return () => clearInterval(typingInterval);
  }, [lineIndex]);

  // A lightweight syntax highlighter tailored for this specific snippet
  const formatCode = (text) => {
    if (text.startsWith("//")) {
      return {text};
    }
    return (
      $&')
          .replace(/Pipeline|Monitor|Guardrails/g, '$&')
          .replace(/'[^']*'/g, '$&')
      }} />
    );
  };

  return (
    
      {/* Terminal Header */}
      
        
          
          
          
        
        setup.ts
      
      
      {/* Terminal Body */}
      
        {displayedLines.map((line, i) => (
          
            {formatCode(line)}
          
        ))}
        
        {/* Currently typing line */}
        {lineIndex < codeLines.length && (
          
            {formatCode(currentLine)}
            
          
        )}
        
        {/* Persistent blinking cursor after typing finishes */}
        {lineIndex >= codeLines.length && (
           
             
           
        )}
      
    
  );
}
