// Author: Ivan Mucyo
// Tasks 10–17: Reusable MemberCard component with typed props,
// numeric and boolean props, conditional rendering, and optional bio.

import './MemberCard.css';

interface MemberCardProps {
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
}

function MemberCard({
  name,
  role,
  tasksCompleted,
  isActive,
}: MemberCardProps) {
  const statusClass = isActive ? 'active' : 'inactive';

  return (
    <div className={`member-card card-spacing ${statusClass}`}>
      <h2 className="member-name">{name}</h2>

      <p className="member-role">{role}</p>

      <p>Tasks completed: {tasksCompleted}</p>

      <p
        className="member-status"
        style={{ fontWeight: 'bold' }}
      >
        {isActive ? 'Active' : 'Inactive'}
      </p>
    </div>
  );
}

export default MemberCard;