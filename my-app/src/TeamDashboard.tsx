import './TeamDashboard.css';
import MemberCard from './MemberCard';
import { useState } from 'react';
import type { Member } from './types';


// Author: Joshua Mugisha — Task 42: typed seed data for the array state
const initialMembers: Member[] = [
  { id: '1', name: 'Ivan Mucyo', role: 'Developer', tasksCompleted: 5, isActive: true },
  { id: '2', name: 'Hannah Ishimwe TUYISHIMIRE', role: 'Developer', tasksCompleted: 4, isActive: true },
  { id: '3', name: 'Thierry Maridadi', role: 'Developer', tasksCompleted: 3, isActive: true },
  { id: '4', name: 'Joshua Mugisha', role: 'Developer', tasksCompleted: 3, isActive: true },
  { id: '5', name: 'Ange Umutoni', role: 'Developer', tasksCompleted: 2, isActive: true },
  { id: '6', name: 'Isaro Julie', role: 'Developer', tasksCompleted: 1, isActive: true },
];

function TeamDashboard() {
  // Author: Ange Umutoni - Task 31: typed numeric state for team score
  const [teamScore, setTeamScore] = useState<number>(0);
  
  // Author: Ange Umutoni - Task 36: typed string state for new member name
  const [newMemberName, setNewMemberName] = useState<string>('');
  const [memberFilter, setMemberFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

// Author: Ange Umutoni - Task 38: typed onChange handler for member name input
const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setNewMemberName(e.target.value);
};

// Author: Joshua Mugisha - Tasks 43: Add member to array state on form submit.
const handleAddMember = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!newMemberName.trim()) return;

  const newMember: Member = {
    id: crypto.randomUUID(),
    name: newMemberName.trim(),
    role: 'Developer',
    tasksCompleted: 0,
    isActive: true
  };
  setMembers((prev) => [...prev, newMember]);
  setNewMemberName('');
};
  
// Author: Joshua Mugisha; task 45 -- Remove member from array state.
const handleRemoveMember = (id: string) => {
  setMembers((prev) => prev.filter((member) => member.id !== id));
}

const handleToggleMemberStatus = (id: string) => {
  setMembers((prev) =>
    prev.map((member) =>
      member.id === id ? { ...member, isActive: !member.isActive } : member
    )
  );
};
// Author: Joshua Mugisha; task 42 -- Array State, typed.
const [members, setMembers] = useState<Member[]>(initialMembers);

const visibleMembers = members.filter((member) => {
  const matchesFilter =
    memberFilter === 'all' ||
    (memberFilter === 'active' && member.isActive) ||
    (memberFilter === 'inactive' && !member.isActive);
  const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesFilter && matchesSearch;
});

  return (
    <div className="dashboard">
      <h1>Team Dashboard</h1>
      <p>Welcome to our group project management application.</p>
      <p>Team Score: {teamScore}</p>
      <button onClick={() => setTeamScore((prev) => prev + 1)}>+1</button>
      <button onClick={() => setTeamScore((prev) => (prev > 0 ? prev - 1 : 0))}>-1</button>

{/* Author: Ange Umutoni - Tasks 37–39: controlled input, typed onChange, and form with typed submit handler */}
    <form onSubmit={handleAddMember}>
      <input
        type="text"
        placeholder="New member name"
        value={newMemberName}
        onChange={handleNameChange}
      />
      <button type="submit">Add Member</button>
    </form>

    <div className="member-controls">
      <label>
        Search members
        <input
          type="search"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        />
      </label>
      <label>
        Show
        <select
          value={memberFilter}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setMemberFilter(e.target.value as 'all' | 'active' | 'inactive')
          }
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>
    </div>

{/* Ivan Mucyo's original tasks 9–17 work
    is preserved in git history — see commit 180a3ea.
    Author: Joshua Mugisha - Task 44: render members from array state */}

      <div className="member-list">

{/* Author: Joshua Mugisha; task 46 -- remove member from the array using pass id + onRemove. */}
        {visibleMembers.map((member) => (
          <MemberCard
            key={member.id}
            id={member.id}
            name={member.name}
            role={member.role}
            tasksCompleted={member.tasksCompleted}
            isActive={member.isActive}
            onRemove={handleRemoveMember}
            onToggleStatus={handleToggleMemberStatus}
          />
        ))}
      </div>
    </div>
  );
  
}


export default TeamDashboard;

      
