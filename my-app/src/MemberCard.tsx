// Author: Ivan Mucyo
// Tasks 10–17: Reusable MemberCard component with typed props,
// numeric and boolean props, conditional rendering, and optional bio.

import './MemberCard.css';

// Author: Joshua Mugisha; task 45 -- typed callback prop member removal.
interface MemberCardProps {
  id: string;
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
  onRemove: (id: string) => void; 
  onToggleStatus: (id: string) => void;
}

function MemberCard({
  id,
  name,
  role,
  tasksCompleted,
  isActive,
  onRemove,
  onToggleStatus
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
      {/* Author: Joshua Mugisha; task 46 -- remove button wired to onRemove callback. */}
      <button onClick={() => onToggleStatus(id)}>
        Set {isActive ? 'Inactive' : 'Active'}
      </button>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
}

export default MemberCard;
