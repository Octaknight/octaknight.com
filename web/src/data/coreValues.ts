// src/data/coreValues.ts

import { Lightbulb, Target, Users, Shield } from "lucide-react";
import type { ComponentType } from "react";

export interface CoreValue {
  title: string;
  description: string;
  // This type allows us to pass the Lucide icon component directly
  Icon: ComponentType<{ className?: string }>;
}

export const coreValues: CoreValue[] = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of technology to create novel solutions for the most complex challenges.",
    Icon: Lightbulb,
  },
  {
    title: "Precision",
    description: "Our commitment to accuracy and reliability is embedded in every line of code and every component we build.",
    Icon: Target,
  },
  {
    title: "Collaboration",
    description: "We work hand-in-hand with our clients, building strong partnerships to achieve shared success.",
    Icon: Users,
  },
  {
    title: "Safety",
    description: "We prioritize the safety of people and systems above all, ensuring our solutions are robust and dependable.",
    Icon: Shield,
  },
];