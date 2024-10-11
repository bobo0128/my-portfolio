import React from 'react';
import SkillRingChart from './SkillRingChart';
import { skillset } from '../utils/Constants';
import './Skills.css';

const App = () => {

  return (
    <div className="App">
      <div className="chart-container">
        {skillset.map((skill,index) => (
          <SkillRingChart key={index} title={skill.title} labels={skill.skills} data={skill.yearOfExperience} />
        ))}
        {/* <SkillRingChart title={frontendSkills.title} labels={frontendSkills.skills} data={frontendSkills.yearOfExperience} />
        <SkillRingChart title="Backend Skills" labels={backendSkills} data={backendData} />
        <SkillRingChart title="DevOps Skills" labels={devOpsSkills} data={devOpsData} /> */}
      </div>
    </div>
  );
};

export default App;
