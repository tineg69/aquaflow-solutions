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

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-sm tracking-widest uppercase text-accent mb-6">Process</p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-foreground mb-6">
                How It Works
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From deployment to repair, O-Seal operates autonomously inside live water systems. 
                Here's the step-by-step process.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video bg-muted rounded-xl overflow-hidden border border-border/30">
                {/* Video placeholder - replace with actual video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-accent/30 transition-colors">
                      <Play className="w-8 h-8 text-accent ml-1" />
                    </div>
                    <p className="text-sm text-muted-foreground">Demo video coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="mb-16">
                <p className="text-sm tracking-widest uppercase text-accent mb-6">The Process</p>
                <h2 className="font-display text-foreground">
                  Five steps to autonomous repair
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="space-y-12">
              {steps.map((step, i) => (
                <RevealOnScroll key={step.number} delay={i * 100}>
                  <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                    <div className="md:col-span-2">
                      <span className="font-display text-4xl md:text-5xl text-accent/30">{step.number}</span>
                    </div>
                    <div className="md:col-span-10 border-l border-border pl-6 md:pl-8">
                      <h3 className="font-display text-xl text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Diagram */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm tracking-widest uppercase text-accent mb-6">Visualization</p>
              <h2 className="font-display text-foreground">
                Inside the pipe
              </h2>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll direction="scale" delay={150}>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[16/9] flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl" />
                <img
                  src={deviceModel}
                  alt="O-Seal operation visualization"
                  className="relative max-w-full max-h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <p className="text-sm tracking-widest uppercase text-accent mb-6">Advantages</p>
                <h2 className="font-display text-foreground">
                  Why this approach works
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "No Excavation", desc: "Works entirely inside existing pipes" },
                { title: "No Shutdown", desc: "Operates in live water systems" },
                { title: "Real-Time", desc: "Detects and seals in minutes" },
                { title: "Scalable", desc: "Swarm deployment for networks" },
              ].map((item, i) => (
                <RevealOnScroll key={item.title} delay={i * 75}>
                  <div className="text-center">
                    <h3 className="font-display text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
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
                See the technology in detail
              </h2>
              <p className="text-muted-foreground mb-10">
                Explore the CAD models and technical specifications behind O-Seal.
              </p>
              <Button asChild className="bg-accent text-background hover:bg-accent/90">
                <Link to="/technology">
                  View Technology
                  <ArrowRight className="w-4 h-4 ml-2" />
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