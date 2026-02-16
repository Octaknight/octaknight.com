import { teamMembers } from "@/data/team";
import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  return (
    <section className="py-24 bg-background md:py-24">
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Meet the <span className="text-[var(--color-primary-400)]">Team</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-satoshi">
            The minds engineering the next generation of intelligent systems.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`w-full sm:w-[calc(50%-12px)] ${
                index < 3
                  ? "lg:w-[calc(33.33%-16px)]"
                  : "lg:w-[calc(25%-18px)]"
              }`}
            >
              <TeamMemberCard
                member={member}
                className={index >= 3 ? "lg:h-64" : ""}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;