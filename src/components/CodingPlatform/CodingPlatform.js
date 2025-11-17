import React, { useState, useRef, useEffect } from "react";
import "./CodingPlatform.css";
import axios from "axios";
import Footer from "../footer";

const BOILERPLATE = {
  javascript: `// JavaScript (Node / Browser)\n\nfunction main() {\n    console.log(\"Hello World\");\n}\n\nmain();\n`,
  python: `# Python\n\n# Write your code here\n\ndef main():\n    print(\"Hello World\")\n\nif __name__ == \"__main__\":\n    main()\n`,
  c: `// C\n\n#include <stdio.h>\n\nint main() {\n    // Write your code here\n    printf(\"Hello World\\n\");\n    return 0;\n}\n`,
  java: `// Java\n\npublic class Main {\n    public static void main(String[] args) {\n        // Write your code here\n        System.out.println(\"Hello World\");\n    }\n}\n`,
  html: `<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\" />\n    <title>Preview</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n</body>\n</html>\n`,
  css: `/* CSS */\nbody {\n    font-family: Arial, sans-serif;\n    background: black;\n}\nh1 { color: #6a5acd; }\n`,
};

const LANGUAGE_OPTIONS = [
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "C", value: "c" },
  { label: "Java", value: "java" },
  { label: "HTML/CSS", value: "htmlcss" },
];

