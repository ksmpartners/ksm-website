import React from 'react';
import './ColorTester.css';

export default function ShowColorTester() {
  return (
    <div className="tt-card">
      <p>This is the main text.</p>
      <p className="tt-card-description">This is muted text.</p>
      <p className="tt-card-highlight">This is accent text.</p>
    </div>
  );
}
