import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import deviceModel from "@/assets/device-model.png";

const features = [
  {
    title: "Rigid Inner Ring",
    description: "Maintains open flow channel for normal water throughput while providing structural support.",
  },
  {
    title: "Inflatable Outer Torus",
    description: "Flexible membrane with ridges that expands to seal cracks against pipe walls.",
  },
  {
    title: "Pressure Sensors",
    description: "Miniaturized sensors monitoring local pressure drops to detect leak patterns with ±2mm precision.",
  },
  {
    title: "Acoustic Communication",
    description: "Short-range modems enabling multi-unit coordination and real-time task handoff.",
  },
  {
    title: "Autonomous Control",
    description: "Onboard chip regulating inflation timing and propulsion for independent pipe navigation.",
  },
];

const specs = [
  { label: "Diameter Range", value: "40–200mm" },
  { label: "Pressure Rating", value: "16 bar max" },
  { label: "Seal Lifespan", value: "5+ years" },
  { label: "Detection Precision", value: "±2mm" },
  { label: "Communication", value: "Acoustic" },
  { label: "Power Source", value: "Flow harvesting" },
];

const Model = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-sm tracking-widest uppercase text-accent mb-6">Technology</p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-foreground mb-6">
                The O-Seal Device
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-muted-foreground text-lg">
                A precision-engineered capsule designed to detect, navigate, 
                and seal leaks from inside live water systems.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CAD Visualization - Gallery Style */}
      <section className="py-24 md:py-32">
        <div className="container px-6">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-square md:aspect-[4/3] flex items-center justify-center">
                <img
                  src={deviceModel}
                  alt="O-Seal Device Model"
                  className="max-w-full max-h-full object-contain animate-float-gentle"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Features - Clean List */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="mb-16">
                <p className="text-sm tracking-widest uppercase text-accent mb-6">Components</p>
                <h2 className="font-display text-foreground">
                  Engineering details
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {features.map((feature, i) => (
                <RevealOnScroll key={feature.title} delay={i * 75}>
                  <div className="border-l border-border pl-6">
                    <h3 className="font-display text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="mb-16">
                <p className="text-sm tracking-widest uppercase text-accent mb-6">Specifications</p>
                <h2 className="font-display text-foreground">
                  Technical overview
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
              {specs.map((spec, i) => (
                <RevealOnScroll key={spec.label} delay={i * 50}>
                  <div>
                    <p className="font-display text-2xl md:text-3xl text-foreground mb-1">
                      {spec.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{spec.label}</p>
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

export default Model;
