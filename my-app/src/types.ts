// Author: Joshua Mugisha; task 41 --member interface.
export interface Member {
  id: string;
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string; // This would be an optional property to be used for member biography
}