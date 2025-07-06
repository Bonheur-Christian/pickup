export interface ReferenceData {
  id: string;
  name: string;
  school: string;
  references: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected" | "online";
  avatar: string;
  email?: string;
  phone?: string;
  role?: string;
  location?: string;
  dateOfBirth?: string;
}
