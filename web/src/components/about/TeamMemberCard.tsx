import type { TeamMember } from "@/data/team";
import { motion } from "framer-motion";

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string; // Add className as optional prop
}

const TeamMemberCard = ({ member, className = "" }: TeamMemberCardProps) => {
  return (
    <motion.div
      className={`group relative h-80 w-full cursor-pointer overflow-hidden rounded-lg shadow-lg ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <img
        src={member.imageUrl}
        alt={member.name}
        className="h-full w-full object-cover transition-transform duration-500 ease-in-out lg:group-hover:scale-110"
      />

      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 transition-opacity duration-500 ease-in-out opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
      >
        <h3 className="transform text-xl font-bold text-white transition-transform duration-300 ease-in-out translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">
          {member.name}
        </h3>
        {/* <p className="transform text-sm text-white/80 transition-transform duration-300 ease-in-out translate-y-4 delay-75 group-hover:translate-y-0">
          {member.role}
        </p> */}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;