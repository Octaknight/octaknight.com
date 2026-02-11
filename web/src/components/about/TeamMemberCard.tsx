import type { TeamMember } from "@/data/team";
import { motion } from "framer-motion";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    // CHANGE 1: Card height is reduced to `h-80` for a smaller overall size.
    <motion.div
      className="group relative h-80 w-full cursor-pointer overflow-hidden rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }} // Increased scale slightly for a more satisfying pop
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <img
        src={member.imageUrl}
        alt={member.name}
        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* CHANGE 2: The Gradient Overlay is now anchored to the bottom. */}
      {/* Instead of `inset-0`, we use `bottom-0 left-0 right-0`. This makes its height wrap the content inside it. */}
      {/* The padding (`p-4`) now defines the size of the gradient area. */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
      >
        {/* The animations for the text remain the same, creating that nice slide-up effect. */}
        <h3 className="transform text-xl font-bold text-white transition-transform duration-300 ease-in-out translate-y-4 group-hover:translate-y-0">
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