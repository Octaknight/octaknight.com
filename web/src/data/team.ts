// src/data/team.ts

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
    imageUrl: "/images/team/alice.png",
  },
  {
    id: 2,
    name: "Bob Williams",
    role: "Automation Specialist",
    imageUrl: "/images/team/bob.png",
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "AI/ML Developer",
    imageUrl: "/images/team/charlie.png",
  },
  {
    id: 4,
    name: "Diana Smith",
    role: "AI/ML Developer",
    imageUrl: "/images/team/diana.png",
  },
  {
    id: 5,
    name: "Eve Davis",
    role: "AI/ML Developer",
    imageUrl: "/images/team/eve.png",
  }
  // Add more team members here
];