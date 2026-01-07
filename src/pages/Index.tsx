import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import deviceModel from "@/assets/device-model.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Minimal & Confident */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll delay={0}>
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-8">
                Autonomous Infrastructure Repair
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-foreground mb-8">
                Self-healing water systems for a resilient future
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
                O-Seal is an autonomous capsule that travels inside live pipes, 
                detecting and sealing leaks in real-time — no excavation, no disruption.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={300}>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
                  <Link to="/model">
                    View the Technology
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
                  <Link to="/branding">
                    Learn More
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Problem Statement - Typography Focused */}
      <section className="py-32 md:py-40">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <RevealOnScroll>
                <div>
                  <p className="text-sm tracking-widest uppercase text-accent mb-6">The Problem</p>
                  <h2 className="font-display text-foreground mb-8">
                    Global water infrastructure is failing
                  </h2>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={100}>
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Every year, aging pipelines waste over 126 billion cubic meters of 
                    treated water — enough to supply 2 billion people. The economic 
                    toll exceeds $39 billion annually.
                  </p>
                  <p className="text-muted-foreground">
                    Traditional repairs require excavation, service shutdowns, and 
                    weeks of disruption. Modern sensor grids cost $50,000 per kilometer 
                    and still can't fix the leaks they find.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Clean Grid */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {[
                { value: "126B", unit: "m³", label: "Water lost annually" },
                { value: "$39B", unit: "+", label: "Economic damage" },
                { value: "30", unit: "%", label: "Water wasted in aging systems" },
                { value: "2", unit: "min", label: "US main break frequency" },
              ].map((stat, i) => (
                <RevealOnScroll key={stat.label} delay={i * 75}>
                  <div>
                    <p className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
                      {stat.value}
                      <span className="text-accent">{stat.unit}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAD Showcase - Gallery Style */}
      <section className="py-32 md:py-48">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16 md:mb-24">
                <p className="text-sm tracking-widest uppercase text-accent mb-6">The Solution</p>
                <h2 className="font-display text-foreground max-w-2xl mx-auto">
                  Precision-engineered autonomous repair
                </h2>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={150}>
              <div className="relative aspect-[16/10] md:aspect-[2/1] flex items-center justify-center">
                <img
                  src={deviceModel}
                  alt="O-Seal Device"
                  className="max-w-full max-h-full object-contain animate-float-gentle"
                />
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={250}>
              <div className="mt-16 md:mt-24 max-w-2xl mx-auto text-center">
                <p className="text-muted-foreground">
                  A lightweight capsule with an inflatable outer torus, internal 
                  pressure sensors, and autonomous control — designed to navigate 
                  live pipes and seal leaks without service interruption.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Capabilities - Simple List */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <RevealOnScroll>
                <div>
                  <p className="text-sm tracking-widest uppercase text-accent mb-6">Capabilities</p>
                  <h2 className="font-display text-foreground">
                    Infrastructure that heals itself
                  </h2>
                </div>
              </RevealOnScroll>
              
              <div className="space-y-8">
                {[
                  { title: "In-pipe operation", desc: "Travels through live water systems without excavation or service interruption." },
                  { title: "Real-time detection", desc: "Miniaturized pressure sensors identify leaks with ±2mm precision." },
                  { title: "Autonomous sealing", desc: "Inflatable torus expands to seal cracks against pipe walls on contact." },
                  { title: "Swarm coordination", desc: "Multiple units communicate acoustically for complex network repairs." },
                ].map((item, i) => (
                  <RevealOnScroll key={item.title} delay={i * 75}>
                    <div className="border-l border-border pl-6">
                      <h3 className="font-display text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="py-32 md:py-40">
        <div className="container px-6">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-foreground mb-6">
                Explore the technology
              </h2>
              <p className="text-muted-foreground mb-10">
                See how O-Seal works, from CAD models to technical specifications.
              </p>
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
                <Link to="/model">
                  View Demo
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

export default Index;
