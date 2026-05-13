export type RequestStatus = "new" | "in progress" | "done";
export type FilterType = RequestStatus | "all";

type UserRole = "user" | "manager";

export interface RequestItem {
  id: string;
  title: string;
  description: string;
  status: RequestStatus;
  createdAt: string;
}

interface AppDataState {
  role: UserRole;
  requests: RequestItem[];
}

interface AppActions {
  setRole: (role: UserRole) => void;
  addRequest: (title: string, description: string) => void;
  updateStatus: (id: string, status: RequestStatus) => void;
  deleteRequest: (id: string) => void;
  editRequest: (id: string, title: string, description: string) => void;
}

export type AppState = AppDataState & AppActions;
