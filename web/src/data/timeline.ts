// src/data/timeline.ts

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2021",
    title: "Company Founded",
    description: "Our journey began with a small team of passionate engineers and a shared vision for the future of automation.",
  },
  {
    year: "2022",
    title: "First Major Project",
    description: "Successfully designed and deployed our first fully autonomous robotic arm for a leading manufacturing client.",
  },
  {
    year: "2024",
    title: "Expansion into AI",
    description: "We integrated advanced machine learning models into our systems, enabling predictive maintenance and smarter automation.",
  },
  {
    year: "2025",
    title: "100+ Successful Deployments",
    description: "Reached a major milestone, celebrating over one hundred successful robotics and automation solutions delivered worldwide.",
  },
];