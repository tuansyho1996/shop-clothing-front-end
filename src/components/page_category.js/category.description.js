'use client'
import { useEffect, useRef, useState } from 'react';

export default function CategoryDescription({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const textRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight);
      const maxLines = 3;
      const maxHeight = lineHeight * maxLines;

      if (textRef.current.scrollHeight > maxHeight) {
        setShowToggle(true);
      }
    }
  }, [description]);

  return (
    <>
      <p
        ref={textRef}
        style={{ whiteSpace: 'pre-line' }}
        className={`mt-4 md:mt-6 text-sm md:text-base text-gray-600 max-w-lg md:max-w-2xl mx-auto overflow-hidden transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'
          }`}
      >
        {description}
      </p>
      {showToggle && (
        <button
          onClick={toggleExpand}
          className="mt-2 text-gray-600 hover:text-accent-color text-sm font-medium"
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      )}
    </>
  );
}