export default function CodingPlatform() {
  const [language, setLanguage] = useState("javascript");
  const [jsCode, setJsCode] = useState(BOILERPLATE.javascript);
  const [pythonCode, setPythonCode] = useState(BOILERPLATE.python);
  const [cCode, setCCode] = useState(BOILERPLATE.c);
  const [javaCode, setJavaCode] = useState(BOILERPLATE.java);
  const [htmlCode, setHtmlCode] = useState(BOILERPLATE.html);
  const [cssCode, setCssCode] = useState(BOILERPLATE.css);
  const [output, setOutput] = useState("");
  const editorRef = useRef(null);

  useEffect(() => {
    // When language changes, set editor to appropriate boilerplate
    if (language === "javascript") setJsCode(BOILERPLATE.javascript);
    if (language === "python") setPythonCode(BOILERPLATE.python);
    if (language === "c") setCCode(BOILERPLATE.c);
    if (language === "java") setJavaCode(BOILERPLATE.java);
    if (language === "htmlcss") {
      setHtmlCode(BOILERPLATE.html);
      setCssCode(BOILERPLATE.css);
    }
    setOutput("");
  }, [language]);

  const JUDGE0_IDS = {
    python: 71,
    c: 50,
    java: 62,
  };

  // Smart run (JS executes locally; other languages display placeholder or use your backend)
  const runCode = async () => {
    if (language === "javascript") {
      try {
        let logs = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(args.join(" "));
          originalLog(...args);
        };

        eval(jsCode);
        console.log = originalLog;
        setOutput(logs.join("\n") || "No output");
      } catch (err) {
        setOutput(err.toString());
      }
    } else if (language === "htmlcss") {
      const iframe = document.getElementById("preview");
      const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(`<style>${cssCode}</style>${htmlCode}`);
        doc.close();
        setOutput("");
      }
    } else {
      try {
        setOutput("Running...");

        const codeToRun =
          language === "python"
            ? pythonCode
            : language === "c"
            ? cCode
            : language === "java"
            ? javaCode
            : "";

        const response = await axios.post("http://localhost:5000/run", {
          code: codeToRun,
          langId: JUDGE0_IDS[language],
        });

        setOutput(
          response.data.stdout ||
            response.data.stderr ||
            response.data.compile_output ||
            "No output"
        );
      } catch (error) {
        setOutput(error.toString());
      }
    }
  };

  // Helper: get current active code and setter for the simple textarea editor
  function getEditorValue() {
    if (language === "javascript") return jsCode;
    if (language === "python") return pythonCode;
    if (language === "c") return cCode;
    if (language === "java") return javaCode;
    return ""; // html/css handled separately
  }
  function setEditorValue(val) {
    if (language === "javascript") setJsCode(val);
    if (language === "python") setPythonCode(val);
    if (language === "c") setCCode(val);
    if (language === "java") setJavaCode(val);
  }

  // Smart indentation & tab handling
  const handleKeyDown = (e) => {
    const el = editorRef.current;
    if (!el) return;

    const val = el.value;
    const start = el.selectionStart;
    const end = el.selectionEnd;

    // TAB: insert 4 spaces
    if (e.key === "Tab") {
      e.preventDefault();
      const before = val.slice(0, start);
      const after = val.slice(end);
      const insert = "    ";
      const newPos = start + insert.length;
      const newVal = before + insert + after;
      setEditorValue(newVal);
      // update cursor manually after state update using setTimeout
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = newPos;
      });
      return;
    }

    // SHIFT+TAB: outdent one level if line starts with 4 spaces or a tab
    if (e.key === "Tab" && e.shiftKey) {
      // Handled above by preventing default. This branch rarely runs because Tab handled first.
    }

    // Enter: smart indenting & brace handling
    if (e.key === "Enter") {
      e.preventDefault();

      // find line start
      const lineStart = val.lastIndexOf("\n", start - 1) + 1;
      const currentLine = val.slice(lineStart, start);
      // capture leading whitespace
      const match = currentLine.match(/^[\t ]*/);
      const leading = match ? match[0] : "";

      // detect if char before cursor (non-space) is an opening brace that should increase indent
      const beforeChar = val.slice(0, start).trimEnd().slice(-1);
      // detect the next non-whitespace char after cursor
      const afterNonWS = val.slice(end).trimStart().slice(0, 1);

      let increasedIndent = leading;
      // for languages with braces add indent
      if (beforeChar === "{" || beforeChar === "[" || beforeChar === "(") {
        increasedIndent = leading + "    ";
      }

      // Build new value
      // If next non-whitespace is a closing brace and previous char is opening brace,
      // we insert a newline with increased indent and then another newline with original indent
      let newValue, cursorPos;
      if ((beforeChar === "{" || beforeChar === "[") && afterNonWS === "}") {
        // insert newline + increasedIndent + newline + leading
        newValue =
          val.slice(0, start) +
          "\n" +
          increasedIndent +
          "\n" +
          leading +
          val.slice(end);
        cursorPos = start + 1 + increasedIndent.length;
      } else {
        // normal insertion: newline + increasedIndent
        newValue =
          val.slice(0, start) + "\n" + increasedIndent + val.slice(end);
        cursorPos = start + 1 + increasedIndent.length;
      }

      setEditorValue(newValue);
      // move caret after requestAnimationFrame
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = cursorPos;
      });
    }

    // Handle Shift+Tab outdent
    if (e.key === "Tab" && e.shiftKey) {
      e.preventDefault();
      const lineStart = val.lastIndexOf("\n", start - 1) + 1;
      const line = val.slice(lineStart, start);
      if (line.startsWith("    ")) {
        const before =
          val.slice(0, lineStart) +
          val.slice(lineStart + 4, start) +
          val.slice(start);
        setEditorValue(before);
        requestAnimationFrame(() => {
          const delta = 4;
          el.selectionStart = el.selectionEnd = Math.max(
            lineStart,
            start - delta
          );
        });
      } else if (line.startsWith("\t")) {
        const before =
          val.slice(0, lineStart) +
          val.slice(lineStart + 1, start) +
          val.slice(start);
        setEditorValue(before);
        requestAnimationFrame(() => {
          el.selectionStart = el.selectionEnd = Math.max(lineStart, start - 1);
        });
      }
    }
  };

  return (
    <div className="cp-wrap">
      <div className="cp-top">
        <div className="cp-brand">
          <div className="glow-dot" />
          <span>AG Studio</span>
        </div>

        <div className="cp-controls">
          <select
            className="cp-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {LANGUAGE_OPTIONS.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>

          <button className="cp-run" onClick={runCode}>
            Run
          </button>
        </div>
      </div>

      <div className="cp-main">
        <div className="cp-editor">
          {language === "htmlcss" ? (
            <div className="cp-dual">
              <div className="cp-block">
                <div className="cp-block-title">HTML</div>
                <textarea
                  className="cp-textarea"
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                />
              </div>

              <div className="cp-block">
                <div className="cp-block-title">CSS</div>
                <textarea
                  className="cp-textarea"
                  value={cssCode}
                  onChange={(e) => setCssCode(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="cp-single">
              <div className="cp-block-title">{language.toUpperCase()}</div>
              <textarea
                ref={editorRef}
                className="cp-textarea"
                value={getEditorValue()}
                onChange={(e) => setEditorValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          )}
        </div>

        <div className="cp-output">
          <div className="cp-output-title">Output</div>
          {language === "htmlcss" ? (
            <iframe id="preview" className="cp-preview" title="preview" />
          ) : (
            <pre className="cp-output-pre">{output}</pre>
          )}
        </div>
      </div>
      
    </div>
  );
}
