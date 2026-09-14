// Author: Ivan Mucyo
// Tasks 10–14: Reusable MemberCard component with typed props.

interface MemberCardProps {
  name: string
  role: string
  tasksCompleted: number
}

function MemberCard({
  name,
  role,
  tasksCompleted,
}: MemberCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Tasks Completed: {tasksCompleted}</p>
    </div>
  )
}

export default MemberCard