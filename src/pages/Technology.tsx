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
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden section-dark">
        <div className="container px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-xs tracking-[0.3em] uppercase text-accent/70 mb-8">Technology</p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-foreground mb-8 tracking-tight">
                The O-Seal Device
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                A precision-engineered autonomous capsule designed to detect, navigate, 
                and seal leaks from inside live water systems.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Primary CAD Visualization */}
      <section className="py-20 md:py-28 relative section-light">
        <div className="container px-6">
          <RevealOnScroll direction="left">
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-[16/10] md:aspect-[2/1] flex items-center justify-center">
                <img
                  src={deviceModel}
                  alt="O-Seal Device - Primary View"
                  className="relative max-w-full max-h-full object-contain animate-float-gentle"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Components */}
      <section className="py-32 md:py-44 relative section-lighter">
        <div className="container px-6 relative">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="mb-20 md:mb-28">
                <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">Components</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
                  Engineering breakdown
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-14">
              {[
                { title: "Rigid Inner Ring", desc: "Maintains open flow channel for normal water throughput while providing structural support for the capsule." },
                { title: "Inflatable Outer Torus", desc: "Flexible membrane with ridged surface that expands to conform and seal against irregular pipe wall surfaces." },
                { title: "Pressure Sensors", desc: "Miniaturized sensors continuously monitor local pressure differentials to detect leak signatures with ±2mm precision." },
                { title: "Acoustic Communication", desc: "Short-range underwater modems enable real-time coordination between multiple units for complex repairs." },
                { title: "Autonomous Control", desc: "Onboard microcontroller regulates inflation timing, propulsion, and navigation decisions independently." },
                { title: "Flow Harvesting", desc: "Integrated turbine converts water flow into electrical power, enabling indefinite operation without batteries." },
              ].map((item, i) => (
                <RevealOnScroll key={item.title} delay={i * 75}>
                  <div className="border-l border-accent/20 pl-8">
                    <h3 className="font-display text-xl text-foreground mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CAD View */}
      <section className="py-20 md:py-28 relative overflow-hidden section-light">
        <div className="container px-6 relative">
          <RevealOnScroll direction="scale">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-square md:aspect-[4/3] flex items-center justify-center">
                <img
                  src={deviceModel}
                  alt="O-Seal Device - Detail View"
                  className="relative max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-32 md:py-40 relative section-dark">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="mb-20 md:mb-28">
                <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">Specifications</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
                  Technical parameters
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-14">
              {specs.map((spec, i) => (
                <RevealOnScroll key={spec.label} delay={i * 50}>
                  <div>
                    <p className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-2 tracking-tight">
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