// Author: Hannah Ishimwe TUYISHIMIRE
import MemberCard from './MemberCard'

function TeamDashboard() {
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>Welcome to our group project management application.</p>

      {/* Author: Ivan Mucyo - Tasks 9 and 13 */}
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
        name="Team Member"
        role="Designer"
        tasksCompleted={3}
        isActive={false}
      />
    </>
  )
}

export default TeamDashboard