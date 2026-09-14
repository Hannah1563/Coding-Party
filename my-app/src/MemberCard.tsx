// Author: Ivan Mucyo
// Tasks 10–12: Reusable MemberCard component with typed props.

interface MemberCardProps {
  name: string
  role: string
}

function MemberCard({ name, role }: MemberCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  )
}

export default MemberCard