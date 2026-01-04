import { Navigation } from "@/components/Navigation";
import { WaveBackground } from "@/components/WaveBackground";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const colorPalette = [
  { 
    name: "Deep Navy", 
    hex: "#0a0f1a", 
    hsl: "220 30% 6%",
    description: "Conveys authority, stability, and trust — ideal for infrastructure and engineering."
  },
  { 
    name: "Charcoal", 
    hex: "#171e2e", 
    hsl: "220 25% 12%",
    description: "Secondary background for layered depth and visual hierarchy."
  },
  { 
    name: "Pure White", 
    hex: "#fafafa", 
    hsl: "0 0% 98%",
    description: "Symbolizes cleanliness, clarity, and purity — echoing clean water."
  },
  { 
    name: "Aqua", 
    hex: "#22d3ee", 
    hsl: "185 75% 45%",
    description: "Primary accent inspired by water and advanced tech, emphasizing flow and innovation."
  },
  { 
    name: "Primary Blue", 
    hex: "#38bdf8", 
    hsl: "200 80% 55%",
    description: "Gradient partner to aqua, creating luminous water-like transitions."
  },
  { 
    name: "Teal", 
    hex: "#14b8a6", 
    hsl: "175 65% 40%",
    description: "Deeper accent for emphasis and interactive states."
  },
];

const values = [
  {
    title: "Innovation with Purpose",
    description: "Solving real problems, not chasing trends. Every feature serves the mission of preserving our water systems.",
  },
  {
    title: "Engineering for Resilience",
    description: "Building infrastructure that endures. Designing systems that thrive under pressure and adapt to challenges.",
  },
  {
    title: "Designing Self-Healing Systems",
    description: "Putting autonomy into every solution. Creating technology that repairs, maintains, and improves itself.",
  },
];

const Branding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <WaveBackground />
        
        <div className="container relative z-10 px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Brand <span className="text-aqua text-glow">Identity</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A visual language that embodies precision, innovation, and the fluid nature 
              of water infrastructure technology.
            </p>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Logo
            </h2>
            <p className="text-muted-foreground">Our mark represents the convergence of technology and water flow.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            {/* Logo on dark */}
            <div className="p-16 rounded-3xl bg-navy-deep border border-border flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aqua to-primary flex items-center justify-center shadow-aqua">
                  <span className="font-display font-bold text-primary-foreground text-3xl">O</span>
                </div>
                <span className="font-display font-semibold text-3xl text-foreground">O-Seal</span>
              </div>
            </div>
            
            {/* Logo placeholder note */}
            <div className="text-center md:text-left max-w-sm">
              <p className="text-sm text-muted-foreground italic mb-4">
                [Custom logo artwork to be inserted here]
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The circular "O" symbolizes the capsule form factor, while the gradient 
                represents the flow of water through infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Color <span className="text-aqua">Palette</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dark, sophisticated palette anchored by deep navy, illuminated by 
              aqua accents that evoke water and cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {colorPalette.map((color, i) => (
              <div 
                key={color.name}
                className={cn(
                  "group rounded-2xl overflow-hidden border border-border/50 bg-card",
                  "opacity-0 animate-fade-up hover:border-aqua/30 transition-all"
                )}
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div 
                  className="aspect-square"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-4">
                  <p className="font-display font-semibold text-foreground text-sm mb-1">
                    {color.name}
                  </p>
                  <p className="text-xs text-aqua font-mono mb-2">{color.hex}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed hidden group-hover:block">
                    {color.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Typography
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sleek, technical sans-serifs ensure readability while conveying 
              precision and modernity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Display Font */}
            <div className="p-8 rounded-2xl bg-card border border-border/50">
              <p className="text-sm text-aqua font-medium mb-4 uppercase tracking-wider">Display</p>
              <p className="font-display text-5xl font-bold text-foreground mb-4">Space Grotesk</p>
              <p className="font-display text-2xl text-muted-foreground mb-6">
                Aa Bb Cc Dd Ee Ff Gg
              </p>
              <p className="text-sm text-muted-foreground">
                Used for headlines, key metrics, and impactful statements. 
                Bold, geometric, and commanding.
              </p>
            </div>
            
            {/* Body Font */}
            <div className="p-8 rounded-2xl bg-card border border-border/50">
              <p className="text-sm text-aqua font-medium mb-4 uppercase tracking-wider">Body</p>
              <p className="font-sans text-5xl font-bold text-foreground mb-4">Inter</p>
              <p className="font-sans text-2xl text-muted-foreground mb-6">
                Aa Bb Cc Dd Ee Ff Gg
              </p>
              <p className="text-sm text-muted-foreground">
                Used for body copy, navigation, and interface elements. 
                Optimized for screen readability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <WaveBackground />
        
        <div className="container relative z-10 px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="text-aqua">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision, design, and innovation at O-Seal.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <div 
                key={value.title}
                className={cn(
                  "p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm",
                  "hover:border-aqua/30 hover:bg-card/80 transition-all duration-500",
                  "opacity-0 animate-fade-up"
                )}
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-12 h-12 rounded-xl bg-aqua/10 flex items-center justify-center mb-6">
                  <span className="font-display font-bold text-aqua text-xl">{i + 1}</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Brand Voice
            </h2>
            <div className="p-8 rounded-2xl bg-card border border-border/50">
              <blockquote className="text-xl md:text-2xl font-display text-foreground italic mb-6">
                "Calm, intelligent, and mission-driven. We speak with confidence 
                about complex technology in accessible terms."
              </blockquote>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["Precise", "Confident", "Accessible", "Forward-thinking"].map((trait) => (
                  <span 
                    key={trait}
                    className="px-4 py-2 rounded-full bg-aqua/10 text-aqua text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Branding;
