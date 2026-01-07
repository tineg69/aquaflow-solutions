import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-sm tracking-widest uppercase text-accent mb-6">Our Mission</p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-foreground mb-8">
                Making water infrastructure self-healing
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're building autonomous systems that detect and repair pipeline leaks 
                from the inside — eliminating the need for excavation, reducing water loss, 
                and protecting communities worldwide.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <RevealOnScroll>
                <div>
                  <p className="text-sm tracking-widest uppercase text-accent mb-6">The Problem</p>
                  <h2 className="font-display text-foreground mb-6">
                    A crisis hiding underground
                  </h2>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={100}>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Beneath every city lies an aging network of water pipes — many over 50 years old, 
                    quietly deteriorating. The result: <span className="text-foreground">126 billion cubic meters</span> of 
                    treated water lost every year.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    That's enough water to supply <span className="text-foreground">2 billion people</span>. 
                    Instead, it seeps into the ground while communities face shortages, utilities lose revenue, 
                    and infrastructure continues to decay.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    In the United States alone, a water main breaks <span className="text-foreground">every two minutes</span>. 
                    Globally, the economic toll exceeds <span className="text-foreground">$39 billion annually</span>.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <p className="text-sm tracking-widest uppercase text-accent mb-6">Why It Matters</p>
                <h2 className="font-display text-foreground max-w-2xl mx-auto">
                  The stakes are rising
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { 
                  title: "Water Scarcity", 
                  desc: "By 2030, half the world's population will face water stress. Every drop lost accelerates the crisis." 
                },
                { 
                  title: "Aging Infrastructure", 
                  desc: "Most pipe networks were built 50-100 years ago. Replacement would cost trillions and take decades." 
                },
                { 
                  title: "Climate Pressure", 
                  desc: "Extreme weather increases pipe stress and failure rates. Traditional repair methods can't keep pace." 
                },
              ].map((item, i) => (
                <RevealOnScroll key={item.title} delay={i * 100}>
                  <div className="border-l border-border pl-6">
                    <h3 className="font-display text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-sm tracking-widest uppercase text-accent mb-6">Our Goal</p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h2 className="font-display text-foreground mb-8">
                Repair pipes without breaking ground
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                We're developing O-Seal: an autonomous capsule that travels through live water systems, 
                detects leaks using onboard sensors, and seals them in real-time — without excavation, 
                without service interruption, and at a fraction of traditional repair costs.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <Button asChild className="bg-accent text-background hover:bg-accent/90">
                <Link to="/technology">
                  Explore the Technology
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <p className="text-sm tracking-widest uppercase text-accent mb-6">The Impact</p>
                <h2 className="font-display text-foreground">
                  What success looks like
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { title: "Reduced Water Loss", desc: "Sealing leaks at scale could recover billions of cubic meters of water annually." },
                { title: "Lower Costs", desc: "In-pipe repair eliminates excavation expenses, reducing repair costs by up to 80%." },
                { title: "Zero Disruption", desc: "No street closures, no service shutoffs, no weeks of construction." },
                { title: "Scalable Solution", desc: "Swarm deployment enables rapid coverage of complex pipe networks." },
              ].map((item, i) => (
                <RevealOnScroll key={item.title} delay={i * 75}>
                  <div className="border-l border-border pl-6">
                    <h3 className="font-display text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;