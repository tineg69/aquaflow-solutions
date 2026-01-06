import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former MIT water systems researcher with 15+ years in infrastructure innovation.",
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
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="container px-6">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-display font-bold text-foreground mb-4">
                Meet the <span className="text-aqua">Team</span>
              </h1>
              <p className="text-muted-foreground">
                A diverse group of engineers, scientists, and innovators united by a mission 
                to solve the global water crisis through intelligent infrastructure.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Team Grid */}
      <Section variant="muted">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <RevealOnScroll key={member.name} delay={index * 75}>
              <div className="card-clean p-6 text-center h-full">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-aqua/15 to-primary/10 flex items-center justify-center border border-border/50">
                  <span className="font-display text-2xl font-bold text-aqua">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-aqua text-xs font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Join Us CTA */}
      <Section>
        <RevealOnScroll>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display font-bold text-foreground mb-4">
              Join Our Mission
            </h2>
            <p className="text-muted-foreground mb-8">
              We're looking for passionate individuals who want to make a real impact 
              on global water infrastructure.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:careers@o-seal.com">Get in Touch</a>
            </Button>
          </div>
        </RevealOnScroll>
      </Section>

      <Footer />
    </div>
  );
};

export default Team;
