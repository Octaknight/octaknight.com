// src/data/contactInfo.ts
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
}

export const contactInfoItems: ContactInfo[] = [
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@roboticsautomation.com",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "123 Automation Avenue, Tech City, USA",
  },
];