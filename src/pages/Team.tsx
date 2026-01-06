import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Team = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-up"
                style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                Meet the <span className="text-glow text-aqua">Team</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up"
                style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                A diverse group of engineers, scientists, and innovators united by a mission 
                to solve the global water crisis through intelligent infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 md:py-24 bg-navy-deep/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center opacity-0 animate-fade-up hover:border-aqua/50 transition-colors"
                  style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-aqua/20 to-primary/20 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-aqua">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-aqua text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Join Our Mission
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're always looking for passionate individuals who want to make a real impact 
                on global water infrastructure.
              </p>
              <a 
                href="mailto:careers@o-seal.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-aqua text-navy-deep font-semibold rounded-full hover:bg-aqua/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
