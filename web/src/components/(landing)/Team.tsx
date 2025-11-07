// src/components/(landing)/Team.tsx

import { teamMembers } from "@/data/team";
import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  return (
    <section className="py-16 bg-background md:py-24">
      {/* CHANGE 1: Added `max-w-5xl` to make the container narrower */}
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Meet The Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The brilliant minds behind OCTAKNIGHT LABS.
          </p>
        </div>

        {/* CHANGE 2: Reduced the gap to `gap-6` for a tighter layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;