import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const contactInfoItems = [
  {
    title: "Headquarters",
    content: "CTS 508D, 2nd floor, Sankalp apartment, Congress Rd, Hindu Nagar, Tilakwadi, Belagavi, Karnataka 590006",
    icon: MapPin,
  },
  {
    title: "Email Us",
    content: "contact@octaknight.com",
    icon: Mail,
  },
  {
    title: "Call Us",
    content: "+91 93414 48170 | +91 87621 84925 | +91 81971 54066",
    icon: Phone,
    phones: [
      "+91 93414 48170",
      "+91 87621 84925",
      "+91 81971 54066",
    ],
  },
  {
    title: "Working Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM IST",
    icon: Clock,
  },
];