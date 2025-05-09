"use client";
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './App.css';

function Page() {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Editor

## Type on the left, see preview on the right

- This is a list item
- Another item

**Bold text** and *italic text*

\`\`\`javascript
// Code block
function hello() {
  console.log("Hello, world!");
}
\`\`\`

[Visit GitHub](https://github.com/fezzopro/markdown_frontend)`);

  const handleExport = () => {
    const input: HTMLElement | null = document.getElementById('preview');
    if (!input) {
    console.error("Element with ID 'preview' not found.");
    return;
  }
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('markdown-export.pdf');
    });
  };

  const handleCopy = async () => {
    const preview = document.getElementById('preview');
    const range = document.createRange();
    if (preview) {
      range.selectNode(preview);
    }
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();
    }
    
    // Show copied notification
    const copyBtn = document.getElementById('copy-btn');
    if(copyBtn) {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
      }, 2000);
    }
  };

  return (
    <div className="app">
      <div className="editor-container">
        <div className="editor-pane">
          <h2>Markdown Editor</h2>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="editor"
            spellCheck="false"
          />
        </div>
        <div className="preview-pane">
          <div className="preview-header">
            <h2>Preview</h2>
            <div className="button-group">
              <button id="copy-btn" onClick={handleCopy} className="action-btn">
                Copy
              </button>
              <button onClick={handleExport} className="action-btn">
                Export PDF
              </button>
            </div>
          </div>
          <div id="preview" className="preview-content">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;