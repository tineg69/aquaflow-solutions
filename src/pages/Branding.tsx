import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const colorPalette = [
  { name: "Background", value: "#0a0a0a", desc: "Primary surface" },
  { name: "Foreground", value: "#ebebeb", desc: "Primary text" },
  { name: "Accent", value: "#4d9488", desc: "Muted teal" },
  { name: "Muted", value: "#808080", desc: "Secondary text" },
  { name: "Border", value: "#1f1f1f", desc: "Subtle dividers" },
];

const values = [
  { title: "Precision", description: "Every detail is considered. Nothing is arbitrary." },
  { title: "Resilience", description: "Built to endure pressure, designed to last." },
  { title: "Clarity", description: "Complex technology, simple communication." },
];

const Branding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-sm tracking-widest uppercase text-accent mb-6">Identity</p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-foreground mb-6">
                Brand Guidelines
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-muted-foreground text-lg">
                A visual language rooted in precision, restraint, and the 
                technical elegance of infrastructure engineering.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Logo */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <RevealOnScroll>
                <div>
                  <p className="text-sm tracking-widest uppercase text-accent mb-6">Logo</p>
                  <h2 className="font-display text-foreground mb-6">
                    The mark
                  </h2>
                  <p className="text-muted-foreground">
                    The circular "O" represents the capsule form — a complete, 
                    self-contained system. The wordmark uses DM Sans for its 
                    technical clarity and geometric precision.
                  </p>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={100}>
                <div className="flex items-center justify-center py-16">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                      <span className="font-display font-semibold text-background text-2xl">O</span>
                    </div>
                    <span className="font-display font-medium text-3xl text-foreground">O-Seal</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="mb-16">
                <p className="text-sm tracking-widest uppercase text-accent mb-6">Palette</p>
                <h2 className="font-display text-foreground mb-6">
                  Color system
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  A restrained palette anchored by near-black, with muted teal 
                  accents for essential highlights. No saturated or neon colors.
                </p>
              </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {colorPalette.map((color, i) => (
                <RevealOnScroll key={color.name} delay={i * 50}>
                  <div>
                    <div 
                      className="aspect-[4/3] rounded mb-4 border border-border/50"
                      style={{ backgroundColor: color.value }}
                    />
                    <p className="font-display text-foreground text-sm mb-1">{color.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{color.value}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <RevealOnScroll>
                <div>
                  <p className="text-sm tracking-widest uppercase text-accent mb-6">Typography</p>
                  <h2 className="font-display text-foreground mb-6">
                    Type system
                  </h2>
                  <p className="text-muted-foreground">
                    DM Sans for headlines — geometric, modern, and highly legible. 
                    Inter for body text — optimized for screens with excellent readability 
                    at all sizes.
                  </p>
                </div>
              </RevealOnScroll>
              
              <div className="space-y-10">
                <RevealOnScroll delay={75}>
                  <div className="border-l border-border pl-6">
                    <p className="text-xs text-accent uppercase tracking-widest mb-3">Display</p>
                    <p className="font-display text-4xl text-foreground mb-2">DM Sans</p>
                    <p className="text-sm text-muted-foreground">Headlines, titles, key metrics</p>
                  </div>
                </RevealOnScroll>
                
                <RevealOnScroll delay={150}>
                  <div className="border-l border-border pl-6">
                    <p className="text-xs text-accent uppercase tracking-widest mb-3">Body</p>
                    <p className="font-sans text-4xl text-foreground mb-2">Inter</p>
                    <p className="text-sm text-muted-foreground">Body copy, UI elements, captions</p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="mb-16">
                <p className="text-sm tracking-widest uppercase text-accent mb-6">Principles</p>
                <h2 className="font-display text-foreground">
                  Brand values
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-3 gap-12">
              {values.map((value, i) => (
                <RevealOnScroll key={value.title} delay={i * 75}>
                  <div className="border-l border-border pl-6">
                    <h3 className="font-display text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voice */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-sm tracking-widest uppercase text-accent mb-6">Voice</p>
              <h2 className="font-display text-foreground mb-8">
                Calm, confident, precise
              </h2>
              <p className="text-muted-foreground mb-10">
                We communicate with clarity and restraint. Technical accuracy 
                without jargon. Confidence without hyperbole.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["Precise", "Confident", "Accessible", "Forward-thinking"].map((trait) => (
                  <span 
                    key={trait}
                    className="px-4 py-2 text-sm text-muted-foreground border border-border rounded-full"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Branding;
