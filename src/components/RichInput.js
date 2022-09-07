import React from 'react';
import { useState, useRef } from 'react';
import { useCaretPosition } from 'react-use-caret-position';

export default function RichInput() {
  const handleChange = (e) => {
    const input = e.target;
    const text = input.value;
    const cursorPosition = input.selectionStart;
    const beforeCursorText = text.slice(0, cursorPosition);
    const afterCursorText = text.slice(cursorPosition, text.length);
    const finalText = beforeCursorText + '|' + afterCursorText;
    console.log(finalText);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <div className="render-area"></div>
    </div>
  );
}
