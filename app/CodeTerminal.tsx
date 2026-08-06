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
      return <span className="text-gray-500">{text}</span>;
    }
    return (
      <span dangerouslySetInnerHTML={{
        __html: text
          .replace(/import|from|const|new/g, '<span class="text-pink-400">$&</span>')
          .replace(/Pipeline|Monitor|Guardrails/g, '<span class="text-blue-400">$&</span>')
          .replace(/'[^']*'/g, '<span class="text-amber-300">$&</span>')
      }} />
    );
  };

  return (
    
{/* Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-zinc-900/50 border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {/* Make sure setup.ts is wrapped in this span tag! */}
        <span className="ml-4 text-xs text-gray-500 font-mono">setup.ts</span>
      </div>
      
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
