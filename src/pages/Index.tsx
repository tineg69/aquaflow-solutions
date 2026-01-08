import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NeuralNetwork } from "@/components/NeuralNetwork";
import { NeuralWaveBackground } from "@/components/NeuralWaveBackground";
import oSealLogo from "@/assets/o-seal-logo-full.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-y-auto snap-y snap-mandatory h-screen">
      <Navigation />
      
      {/* Hero - CurrentEvents Presents */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden section-dark snap-start">
        <NeuralNetwork />
        
        <div className="relative z-10 text-center">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">
              CurrentEvents Presents
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={150}>
            <h1 className="font-hero text-[8rem] md:text-[12rem] lg:text-[16rem] text-accent uppercase tracking-tighter leading-none font-extralight heading-hover">
              O-Seal
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={300}>
            <p className="text-muted-foreground text-lg mt-8 max-w-md mx-auto">
              Autonomous pipeline repair technology
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="min-h-screen flex items-center relative overflow-hidden section-light snap-start">
        <NeuralWaveBackground />
        <div className="container px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Problem & Solution */}
            <div className="max-w-xl">
              <RevealOnScroll>
                <p className="text-xs tracking-[0.3em] uppercase text-accent/70 mb-8">
                  The Problem
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={100}>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 tracking-tight font-light">
                  Water infrastructure is failing worldwide
                </h2>
              </RevealOnScroll>
              
              <RevealOnScroll delay={200}>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Every year, aging pipelines lose <span className="text-foreground font-medium">126 billion cubic meters</span> of 
                  treated water — causing <span className="text-foreground font-medium">$39 billion</span> in economic damage globally.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={300}>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Traditional repairs require excavation, weeks of disruption, and millions in costs.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={400}>
                <div className="flex flex-wrap items-center gap-4">
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
            
            {/* Right - O-Seal Device Visualization */}
            <RevealOnScroll direction="left" delay={200}>
              <div className="relative flex items-center justify-center">
                <div className="aspect-square w-full max-w-lg relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl" />
                  
                  {/* O-Seal Logo as primary visual */}
                  <img
                    src={oSealLogo}
                    alt="O-Seal Device"
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Solution - Clean Typography Focus */}
      <section className="min-h-screen flex items-center relative section-dark snap-start">
        <NeuralWaveBackground />
        <div className="container px-6 relative">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-8">The Solution</p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={100}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight font-light leading-tight mb-16">
                Autonomous leak detection and repair —{" "}
                <span className="text-accent">from inside the pipe</span>
              </h2>
            </RevealOnScroll>
            
            {/* Feature list - minimal, no boxes */}
            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              {[
                { 
                  num: "01",
                  title: "No Excavation", 
                  desc: "O-Seal operates entirely inside live water systems. No digging, no disruption."
                },
                { 
                  num: "02",
                  title: "Real-Time Repair", 
                  desc: "Autonomous detection and sealing happens in minutes, not weeks."
                },
                { 
                  num: "03",
                  title: "Scalable Deploy", 
                  desc: "Lightweight capsules can be deployed in swarms across complex networks."
                },
              ].map((item, i) => (
                <RevealOnScroll key={item.title} delay={200 + i * 100}>
                  <div className="group">
                    <span className="text-accent/40 font-display text-sm mb-4 block">{item.num}</span>
                    <h3 className="font-display text-xl text-foreground mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Refined layout */}
      <section className="min-h-screen flex items-center relative section-lighter snap-start">
        <NeuralWaveBackground />
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">The Scale</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight font-light mb-20">
                A global crisis hiding in plain sight
              </h2>
            </RevealOnScroll>
            
            {/* Stats in clean horizontal layout */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                { value: "126B", unit: "m³", label: "Water lost annually" },
                { value: "$39B", unit: "", label: "Economic damage" },
                { value: "30", unit: "%", label: "Lost in aging systems" },
                { value: "2", unit: "min", label: "US main break frequency" },
              ].map((stat, i) => (
                <RevealOnScroll key={stat.label} delay={i * 75}>
                  <div className="text-center lg:text-left">
                    <p className="font-display text-4xl md:text-5xl text-accent mb-2 tracking-tight">
                      {stat.value}<span className="text-accent/60">{stat.unit}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O-Seal Visualization Section */}
      <section className="min-h-screen flex items-center relative section-dark snap-start">
        <NeuralWaveBackground />
        <div className="container px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Visualization placeholder */}
              <RevealOnScroll>
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary/60 to-secondary/20 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/5" />
                  <div className="text-center relative z-10">
                    <span className="block font-display text-2xl text-muted-foreground/40 mb-2">3D Model</span>
                    <span className="text-sm text-muted-foreground/30">Interactive Visualization</span>
                  </div>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={150}>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">The Device</p>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight font-light mb-6">
                    Engineered for precision
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    O-Seal navigates through active pipelines, detecting micro-fractures and 
                    deploying targeted sealant compounds — all without interrupting water flow.
                  </p>
                  <Button asChild variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                    <Link to="/technology">
                      Explore Technology
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Simple */}
      <section className="py-40 md:py-52 relative overflow-hidden section-light min-h-screen flex items-center">
        <NeuralWaveBackground />
        <div className="container px-6 relative">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 tracking-tight font-light">
                Learn more about O-Seal
              </h2>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                Explore the technology, understand the mechanism, and meet the team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-accent text-background hover:bg-accent/90 px-8">
                  <Link to="/how-it-works">
                    How It Works
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="border-border text-foreground hover:bg-muted px-8">
                  <Link to="/team">
                    Meet the Team
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
