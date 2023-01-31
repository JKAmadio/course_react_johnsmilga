import React from 'react';

function SectionTitle(props) {
  const { firstWord, secondWord } = props;
  return (
    <div className="section-title">
      <h2>
        {firstWord} <span>{secondWord}</span>
      </h2>
    </div>
  );
}

export default SectionTitle;
