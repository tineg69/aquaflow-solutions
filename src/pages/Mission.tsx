import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { VortexBackground } from "@/components/VortexBackground";
import { NeuralWaveBackground } from "@/components/NeuralWaveBackground";

const Mission = () => {
  return (
    <div className="min-h-screen bg-background overflow-y-auto snap-y snap-mandatory h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden section-dark snap-start min-h-screen flex items-center">
        <VortexBackground />
        <div className="container px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-xs tracking-[0.3em] uppercase text-accent/70 mb-8">Our Mission</p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-foreground mb-10 tracking-tight">
                Making water infrastructure self-healing
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We're building autonomous systems that detect and repair pipeline leaks 
                from the inside — eliminating the need for excavation, reducing water loss, 
                and protecting communities worldwide.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 md:py-44 relative section-light snap-start min-h-screen flex items-center">
        <NeuralWaveBackground />
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
              <RevealOnScroll>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">The Problem</p>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
                    A crisis hiding underground
                  </h2>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={100}>
                <div className="space-y-8">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Beneath every city lies an aging network of water pipes — many over 50 years old, 
                    quietly deteriorating. The result: <span className="text-teal-400 font-medium">126 billion cubic meters</span> of 
                    treated water lost every year.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    That's enough water to supply <span className="text-teal-400 font-medium">2 billion people</span>. 
                    Instead, it seeps into the ground while communities face shortages, utilities lose revenue, 
                    and infrastructure continues to decay.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    In the United States alone, a water main breaks <span className="text-teal-400 font-medium">every two minutes</span>. 
                    Globally, the economic toll exceeds <span className="text-teal-400 font-medium">$39 billion annually</span>.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-32 md:py-40 relative section-lighter snap-start min-h-screen flex items-center">
        <NeuralWaveBackground />
        <div className="container px-6 relative">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-20 md:mb-28">
                <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">Why It Matters</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground max-w-2xl mx-auto tracking-tight">
                  The stakes are rising
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { 
                  title: "Water Scarcity", 
                  desc: "By 2030, half the world's population will face water stress. Every drop lost accelerates the crisis.",
                  bg: "box-teal"
                },
                { 
                  title: "Aging Infrastructure", 
                  desc: "Most pipe networks were built 50-100 years ago. Replacement would cost trillions and take decades.",
                  bg: "box-blue"
                },
                { 
                  title: "Climate Pressure", 
                  desc: "Extreme weather increases pipe stress and failure rates. Traditional repair methods can't keep pace.",
                  bg: "box-teal"
                },
              ].map((item, i) => (
                <RevealOnScroll key={item.title} delay={i * 100} className="h-full">
                  <div className={`${item.bg} p-8 rounded-lg h-full flex flex-col`}>
                    <h3 className="font-display text-xl text-white mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="py-40 md:py-52 relative overflow-hidden section-light snap-start min-h-screen flex items-center">
        <NeuralWaveBackground />
        <div className="container px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-8">Our Goal</p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-10 tracking-tight">
                Repair pipes without breaking ground
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-14">
                We're developing O-Seal: an autonomous capsule that travels through live water systems, 
                detects leaks using onboard sensors, and seals them in real-time — without excavation, 
                without service interruption, and at a fraction of traditional repair costs.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <Button asChild size="lg" className="bg-accent text-background hover:bg-accent/90 px-8">
                <Link to="/technology">
                  Explore the Technology
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </Button>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-32 md:py-40 relative section-dark snap-start min-h-screen flex items-center">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-20 md:mb-28">
                <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">The Impact</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
                  What <span className="text-accent">success</span> looks like
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Reduced Water Loss", desc: "Sealing leaks at scale could recover billions of cubic meters of water annually.", bg: "box-teal" },
                { title: "Lower Costs", desc: "In-pipe repair eliminates excavation expenses, reducing repair costs by up to 80%.", bg: "box-blue" },
                { title: "Zero Disruption", desc: "No street closures, no service shutoffs, no weeks of construction.", bg: "box-blue" },
                { title: "Scalable Solution", desc: "Swarm deployment enables rapid coverage of complex pipe networks.", bg: "box-teal" },
              ].map((item, i) => (
                <RevealOnScroll key={item.title} delay={i * 75} className="h-full">
                  <div className={`${item.bg} p-8 rounded-lg h-full flex flex-col`}>
                    <h3 className="font-display text-xl text-white mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
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