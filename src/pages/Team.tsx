import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former MIT water systems researcher. 15+ years in infrastructure innovation.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Robotics engineer specializing in autonomous systems and sensor technology.",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Head of R&D",
    bio: "Materials scientist focused on self-healing polymers and smart materials.",
  },
  {
    name: "James Okonkwo",
    role: "VP of Engineering",
    bio: "20 years experience in municipal water infrastructure and system design.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-sm tracking-widest uppercase text-accent mb-6">People</p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-foreground mb-6">
                The Team
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-muted-foreground text-lg">
                Engineers, scientists, and operators united by a mission 
                to solve the global water crisis through intelligent infrastructure.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
              {teamMembers.map((member, index) => (
                <RevealOnScroll key={member.name} delay={index * 75}>
                  <div className="border-l border-border pl-6">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-5">
                      <span className="font-display text-sm text-muted-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-display text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40">
        <div className="container px-6">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-foreground mb-6">
                Join our mission
              </h2>
              <p className="text-muted-foreground mb-10">
                We're looking for people who want to make a real impact 
                on global water infrastructure.
              </p>
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
                <a href="mailto:careers@o-seal.com">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
