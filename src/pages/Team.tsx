import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const teamMembers = [{
  name: "Tanish Gottimukkula",
  role: "Head of Marketing",
  bio: "Former MIT water systems researcher with 15+ years in infrastructure innovation. Led development of autonomous monitoring systems for municipal utilities.",
  initials: "TG"
}, {
  name: "Maneesh Vaddi",
  role: "CTO & Co-Founder",
  bio: "Robotics engineer specializing in autonomous systems and embedded sensor technology. Previously developed underwater inspection drones for offshore infrastructure.",
  initials: "MV"
}, {
  name: "Dhruv Miriyala",
  role: "Head of R&D",
  bio: "Materials scientist focused on self-healing polymers and smart materials. Holds 12 patents in adaptive membrane technology.",
  initials: "DM"
}, {
  name: "Hatim Ghadiali",
  role: "VP of Engineering",
  bio: "20 years experience in municipal water infrastructure and pipeline system design. Former lead engineer at American Water Works.",
  initials: "HG"
}, {
  name: "Dr. Emily Zhang",
  role: "Lead Systems Engineer",
  bio: "Expert in distributed systems and swarm robotics. PhD from Stanford in autonomous multi-agent coordination.",
  initials: "EZ"
}];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden section-dark">
        <div className="container px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-xs tracking-[0.3em] uppercase text-accent/70 mb-8">Our Team</p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-foreground mb-8 tracking-tight">
                The People Behind O-Seal
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                A group of teenagers taking on a problem most people choose to ignore.          
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 md:py-40 section-light">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
              {teamMembers.map((member, index) => (
                <RevealOnScroll key={member.name} delay={index * 75}>
                  <div className="group">
                    {/* Photo placeholder */}
                    <div className="aspect-[4/5] bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl mb-8 overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-5xl text-muted-foreground/30 group-hover:text-accent/30 transition-colors duration-500">
                          {member.initials}
                        </span>
                      </div>
                      {/* Subtle glow on hover */}
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <h3 className="font-display text-xl text-foreground mb-2 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 md:py-52 relative overflow-hidden section-lighter">
        <div className="container px-6 relative">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 tracking-tight">
                Interested in our work?
              </h2>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                We're always looking for talented people who want to make a real impact 
                on global water infrastructure.
              </p>
              <Button asChild size="lg" className="bg-accent text-background hover:bg-accent/90 px-8">
                <a href="mailto:careers@o-seal.com">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-3" />
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