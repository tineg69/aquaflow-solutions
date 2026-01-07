import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const teamMembers = [{
  name: "Tanish Gottimukkula",
  role: "CEO & Co-Founder",
  bio: "Former MIT water systems researcher with 15+ years in infrastructure innovation. Led development of autonomous monitoring systems for municipal utilities.",
  initials: "TG"
}, {
  name: "Marcus Rodriguez",
  role: "CTO & Co-Founder",
  bio: "Robotics engineer specializing in autonomous systems and embedded sensor technology. Previously developed underwater inspection drones for offshore infrastructure.",
  initials: "MR"
}, {
  name: "Dr. Aisha Patel",
  role: "Head of R&D",
  bio: "Materials scientist focused on self-healing polymers and smart materials. Holds 12 patents in adaptive membrane technology.",
  initials: "AP"
}, {
  name: "James Okonkwo",
  role: "VP of Engineering",
  bio: "20 years experience in municipal water infrastructure and pipeline system design. Former lead engineer at American Water Works.",
  initials: "JO"
}, {
  name: "Dr. Emily Zhang",
  role: "Lead Systems Engineer",
  bio: "Expert in distributed systems and swarm robotics. PhD from Stanford in autonomous multi-agent coordination.",
  initials: "EZ"
}];
const Team = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-sm tracking-widest uppercase text-accent mb-6">Our Team</p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-foreground mb-6">
                The People Behind O-Seal
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A group of teenagers taking on a problem most people choose to ignore.          
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {teamMembers.map((member, index) => <RevealOnScroll key={member.name} delay={index * 75}>
                  <div>
                    {/* Photo placeholder */}
                    <div className="aspect-[4/5] bg-muted rounded-lg mb-6 overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-4xl text-muted-foreground/50">
                          {member.initials}
                        </span>
                      </div>
                      {/* Replace with actual photo: */}
                      {/* <img src={member.photo} alt={member.name} className="w-full h-full object-cover" /> */}
                    </div>
                    
                    <h3 className="font-display text-xl text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </RevealOnScroll>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-foreground mb-6">
                Interested in our work?
              </h2>
              <p className="text-muted-foreground mb-10">
                We're always looking for talented people who want to make a real impact 
                on global water infrastructure.
              </p>
              <Button asChild className="bg-accent text-background hover:bg-accent/90">
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
    </div>;
};
export default Team;