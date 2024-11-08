'use client'
import { useState } from 'react';

export default function CategoryDescription({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <p className={`mt-4 md:mt-6 text-sm md:text-base text-gray-600 max-w-lg md:max-w-2xl mx-auto ${isExpanded ? '' : 'truncate-3-lines'}`}>
        {description}
      </p>
      <button
        onClick={toggleExpand}
        className="mt-2 text-gray-600 hover:text-accent-color text-sm font-medium"
      >
        {isExpanded ? 'See Less' : 'See More'}
      </button>
    </>
  );
}