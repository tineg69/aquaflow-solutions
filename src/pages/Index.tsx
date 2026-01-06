import { Navigation } from "@/components/Navigation";
import { WaveBackground } from "@/components/WaveBackground";
import { StatCard } from "@/components/StatCard";
import { Footer } from "@/components/Footer";
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
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Water infrastructure visualization"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        
        <WaveBackground />
        
        <div className="container relative z-10 px-6 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aqua/10 border border-aqua/20 mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
            >
              <Zap className="w-4 h-4 text-aqua" />
              <span className="text-sm font-medium text-aqua">Autonomous Infrastructure Repair</span>
            </div>
            
            {/* Main Headline */}
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
            >
              <span className="text-glow text-aqua">O-Seal</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
            >
              A lightweight, autonomous capsule that travels inside live pipes and 
              seals leaks in real-time — addressing the global water crisis with 
              elegance and intelligence.
            </p>
            
            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/model">
                  Explore the Model
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/branding">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <div className="w-6 h-10 rounded-full border-2 border-aqua/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-aqua rounded-full animate-float" />
          </div>
        </div>
      </section>

      {/* Crisis Stats Section */}
      <section className="relative py-24 md:py-32">
        <WaveBackground />
        
        <div className="container relative z-10 px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              A Global <span className="text-aqua">Crisis</span> in Numbers
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aging water infrastructure is failing at an alarming rate. The consequences 
              are staggering — both for communities and economies worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={<Droplets className="w-6 h-6" />}
              value="126B m³"
              label="Water Lost"
              description="Pipelines waste ~126 billion cubic meters of water annually worldwide — enough to supply 90 million people."
              delay={100}
            />
            <StatCard
              icon={<DollarSign className="w-6 h-6" />}
              value="$39B+"
              label="Economic Loss"
              description="Infrastructure failures account for over $39 billion in lost water and economic value per year globally."
              delay={200}
            />
            <StatCard
              icon={<AlertTriangle className="w-6 h-6" />}
              value="30%+"
              label="Water Waste"
              description="In many regions, over 30% of treated water is lost before it reaches consumers due to pipe leaks."
              delay={300}
            />
            <StatCard
              icon={<Clock className="w-6 h-6" />}
              value="Every 2min"
              label="Main Breaks"
              description="In the U.S., water mains break every 2 minutes on average, wasting about 6 billion gallons daily."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Why Old Fixes Fail Section */}
      <section className="relative py-24 md:py-32 bg-card/30">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Why Traditional <span className="text-aqua">Solutions Fail</span>
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Traditional repairs require digging and relining — expensive, disruptive, 
                  and slow. Even modern trenchless lining (CIPP) requires significant access 
                  and cannot dynamically seal new leaks in real time.
                </p>
                <p className="leading-relaxed">
                  Acoustic correlators, tracer gases, and robotic pigs can find leaks but 
                  only by shutting off service or excavating streets. "Smart" sensor grids 
                  cost ~$50,000 per km and demand full network upgrades.
                </p>
                <p className="leading-relaxed font-medium text-foreground">
                  Existing methods either fail in crisis zones or carry prohibitive cost 
                  and operational complexity.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-aqua/10 to-primary/5 rounded-3xl blur-xl" />
              <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border">
                <h3 className="font-display font-semibold text-xl text-foreground mb-8">
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
                      <div className="w-6 h-6 rounded-full bg-aqua/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-aqua" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <WaveBackground />
        
        <div className="container relative z-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-aqua/10 border border-aqua/20 mb-8 animate-pulse-glow">
              <Droplets className="w-10 h-10 text-aqua" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
              Infrastructure That <span className="text-aqua text-glow">Heals Itself</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              O-Seal represents a paradigm shift in water infrastructure maintenance. 
              Our autonomous capsules don't just find leaks — they seal them, in real-time, 
              without disrupting water service. This is engineering for resilience. 
              This is designing self-healing systems.
            </p>
            
            <Button variant="hero" size="xl" asChild>
              <Link to="/model">
                Discover the Technology
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
