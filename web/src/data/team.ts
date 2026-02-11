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
    name: "Devashish Gojagekar",
    role: "Knows Drones",
    imageUrl: `${CDN_BASE_URL}/team/Devi.png`,
  },
  {
    id: 2,
    name: "Sultankhan Pathan",
    role: "Actual Tony Stark",
    imageUrl: `${CDN_BASE_URL}/team/Sultan_2.png`,
  },
  {
    id: 3,
    name: "Rohit Raghavan",
    role: "Keeps Actual Tony Stark at bay",
    imageUrl: `${CDN_BASE_URL}/team/Rohit.png`,
  },
  {
    id: 4,
    name: "Prathamesh Raikar",
    role: "The Electric Wizard",
    imageUrl: `${CDN_BASE_URL}/team/Ash.png`,
  },
  {
    id: 5,
    name: "Laxmikant Bidari",
    role: "Hoots sometimes",
    imageUrl: `${CDN_BASE_URL}/team/Lakki 2.png`,
  },
  {
    id: 6,
    name: "Tanishka Lengade",
    role: "Laughs at everything",
    imageUrl: `${CDN_BASE_URL}/team/Tani.png`,
  }
];