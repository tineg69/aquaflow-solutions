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
      
      {/* Hero Brand Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-dark">
        <h1 className="font-hero text-[12rem] md:text-[18rem] lg:text-[24rem] text-accent uppercase tracking-tight leading-none">
          O-Seal
        </h1>
      </section>

      {/* Hero - Problem Statement Above Fold */}
      <section className="min-h-screen flex items-center pt-16 relative overflow-hidden section-light">
        <div className="container px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Problem & Solution */}
            <div className="max-w-xl">
              <RevealOnScroll>
                <p className="text-xs tracking-[0.3em] uppercase text-accent/70 mb-8">
                  The Problem
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={100}>
                <h1 className="font-display text-foreground mb-8 tracking-tight">
                  Water infrastructure is failing worldwide
                </h1>
              </RevealOnScroll>
              
              <RevealOnScroll delay={200}>
                <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                  Every year, aging pipelines lose <span className="text-foreground font-medium">126 billion cubic meters</span> of 
                  treated water — causing <span className="text-foreground font-medium">$39 billion</span> in economic damage globally.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={300}>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  Traditional repairs require excavation, weeks of disruption, and millions in costs. 
                  <span className="text-accent font-medium"> O-Seal changes that.</span>
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
            
            {/* Right - Hero Visual */}
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
      </section>

      {/* Value Proposition */}
      <section className="py-32 md:py-44 relative section-dark">
        <div className="container px-6 relative">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-20 md:mb-28">
                <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">The Solution</p>
                <h2 className="font-display text-foreground max-w-4xl mx-auto tracking-tight">
                  Autonomous leak detection and repair — from inside the pipe
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-3 gap-16 md:gap-12">
              {[
                { 
                  title: "No Excavation", 
                  desc: "O-Seal operates entirely inside live water systems. No digging, no street closures, no disruption." 
                },
                { 
                  title: "Real-Time Repair", 
                  desc: "Autonomous detection and sealing happens in minutes, not weeks. Leaks are fixed as they're found." 
                },
                { 
                  title: "Scalable Deploy", 
                  desc: "Lightweight capsules can be deployed in swarms, covering complex pipe networks efficiently." 
                },
              ].map((item, i) => (
                <RevealOnScroll key={item.title} delay={i * 100}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <span className="font-display text-lg text-accent">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 md:py-40 relative section-lighter">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-16 text-center">The Scale</p>
            </RevealOnScroll>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
              {[
                { value: "126B", unit: "m³", label: "Water lost annually" },
                { value: "$39B", unit: "", label: "Economic damage" },
                { value: "30", unit: "%", label: "Water lost in aging systems" },
                { value: "2", unit: "min", label: "US main break frequency" },
              ].map((stat, i) => (
                <RevealOnScroll key={stat.label} delay={i * 75}>
                  <div className="text-center">
                    <p className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 tracking-tight">
                      {stat.value}<span className="text-accent">{stat.unit}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 md:py-52 relative overflow-hidden section-light">
        <div className="container px-6 relative">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 tracking-tight">
                See how O-Seal works
              </h2>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                Explore the technology, understand the mechanism, and meet the team behind it.
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