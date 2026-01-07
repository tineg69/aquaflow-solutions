import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { NeuralWaveBackground } from "@/components/NeuralWaveBackground";
import { STLViewer } from "@/components/STLViewer";
import { OBJViewer } from "@/components/OBJViewer";

const specs = [
  { label: "Diameter Range", value: "40–200mm", bg: "box-teal" },
  { label: "Pressure Rating", value: "16 bar", bg: "box-blue" },
  { label: "Seal Lifespan", value: "5+ years", bg: "box-teal" },
  { label: "Detection Precision", value: "±2mm", bg: "box-blue" },
  { label: "Communication", value: "Acoustic", bg: "box-teal" },
  { label: "Power Source", value: "Flow harvesting", bg: "box-blue" },
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-background overflow-y-auto snap-y snap-mandatory h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden section-dark snap-start min-h-screen flex items-center">
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
      <section className="py-20 md:py-28 relative section-light snap-start min-h-screen flex items-center">
        <div className="container px-6 relative">
          <RevealOnScroll direction="left">
            <div className="max-w-6xl mx-auto">
              <OBJViewer />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Components */}
      <section className="py-32 md:py-44 relative section-lighter snap-start min-h-screen flex items-center">
        <NeuralWaveBackground />
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
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Rigid Inner Ring", desc: "Maintains open flow channel for normal water throughput while providing structural support for the capsule.", bg: "box-teal" },
                { title: "Inflatable Outer Torus", desc: "Flexible membrane with ridged surface that expands to conform and seal against irregular pipe wall surfaces.", bg: "box-blue" },
                { title: "Pressure Sensors", desc: "Miniaturized sensors continuously monitor local pressure differentials to detect leak signatures with ±2mm precision.", bg: "box-blue" },
                { title: "Acoustic Communication", desc: "Short-range underwater modems enable real-time coordination between multiple units for complex repairs.", bg: "box-teal" },
                { title: "Autonomous Control", desc: "Onboard microcontroller regulates inflation timing, propulsion, and navigation decisions independently.", bg: "box-teal" },
                { title: "Flow Harvesting", desc: "Integrated turbine converts water flow into electrical power, enabling indefinite operation without batteries.", bg: "box-blue" },
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

      {/* 3D Model Viewer */}
      <section className="py-20 md:py-28 relative overflow-hidden section-light snap-start min-h-screen flex items-center">
        <NeuralWaveBackground />
        <div className="container px-6 relative">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">3D Model</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight">
                Interactive visualization
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="scale" delay={150}>
            <div className="max-w-5xl mx-auto">
              <STLViewer />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-32 md:py-40 relative section-dark snap-start min-h-screen flex items-center">
        <NeuralWaveBackground />
        <div className="container px-6 relative">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="mb-20 md:mb-28">
                <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">Specifications</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
                  Technical parameters
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specs.map((spec, i) => (
                <RevealOnScroll key={spec.label} delay={i * 50} className="h-full">
                  <div className={`${spec.bg} p-8 rounded-lg h-full flex flex-col justify-center`}>
                    <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white mb-2 tracking-tight">
                      {spec.value}
                    </p>
                    <p className="text-sm text-white/80">{spec.label}</p>
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