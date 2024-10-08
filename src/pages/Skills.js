import React from 'react';
import SkillRingChart from './SkillRingChart';
import './Skills.css';

const App = () => {
  const frontendSkills = ['React & Redux', 'JavaScript', 'TypeScript', 'HTML + CSS'];
  const frontendData = [2, 10, 1, 10];

  const backendSkills = ['Java', 'Spring Boot', 'Node.js', 'Express.js'];
  const backendData = [10, 3, 2.5, 2];

  const devOpsSkills = ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD Pipelines'];
  const devOpsData = [2, 2, 1.5, 2];

  return (
    <div className="App">
      <h1>My Skills</h1>
      <div className="chart-container">
        <SkillRingChart title="Frontend Skills" labels={frontendSkills} data={frontendData} />
        <SkillRingChart title="Backend Skills" labels={backendSkills} data={backendData} />
        <SkillRingChart title="DevOps Skills" labels={devOpsSkills} data={devOpsData} />
      </div>
    </div>
  );
};

export default App;
