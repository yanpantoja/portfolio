"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { personalInfo } from "@/data/portfolio";
import { getBanner, processCommand, COMMANDS } from "@/lib/commands";
import { TerminalSquare, LayoutGrid } from "lucide-react";
import type { Mode } from "@/lib/usePersistedMode";

interface OutputLine {
  id: number;
  html: string;
}

interface TerminalProps {
  mode?: Mode;
  onToggleMode?: () => void;
}

export default function Terminal({ mode, onToggleMode }: TerminalProps = {}) {
  const [lines, setLines] = useState<OutputLine[]>([]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [tempInput, setTempInput] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const lineCounterRef = useRef(0);
  const bannerShownRef = useRef(false);

  const firstName = personalInfo.name.split(" ")[0].toLowerCase();

  const getLineDelay = useCallback(() => {
    if (typeof window === "undefined") return 40;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 40;
  }, []);

  const scrollToBottom = useCallback(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = mainRef.current.scrollHeight;
    }
  }, []);

  // Initialize with banner animation on load
  useEffect(() => {
    if (bannerShownRef.current) return;
    bannerShownRef.current = true;

    const banner = getBanner();

    banner.forEach((line, idx) => {
      setTimeout(() => {
        const id = lineCounterRef.current++;
        setLines(prev => [...prev, { id, html: line || "&nbsp;" }]);
        scrollToBottom();
      }, getLineDelay() * idx);
    });
  }, [getLineDelay]); // eslint-disable-line react-hooks/exhaustive-deps

  // Focus input on mount and click
  useEffect(() => {
    const focusInput = () => {
      if (!isAnimating) {
        inputRef.current?.focus();
      }
    };

    focusInput();
    window.addEventListener("click", focusInput);
    return () => window.removeEventListener("click", focusInput);
  }, [isAnimating]);

  const renderPrompt = () => (
    `<span class="prompt-user">${firstName}</span>@<span class="prompt-host">dev</span>:$&nbsp;~&nbsp;`
  );

  const handleSubmit = useCallback(() => {
    if (isAnimating) return;

    const trimmedInput = input.trim();

    // Add command line to output
    const commandLine = trimmedInput
      ? `${renderPrompt()}<span class="output">${trimmedInput}</span>`
      : renderPrompt();

    const commandId = lineCounterRef.current++;
    setLines(prev => [...prev, { id: commandId, html: commandLine }]);

    if (trimmedInput) {
      setCommandHistory(prev => [...prev, trimmedInput]);
    }

    const { output, action } = processCommand(trimmedInput);

    if (action === "clear") {
      setLines([]);
      lineCounterRef.current = 0;
      const banner = getBanner();

      banner.forEach((line, idx) => {
        setTimeout(() => {
          const id = lineCounterRef.current++;
          setLines(prev => [...prev, { id, html: line || "&nbsp;" }]);
          scrollToBottom();
        }, getLineDelay() * idx);
      });
    } else if (action === "repo") {
      output.forEach((line, idx) => {
        setTimeout(() => {
          const id = lineCounterRef.current++;
          setLines(prev => [...prev, { id, html: line || "&nbsp;" }]);
          scrollToBottom();
        }, getLineDelay() * idx);
      });

      setTimeout(() => {
        window.open(personalInfo.social.github, "_blank");
      }, 500);
    } else if (output.length > 0) {
      setIsAnimating(true);

      output.forEach((line, idx) => {
        setTimeout(() => {
          const id = lineCounterRef.current++;
          setLines(prev => [...prev, { id, html: line || "&nbsp;" }]);
          scrollToBottom();

          if (idx === output.length - 1) {
            setIsAnimating(false);
          }
        }, getLineDelay() * idx);
      });
    }

    setInput("");
    setHistoryIndex(-1);
    setTempInput("");
  }, [input, isAnimating, scrollToBottom, getLineDelay]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (isAnimating) {
        e.preventDefault();
        return;
      }

      switch (e.key) {
        case "Enter":
          e.preventDefault();
          handleSubmit();
          break;

        case "Tab":
          e.preventDefault();
          const currentInput = input.toLowerCase();
          if (currentInput) {
            const match = COMMANDS.find((cmd) => cmd.startsWith(currentInput));
            if (match) {
              setInput(match);
            }
          }
          break;

        case "Escape":
          e.preventDefault();
          setInput("");
          break;

        case "ArrowUp":
          e.preventDefault();
          if (commandHistory.length > 0) {
            if (historyIndex === -1) {
              setTempInput(input);
              setHistoryIndex(commandHistory.length - 1);
              setInput(commandHistory[commandHistory.length - 1]);
            } else if (historyIndex > 0) {
              setHistoryIndex(historyIndex - 1);
              setInput(commandHistory[historyIndex - 1]);
            }
          }
          break;

        case "ArrowDown":
          e.preventDefault();
          if (historyIndex !== -1) {
            if (historyIndex < commandHistory.length - 1) {
              setHistoryIndex(historyIndex + 1);
              setInput(commandHistory[historyIndex + 1]);
            } else {
              setHistoryIndex(-1);
              setInput(tempInput);
            }
          }
          break;
      }
    },
    [input, commandHistory, historyIndex, tempInput, handleSubmit, isAnimating]
  );

  return (
    <div className="terminal-container">
      <div className="terminal-window">
        {/* Header - macOS style */}
        <div className="terminal-header">
          <div className="terminal-header-dots">
            <div className="terminal-header-dot terminal-header-dot--close" />
            <div className="terminal-header-dot terminal-header-dot--minimize" />
            <div className="terminal-header-dot terminal-header-dot--maximize" />
          </div>
          <span className="terminal-header-title">{firstName}@dev — portfolio</span>
          {onToggleMode && (
            <button
              onClick={onToggleMode}
              className="terminal-header-toggle"
              aria-label={`Switch to ${mode === 'terminal' ? 'portfolio' : 'terminal'} mode`}
            >
              <span className={`terminal-header-toggle-option ${mode === 'terminal' ? 'active' : ''}`}>
                <TerminalSquare size={12} aria-hidden="true" />
                <span>Terminal</span>
              </span>
              <span className={`terminal-header-toggle-option ${mode === 'portfolio' ? 'active' : ''}`}>
                <LayoutGrid size={12} aria-hidden="true" />
                <span>Portfolio</span>
              </span>
            </button>
          )}
        </div>

        {/* Main scrollable area - contains everything */}
        <main className="terminal-main" ref={mainRef}>
          {/* Terminal content */}
          <div className="terminal-content">
            {/* Initial prompt at top */}
            <div className="terminal-line">
              <span dangerouslySetInnerHTML={{ __html: renderPrompt() }} />
            </div>

            {/* Output lines */}
            {lines.map((line) => (
              <p
                key={line.id}
                className="terminal-line terminal-line--animated"
                dangerouslySetInnerHTML={{ __html: line.html }}
              />
            ))}
          </div>

          {/* Input line - in the flow, not fixed */}
          <div className="input-line">
            <span dangerouslySetInnerHTML={{ __html: renderPrompt() }} />
            <input
              ref={inputRef}
              type="text"
              className="input-field"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isAnimating}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
