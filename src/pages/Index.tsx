import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { Droplets, DollarSign, AlertTriangle, Clock, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-water.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Water infrastructure"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        {/* Subtle gradient orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-aqua/5 rounded-full blur-[120px] animate-pulse-subtle" />
        
        <div className="container relative z-10 px-6 pt-32 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <RevealOnScroll delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aqua/5 border border-aqua/10 mb-8">
                <Zap className="w-4 h-4 text-aqua" />
                <span className="text-sm font-medium text-muted-foreground">Autonomous Infrastructure Repair</span>
              </div>
            </RevealOnScroll>
            
            {/* Main Headline */}
            <RevealOnScroll delay={100}>
              <h1 className="font-display font-bold text-foreground mb-6">
                <span className="text-accent-glow">O-Seal</span>
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                A lightweight, autonomous capsule that travels inside live pipes and 
                seals leaks in real-time — addressing the global water crisis with 
                elegance and intelligence.
              </p>
            </RevealOnScroll>
            
            {/* CTA Buttons */}
            <RevealOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/model">
                    Explore the Model
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/branding">
                    Learn More
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <RevealOnScroll delay={500} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-5 h-9 rounded-full border border-border flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-float-gentle" />
          </div>
        </RevealOnScroll>
      </section>

      {/* Crisis Stats Section */}
      <Section variant="muted">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <RevealOnScroll>
            <h2 className="font-display font-bold text-foreground mb-4">
              A Global <span className="text-aqua">Crisis</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-muted-foreground">
              Aging water infrastructure is failing at an alarming rate. The consequences 
              are staggering — both for communities and economies worldwide.
            </p>
          </RevealOnScroll>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Droplets, value: "126B m³", label: "Water Lost", desc: "Pipelines waste ~126 billion cubic meters of water annually worldwide." },
            { icon: DollarSign, value: "$39B+", label: "Economic Loss", desc: "Infrastructure failures account for over $39 billion in lost value per year." },
            { icon: AlertTriangle, value: "30%+", label: "Water Waste", desc: "In many regions, over 30% of treated water is lost before reaching consumers." },
            { icon: Clock, value: "Every 2min", label: "Main Breaks", desc: "In the U.S., water mains break every 2 minutes on average." },
          ].map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 100}>
              <div className="card-clean p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-aqua/10 text-aqua">
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-aqua mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Why Old Fixes Fail Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <RevealOnScroll>
            <div>
              <h2 className="font-display font-bold text-foreground mb-6">
                Why Traditional <span className="text-aqua">Solutions Fail</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Traditional repairs require digging and relining — expensive, disruptive, 
                  and slow. Even modern trenchless lining cannot dynamically seal new leaks in real time.
                </p>
                <p>
                  Acoustic correlators and robotic pigs can find leaks but only by shutting off 
                  service or excavating streets. "Smart" sensor grids cost ~$50,000 per km and 
                  demand full network upgrades.
                </p>
                <p className="font-medium text-foreground">
                  Existing methods fail in crisis zones or carry prohibitive cost and complexity.
                </p>
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={150} direction="right">
            <div className="card-clean p-8 lg:p-10">
              <h3 className="font-display font-semibold text-lg text-foreground mb-6">
                The O-Seal Difference
              </h3>
              <ul className="space-y-4">
                {[
                  "Operates inside live pipes — no excavation needed",
                  "Autonomous detection and sealing in real-time",
                  "Lightweight, inexpensive capsule design",
                  "Multi-unit swarming for complex networks",
                  "Zero service interruption during repairs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-aqua/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-aqua" />
                    </div>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Vision Statement */}
      <Section variant="muted" className="relative overflow-hidden">
        {/* Gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-aqua/5 rounded-full blur-[100px]" />
        
        <div className="relative max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-aqua/10 border border-aqua/20 mb-8">
              <Droplets className="w-8 h-8 text-aqua" />
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <h2 className="font-display font-bold text-foreground mb-6">
              Infrastructure That <span className="text-accent-glow">Heals Itself</span>
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <p className="text-lg text-muted-foreground mb-10">
              O-Seal represents a paradigm shift in water infrastructure maintenance. 
              Our autonomous capsules don't just find leaks — they seal them, in real-time, 
              without disrupting water service.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={300}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/model">
                Discover the Technology
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </RevealOnScroll>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
