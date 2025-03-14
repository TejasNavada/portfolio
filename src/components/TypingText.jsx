import React, { useState, useEffect } from 'react';

const TypingText = ({text, delay, style}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
        const timeout = setTimeout(() => {
            setDisplayedText(prevText => prevText + text[index]);
            setIndex(prevIndex => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
        }
    }, [text, index, delay]);
    return (
      <span style={style}>{displayedText}</span>
    )
  }
  export default TypingText
  