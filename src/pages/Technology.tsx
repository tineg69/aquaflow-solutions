import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import deviceModel from "@/assets/device-model.png";

const specs = [
  { label: "Diameter Range", value: "40–200mm" },
  { label: "Pressure Rating", value: "16 bar" },
  { label: "Seal Lifespan", value: "5+ years" },
  { label: "Detection Precision", value: "±2mm" },
  { label: "Communication", value: "Acoustic" },
  { label: "Power Source", value: "Flow harvesting" },
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
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
              <p className="text-muted-foreground text-lg leading-relaxed">
                A precision-engineered autonomous capsule designed to detect, navigate, 
                and seal leaks from inside live water systems.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Primary CAD Visualization */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <RevealOnScroll direction="left">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[16/10] md:aspect-[2/1] flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl" />
                <img
                  src={deviceModel}
                  alt="O-Seal Device - Primary View"
                  className="relative max-w-full max-h-full object-contain animate-float-gentle drop-shadow-2xl"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Components */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="mb-16">
                <p className="text-sm tracking-widest uppercase text-accent mb-6">Components</p>
                <h2 className="font-display text-foreground">
                  Engineering breakdown
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {[
                { title: "Rigid Inner Ring", desc: "Maintains open flow channel for normal water throughput while providing structural support for the capsule." },
                { title: "Inflatable Outer Torus", desc: "Flexible membrane with ridged surface that expands to conform and seal against irregular pipe wall surfaces." },
                { title: "Pressure Sensors", desc: "Miniaturized sensors continuously monitor local pressure differentials to detect leak signatures with ±2mm precision." },
                { title: "Acoustic Communication", desc: "Short-range underwater modems enable real-time coordination between multiple units for complex repairs." },
                { title: "Autonomous Control", desc: "Onboard microcontroller regulates inflation timing, propulsion, and navigation decisions independently." },
                { title: "Flow Harvesting", desc: "Integrated turbine converts water flow into electrical power, enabling indefinite operation without batteries." },
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

      {/* Secondary CAD View */}
      <section className="py-16 md:py-24 border-t border-border/30">
        <div className="container px-6">
          <RevealOnScroll direction="scale">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-square md:aspect-[4/3] flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl" />
                <img
                  src={deviceModel}
                  alt="O-Seal Device - Detail View"
                  className="relative max-w-full max-h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="mb-16">
                <p className="text-sm tracking-widest uppercase text-accent mb-6">Specifications</p>
                <h2 className="font-display text-foreground">
                  Technical parameters
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

export default Technology;