// Author: Jean Baptiste Tuyishimire
import MemberCard from './MemberCard'

function TeamDashboard() {
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>Welcome to our group project management application.</p>

      {/* Author: Ivan Mucyo - Task 13 */}
      <MemberCard name="Ivan Mucyo" role="Developer" />
      <MemberCard name="Jean Baptiste Tuyishimire" role="Developer" />
      <MemberCard name="Thiery Maridadi" role="Designer" />
    </>
  )
}

export default TeamDashboard