import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { cn } from "@/lib/utils";

const colorPalette = [
  { name: "Deep Navy", hex: "#0a0f14", hsl: "220 25% 5%", description: "Primary background" },
  { name: "Charcoal", hex: "#141a22", hsl: "220 20% 10%", description: "Card surfaces" },
  { name: "Pure White", hex: "#f5f5f5", hsl: "0 0% 96%", description: "Primary text" },
  { name: "Aqua", hex: "#2dd4bf", hsl: "185 70% 48%", description: "Primary accent" },
  { name: "Cyan", hex: "#22b8cf", hsl: "192 75% 50%", description: "Gradient partner" },
  { name: "Muted", hex: "#7c8592", hsl: "215 10% 55%", description: "Secondary text" },
];

const values = [
  { title: "Innovation with Purpose", description: "Solving real problems, not chasing trends." },
  { title: "Engineering for Resilience", description: "Building infrastructure that endures pressure." },
  { title: "Designing Self-Healing Systems", description: "Technology that repairs and improves itself." },
];

const Branding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="container px-6">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="font-display font-bold text-foreground mb-4">
                Brand <span className="text-aqua">Identity</span>
              </h1>
              <p className="text-muted-foreground">
                A visual language that embodies precision, innovation, and the fluid nature 
                of water infrastructure technology.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Logo Section */}
      <Section variant="muted">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-foreground mb-3">Logo</h2>
            <p className="text-muted-foreground text-sm">The convergence of technology and water flow.</p>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={100}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="p-12 rounded-2xl bg-card border border-border/50 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-aqua to-primary flex items-center justify-center">
                  <span className="font-display font-bold text-primary-foreground text-xl">O</span>
                </div>
                <span className="font-display font-semibold text-2xl text-foreground">O-Seal</span>
              </div>
            </div>
            
            <div className="text-center md:text-left max-w-xs">
              <p className="text-muted-foreground text-sm">
                The circular "O" symbolizes the capsule form factor, while the gradient 
                represents water flow through infrastructure.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </Section>

      {/* Color Palette */}
      <Section>
        <RevealOnScroll>
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-foreground mb-3">
              Color <span className="text-aqua">Palette</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              A sophisticated palette anchored by deep navy, illuminated by aqua accents.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {colorPalette.map((color, i) => (
            <RevealOnScroll key={color.name} delay={i * 50}>
              <div className="card-clean overflow-hidden">
                <div className="aspect-square" style={{ backgroundColor: color.hex }} />
                <div className="p-4">
                  <p className="font-display font-semibold text-foreground text-sm mb-0.5">{color.name}</p>
                  <p className="text-xs text-aqua font-mono">{color.hex}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section variant="muted">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-foreground mb-3">Typography</h2>
            <p className="text-muted-foreground text-sm">Technical sans-serifs for precision and readability.</p>
          </div>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <RevealOnScroll delay={0}>
            <div className="card-clean p-8">
              <p className="text-xs text-aqua font-medium mb-3 uppercase tracking-wider">Display</p>
              <p className="font-display text-4xl font-bold text-foreground mb-3">Space Grotesk</p>
              <p className="font-display text-xl text-muted-foreground mb-4">Aa Bb Cc 123</p>
              <p className="text-sm text-muted-foreground">Headlines and key metrics.</p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <div className="card-clean p-8">
              <p className="text-xs text-aqua font-medium mb-3 uppercase tracking-wider">Body</p>
              <p className="font-sans text-4xl font-bold text-foreground mb-3">Inter</p>
              <p className="font-sans text-xl text-muted-foreground mb-4">Aa Bb Cc 123</p>
              <p className="text-sm text-muted-foreground">Body copy and interface text.</p>
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <RevealOnScroll>
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-foreground mb-3">
              Our <span className="text-aqua">Values</span>
            </h2>
          </div>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {values.map((value, i) => (
            <RevealOnScroll key={value.title} delay={i * 100}>
              <div className="card-clean p-6 text-center">
                <div className="w-10 h-10 rounded-lg bg-aqua/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-aqua">{i + 1}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Brand Voice */}
      <Section variant="muted">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-foreground mb-6">Brand Voice</h2>
            <div className="card-clean p-8">
              <blockquote className="text-lg md:text-xl font-display text-foreground italic mb-6">
                "Calm, intelligent, and mission-driven."
              </blockquote>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["Precise", "Confident", "Accessible", "Forward-thinking"].map((trait) => (
                  <span 
                    key={trait}
                    className="px-3 py-1.5 rounded-full bg-aqua/10 text-aqua text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Section>

      <Footer />
    </div>
  );
};

export default Branding;
