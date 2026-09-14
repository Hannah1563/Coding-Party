// Author: Hannah Tuyishimire
import MemberCard from './MemberCard'

function TeamDashboard() {
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>Welcome to our group project management application.</p>

      {/* Author: Ivan Mucyo - Tasks 9–17 */}

      <MemberCard
        name="Ivan Mucyo"
        role="Developer"
        tasksCompleted={5}
        isActive={true}
      />

      <MemberCard
        name="Hannah Tuyishimire"
        role="Developer"
        tasksCompleted={4}
        isActive={true}
      />

      <MemberCard
        name="Thiery Maridadi"
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
        name="Angel Umutoni"
        role="Developer"
        tasksCompleted={2}
        isActive={true}
      />

      <MemberCard
        name="Isaro Julie"
        role="Developer"
        tasksCompleted={2}
        isActive={true}
      />
    </>
  )
}

export default TeamDashboard