import { CDN_BASE_URL } from "@/lib/config";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Lead Robotics Engineer",
    imageUrl: `${CDN_BASE_URL}/team/alice.png`,
  },
  {
    id: 2,
    name: "Bob Williams",
    role: "Automation Specialist",
    imageUrl: `${CDN_BASE_URL}/team/bob.png`,
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "AI/ML Developer",
    imageUrl: `${CDN_BASE_URL}/team/charlie.png`,
  },
  {
    id: 4,
    name: "Diana Smith",
    role: "AI/ML Developer",
    imageUrl: `${CDN_BASE_URL}/team/diana.png`,
  },
  {
    id: 5,
    name: "Eve Davis",
    role: "AI/ML Developer",
    imageUrl: `${CDN_BASE_URL}/team/eve.png`,
  }
];