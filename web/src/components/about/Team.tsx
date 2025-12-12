import { teamMembers } from "@/data/team";
import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  return (
    <section className="py-24 bg-background md:py-24">
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The Foundation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-satoshi">
            The minds engineering the next generation of intelligent systems.
          </p>
        </div>
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