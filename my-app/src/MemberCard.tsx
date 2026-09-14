// Author: Ivan Mucyo
// Tasks 10–17: Reusable MemberCard component with typed props,
// numeric and boolean props, conditional rendering, and optional bio.

interface MemberCardProps {
  name: string
  role: string
  tasksCompleted: number
  isActive: boolean
  bio?: string
}

function MemberCard({
  name,
  role,
  tasksCompleted,
  isActive,
}: MemberCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Tasks Completed: {tasksCompleted}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  )
}

export default MemberCard