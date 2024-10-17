import React from 'react';
import SkillRingChart from '../components/ringchart/SkillRingChart';
import { skillset, skillsSummary } from '../utils/Constants';
import './Skills.css';

const Skills = () => {
  return (
    <div className="App">
      <div className="skills-container">
        {/* Left Section: Charts */}
        <div className="chart-container">
          {skillset.map((skill, index) => (
            <SkillRingChart
              key={index}
              title={skill.title}
              labels={skill.skills}
              data={skill.yearOfExperience}
            />
          ))}
        </div>

        {/* Right Section: Descriptions */}
        <div className="description-container">
          <h3>My Skillset Overview</h3>
          {skillsSummary.map((summary, index)=>(
            <p>
              {summary}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
