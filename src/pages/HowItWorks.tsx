import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import deviceModel from "@/assets/device-model.png";

const steps = [
  {
    number: "01",
    title: "Deployment",
    description: "O-Seal capsules are introduced into the water system through existing access points — fire hydrants, valve chambers, or service connections. No excavation required.",
  },
  {
    number: "02",
    title: "Navigation",
    description: "Capsules travel passively with water flow, using internal sensors to map their position within the pipe network. Onboard control adjusts buoyancy and orientation.",
  },
  {
    number: "03",
    title: "Detection",
    description: "Miniaturized pressure sensors continuously monitor for anomalies. When a pressure drop indicates a leak, the capsule identifies the exact location with ±2mm precision.",
  },
  {
    number: "04",
    title: "Sealing",
    description: "Upon detection, the inflatable outer torus expands to press against the pipe wall. The ridged membrane conforms to surface irregularities, creating a watertight seal.",
  },
  {
    number: "05",
    title: "Confirmation",
    description: "Post-seal sensors verify the repair was successful. The capsule then deflates and continues downstream, or remains in place for permanent sealing as needed.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero - Cinematic Opening */}
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden section-dark">
        <div className="container px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-xs tracking-[0.3em] uppercase text-accent/70 mb-8">
                The Process
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-foreground mb-8 tracking-tight">
                How It Works
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                From deployment to repair, O-Seal operates autonomously inside live water systems.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Demo Video Section - Refined */}
      <section className="py-20 md:py-28 relative section-light">
        <div className="container px-6">
          <RevealOnScroll direction="scale">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <div className="relative h-full bg-gradient-to-br from-muted/80 to-muted/40 backdrop-blur-sm border border-border/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-accent/20 transition-all duration-500 hover:scale-105 group">
                        <Play className="w-10 h-10 text-accent ml-1 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <p className="text-sm text-muted-foreground/60 tracking-wide">Demo coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Step-by-Step Process - Cinematic Redesign */}
      <section className="py-32 md:py-44 relative overflow-hidden section-lighter">
        <div className="container px-6 relative">
          <div className="max-w-6xl mx-auto">
            {/* Section Title - Commanding */}
            <RevealOnScroll>
              <div className="mb-32 md:mb-40">
                <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">
                  The Process
                </p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.1]">
                  Five steps to<br />
                  <span className="text-accent">autonomous repair</span>
                </h2>
              </div>
            </RevealOnScroll>
            
            {/* Steps - Dynamic Flow */}
            <div className="relative">
              {/* Vertical progress line */}
              <div className="absolute left-[27px] md:left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />
              
              <div className="space-y-20 md:space-y-28">
                {steps.map((step, i) => (
                  <RevealOnScroll 
                    key={step.number} 
                    delay={i * 120}
                    direction={i % 2 === 0 ? "left" : "right"}
                  >
                    <div className={`relative grid md:grid-cols-12 gap-8 md:gap-12 items-start ${
                      i % 2 === 1 ? 'md:pl-8' : ''
                    }`}>
                      {/* Step number with marker */}
                      <div className="md:col-span-2 flex items-start gap-6">
                        <div className="relative">
                          {/* Glowing dot */}
                          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/20">
                            <span className="font-display text-2xl md:text-3xl text-accent/80 tracking-tight">
                              {step.number}
                            </span>
                          </div>
                          {/* Pulse ring */}
                          <div className="absolute inset-0 rounded-full bg-accent/10 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="md:col-span-10 pt-2 md:pt-4">
                        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Diagram - Elevated */}
      <section className="py-32 md:py-44 relative overflow-hidden section-light">
        <div className="container px-6 relative">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">
                Visualization
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
                Inside the pipe
              </h2>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll direction="scale" delay={150}>
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[16/10] flex items-center justify-center">
                <img
                  src={deviceModel}
                  alt="O-Seal operation visualization"
                  className="relative max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Key Advantages - Refined Grid */}
      <section className="py-32 md:py-40 relative section-dark">
        <div className="container px-6 relative">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-20 md:mb-28">
                <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">
                  Advantages
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
                  Why this approach works
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
              {[
                { title: "No Excavation", desc: "Works entirely inside existing pipes" },
                { title: "No Shutdown", desc: "Operates in live water systems" },
                { title: "Real-Time", desc: "Detects and seals in minutes" },
                { title: "Scalable", desc: "Swarm deployment for networks" },
              ].map((item, i) => (
                <RevealOnScroll key={item.title} delay={i * 100}>
                  <div className="text-center group">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/15 transition-colors duration-500">
                      <span className="font-display text-xl text-accent">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Cinematic Close */}
      <section className="py-40 md:py-52 relative overflow-hidden section-light">
        <div className="container px-6 relative">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 tracking-tight">
                See the technology in detail
              </h2>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                Explore the CAD models and technical specifications behind O-Seal.
              </p>
              <Button asChild size="lg" className="bg-accent text-background hover:bg-accent/90 px-8 py-6 text-base">
                <Link to="/technology">
                  View Technology
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;