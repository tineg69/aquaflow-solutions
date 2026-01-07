import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import deviceModel from "@/assets/device-model.png";
import { NeuralNetwork } from "@/components/NeuralNetwork";
import { NeuralWaveBackground } from "@/components/NeuralWaveBackground";
import currentEventsLogo from "@/assets/currentevents-final.png";
import oSealLogo from "@/assets/o-seal-final.png";

const teamMembers = [
  { name: "Tanish Gottimukkula", role: "Director of Operations", initials: "TG" },
  { name: "Maneesh Vaddi", role: "CTO & Co-Founder", initials: "MV" },
  { name: "Dhruv Miriyala", role: "Head of R&D", initials: "DM" },
  { name: "Hatim Ghadiali", role: "Chief Financial Officer", initials: "HG" },
  { name: "Zoeb Izzi", role: "Lead Systems Engineer", initials: "ZI" },
];

const specs = [
  { label: "Diameter Range", value: "40–200mm", bg: "box-teal" },
  { label: "Pressure Rating", value: "16 bar", bg: "box-blue" },
  { label: "Seal Lifespan", value: "5+ years", bg: "box-teal" },
  { label: "Detection Precision", value: "±2mm", bg: "box-blue" },
  { label: "Communication", value: "Acoustic", bg: "box-teal" },
  { label: "Power Source", value: "Flow harvesting", bg: "box-blue" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-y-auto snap-y snap-mandatory h-screen">
      <Navigation />
      
      {/* Hero - Meet CurrentEvents */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden section-dark snap-start">
        <NeuralNetwork />
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-xs tracking-[0.4em] uppercase text-accent/70 mb-8">
                Meet The Team
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={100}>
              <img 
                src={currentEventsLogo} 
                alt="CurrentEvents" 
                className="h-32 md:h-40 lg:h-48 w-auto mx-auto mb-8 object-contain"
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
                A group of teenagers tackling infrastructure problems most people choose to ignore.
              </p>
            </RevealOnScroll>
            
            {/* Team Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
              {teamMembers.map((member, index) => (
                <RevealOnScroll key={member.name} delay={300 + index * 75}>
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center mx-auto mb-4 border border-accent/20">
                      <span className="font-display text-xl md:text-2xl text-accent/60">
                        {member.initials}
                      </span>
                    </div>
                    <h3 className="font-display text-sm md:text-base text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
            
            {/* Group Photo Placeholder */}
            <RevealOnScroll delay={600}>
              <div className="max-w-4xl mx-auto aspect-[21/9] bg-gradient-to-br from-muted/40 to-muted/20 rounded-2xl border border-border/30 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <p className="text-muted-foreground/50 text-sm uppercase tracking-widest">Team Photo</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* O-Seal Product Reveal */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-light snap-start">
        <NeuralWaveBackground />
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left - O-Seal Branding */}
              <div className="text-center lg:text-left">
                <RevealOnScroll>
                  <p className="text-xs tracking-[0.4em] uppercase text-accent/70 mb-8">
                    Introducing
                  </p>
                </RevealOnScroll>
                
                <RevealOnScroll delay={100}>
                  <img 
                    src={oSealLogo} 
                    alt="O-Seal" 
                    className="h-28 md:h-36 lg:h-44 w-auto mx-auto lg:mx-0 mb-8 object-contain"
                  />
                </RevealOnScroll>
                
                <RevealOnScroll delay={200}>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 tracking-tight font-light">
                    Autonomous leak-sealing technology for resilient water infrastructure
                  </h2>
                </RevealOnScroll>
                
                <RevealOnScroll delay={300}>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Every year, aging pipelines lose <span className="text-foreground font-medium">126 billion cubic meters</span> of 
                    treated water. O-Seal changes that.
                  </p>
                </RevealOnScroll>
                
                <RevealOnScroll delay={400}>
                  <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                    <Button asChild size="lg" className="bg-accent text-background hover:bg-accent/90 px-8">
                      <Link to="/technology">
                        View Technology
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
                      <Link to="/how-it-works">
                        How It Works
                      </Link>
                    </Button>
                  </div>
                </RevealOnScroll>
              </div>
              
              {/* Right - Device Visual */}
              <RevealOnScroll direction="left" delay={200}>
                <div className="relative aspect-square flex items-center justify-center">
                  <img
                    src={deviceModel}
                    alt="O-Seal autonomous pipe repair device"
                    className="max-w-full max-h-full object-contain animate-float-gentle"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 md:py-44 relative section-dark snap-start min-h-screen flex items-center">
        <NeuralWaveBackground />
        <div className="container px-6 relative">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-20 md:mb-28">
                <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">The Solution</p>
                <h2 className="font-display text-foreground max-w-4xl mx-auto tracking-tight font-light heading-hover">
                  Autonomous leak detection and repair — from inside the pipe
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { 
                  title: "No Excavation", 
                  desc: "O-Seal operates entirely inside live water systems. No digging, no street closures, no disruption.",
                  bg: "box-teal"
                },
                { 
                  title: "Real-Time Repair", 
                  desc: "Autonomous detection and sealing happens in minutes, not weeks. Leaks are fixed as they're found.",
                  bg: "box-blue"
                },
                { 
                  title: "Scalable Deploy", 
                  desc: "Lightweight capsules can be deployed in swarms, covering complex pipe networks efficiently.",
                  bg: "box-teal"
                },
              ].map((item, i) => (
                <RevealOnScroll key={item.title} delay={i * 100} className="h-full">
                  <div className={`${item.bg} p-8 rounded-lg text-center h-full flex flex-col justify-start`}>
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                      <span className="font-display text-lg text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-display text-xl text-white mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Preview */}
      <section className="py-32 md:py-40 relative section-lighter snap-start min-h-screen flex items-center">
        <NeuralWaveBackground />
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">Technical Specifications</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight font-light mb-4">
                  Engineered for precision
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {specs.map((spec, i) => (
                <RevealOnScroll key={spec.label} delay={i * 75} className="h-full">
                  <div className={`${spec.bg} p-8 rounded-lg text-center h-full flex flex-col justify-center`}>
                    <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white mb-3 tracking-tight">
                      {spec.value}
                    </p>
                    <p className="text-sm text-white/80">{spec.label}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
            
            <RevealOnScroll delay={500}>
              <div className="text-center">
                <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-muted px-8">
                  <Link to="/technology">
                    View Full Technical Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 md:py-52 relative overflow-hidden section-light snap-start min-h-screen flex items-center">
        <NeuralWaveBackground />
        <div className="container px-6 relative">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 tracking-tight font-light heading-hover">
                See how O-Seal works
              </h2>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                Explore the technology, understand the mechanism, and learn more about our mission.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-accent text-background hover:bg-accent/90 px-8">
                  <Link to="/how-it-works">
                    How It Works
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="border-border text-foreground hover:bg-muted px-8">
                  <Link to="/mission">
                    Our Mission
                  </Link>
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
