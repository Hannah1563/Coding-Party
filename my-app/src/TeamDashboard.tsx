import './TeamDashboard.css';
import MemberCard from './MemberCard';
import { useState } from 'react';

function TeamDashboard() {
  // Author: Ange Umutoni - Task 31: typed numeric state for team score
  const [teamScore, setTeamScore] = useState<number>(0);

  return (
    <div className="dashboard">
      <h1>Team Dashboard</h1>
      <p>Welcome to our group project management application.</p>
      <p>Team Score: {teamScore}</p>
      <button onClick={() => setTeamScore((prev) => prev + 1)}>+1</button>
      <button onClick={() => setTeamScore((prev) => (prev > 0 ? prev - 1 : 0))}>-1</button>

      {/* Author: Ivan Mucyo - Tasks 9–17 */}

      <div className="member-list">
        <MemberCard
          name="Ivan Mucyo"
          role="Developer"
          tasksCompleted={5}
          isActive={true}
        />

        <MemberCard
          name="Hannah Ishimwe TUYISHIMIRE"
          role="Developer"
          tasksCompleted={4}
          isActive={true}
        />

        <MemberCard
          name="Thierry Maridadi"
          role="Developer"
          tasksCompleted={3}
          isActive={true}
        />

        <MemberCard
          name="Joshua Mugisha"
          role="Developer"
          tasksCompleted={3}
          isActive={true}
        />

        <MemberCard
          name="Ange Umutoni"
          role="Developer"
          tasksCompleted={2}
          isActive={true}
        />

        <MemberCard
          name="Isaro Julie"
          role="Developer"
          tasksCompleted={1}
          isActive={true}
        />
      </div>
    </div>
  );
}


export default TeamDashboard;
