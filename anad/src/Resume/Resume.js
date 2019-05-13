import React from 'react';
import Skills from './Skills';
import './Resume.css'
import Experience from './Experience';
import Education from './Education';
import Community from './Community';

function Resume() {
  return (
      <div className="resume">
        <h2>Resume</h2>
        <Skills />
        <Experience />
        <Education />
        <Community />
      </div>
  );
}

export default Resume;