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
      
      {/* Hero - Problem Statement Above Fold */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left - Problem & Solution */}
            <div className="max-w-xl">
              <RevealOnScroll>
                <p className="text-sm tracking-widest uppercase text-accent mb-6">
                  The Problem
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={100}>
                <h1 className="font-display text-foreground mb-6">
                  Water infrastructure is failing worldwide
                </h1>
              </RevealOnScroll>
              
              <RevealOnScroll delay={200}>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Every year, aging pipelines lose <span className="text-foreground">126 billion cubic meters</span> of 
                  treated water — causing <span className="text-foreground">$39 billion</span> in economic damage globally.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={300}>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Traditional repairs require excavation, weeks of disruption, and millions in costs. 
                  <span className="text-accent"> O-Seal changes that.</span>
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={400}>
                <div className="flex flex-wrap items-center gap-4">
                  <Button asChild className="bg-accent text-background hover:bg-accent/90">
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
              <div className="relative">
                <div className="absolute inset-0 bg-accent/8 rounded-3xl blur-3xl" />
                <div className="relative aspect-square flex items-center justify-center">
                  <img
                    src={deviceModel}
                    alt="O-Seal autonomous pipe repair device"
                    className="max-w-full max-h-full object-contain animate-float-gentle drop-shadow-2xl"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <p className="text-sm tracking-widest uppercase text-accent mb-6">The Solution</p>
                <h2 className="font-display text-foreground max-w-3xl mx-auto">
                  Autonomous leak detection and repair — from inside the pipe
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
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
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                      <span className="font-display font-medium text-accent">{i + 1}</span>
                    </div>
                    <h3 className="font-display text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <p className="text-sm tracking-widest uppercase text-accent mb-12 text-center">The Scale</p>
            </RevealOnScroll>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
              {[
                { value: "126B", unit: "m³", label: "Water lost annually" },
                { value: "$39B", unit: "", label: "Economic damage" },
                { value: "30", unit: "%", label: "Water lost in aging systems" },
                { value: "2", unit: "min", label: "US main break frequency" },
              ].map((stat, i) => (
                <RevealOnScroll key={stat.label} delay={i * 75}>
                  <div className="text-center">
                    <p className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
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
      <section className="py-32 md:py-40">
        <div className="container px-6">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-foreground mb-6">
                See how O-Seal works
              </h2>
              <p className="text-muted-foreground mb-10">
                Explore the technology, understand the mechanism, and meet the team behind it.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-accent text-background hover:bg-accent/90">
                  <Link to="/how-it-works">
                    How It Works
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-border text-foreground hover:bg-muted">
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