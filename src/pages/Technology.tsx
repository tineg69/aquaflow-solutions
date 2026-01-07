import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { NeuralWaveBackground } from "@/components/NeuralWaveBackground";
import { TechGridBackground } from "@/components/TechGridBackground";
import { STLViewer } from "@/components/STLViewer";
import { OBJViewer } from "@/components/OBJViewer";

const specs = [
  { 
    label: "Diameter Range", 
    value: "40–200mm", 
    bg: "box-teal",
    description: "The O-Seal is designed to operate in pipes ranging from 40mm to 200mm in diameter. This covers the majority of municipal water distribution mains, allowing a single device design to address most urban water infrastructure without modification."
  },
  { 
    label: "Pressure Rating", 
    value: "16 bar", 
    bg: "box-blue",
    description: "The O-Seal can withstand operating pressures up to 16 bar (232 psi), which exceeds typical municipal water system pressures of 3-8 bar. This ensures the seal remains intact even during pressure surges or water hammer events."
  },
  { 
    label: "Seal Lifespan", 
    value: "5+ years", 
    bg: "box-teal",
    description: "Once deployed and anchored at a leak site, the O-Seal's inflatable torus and sealing materials are engineered to maintain their integrity for over 5 years, providing a long-term repair solution without requiring excavation or replacement."
  },
  { 
    label: "Detection Precision", 
    value: "±2mm", 
    bg: "box-blue",
    description: "The onboard pressure sensors can pinpoint leak locations with ±2mm accuracy. This precision ensures the O-Seal deploys its sealing mechanism at the exact fracture point, maximizing seal effectiveness and preventing water bypass."
  },
  { 
    label: "Communication", 
    value: "Acoustic", 
    bg: "box-teal",
    description: "O-Seal units communicate via underwater acoustic modems, enabling real-time coordination between multiple capsules. This allows swarm-like behavior for complex repairs and provides status updates to surface monitoring stations."
  },
  { 
    label: "Power Source", 
    value: "Flow harvesting", 
    bg: "box-blue",
    description: "The O-Seal generates power from the water flow itself using a micro-turbine system. This eliminates the need for batteries, enabling indefinite operation within the pipe network and reducing environmental impact."
  },
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-background overflow-y-auto snap-y snap-mandatory h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden section-dark snap-start min-h-screen flex items-center">
        <TechGridBackground />
        <div className="container px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-sm tracking-[0.4em] uppercase text-accent/80 mb-10 font-medium">Technology</p>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight">
                <span className="text-accent">The O-Seal</span>
                <br />
                <span className="text-foreground">Device</span>
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
        <NeuralWaveBackground />
        <div className="container px-6 relative">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-accent/60 mb-6">CAD Model</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight">
                O-Seal Torus Design
              </h2>
            </div>
          </RevealOnScroll>
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
                { title: "Flexible Outer Shell", desc: "Durable polymer housing that protects internal components and allows the capsule to navigate through pipe bends and junctions.", bg: "box-blue" },
                { title: "Pressure Sensors", desc: "Miniaturized sensors continuously monitor local pressure differentials to detect leak signatures with ±2mm precision.", bg: "box-blue" },
                { title: "Acoustic Communication", desc: "Short-range underwater modems enable real-time coordination between multiple units for complex repairs.", bg: "box-teal" },
                { title: "Autonomous Control", desc: "Onboard microcontroller regulates navigation, sensor processing, and iris deployment decisions independently.", bg: "box-teal" },
                { title: "Iris Mechanism", desc: "When a fracture is detected, the iris expands outward to anchor the capsule against the pipe wall, stopping flow and creating a permanent seal at the leak site.", bg: "box-blue" },
              ].map((item, i) => (
                <RevealOnScroll key={item.title} delay={i * 75} className="h-full">
                  <div className={`${item.bg} p-8 rounded-lg h-full flex flex-col justify-center items-center group cursor-pointer transition-all duration-300 hover:scale-[1.02] min-h-[140px] overflow-hidden`}>
                    <h3 className="font-display text-xl text-white tracking-tight text-center opacity-100 group-hover:opacity-0 group-hover:translate-y-[-10px] transition-all duration-500 absolute">{item.title}</h3>
                    <p className="text-sm text-white/90 leading-relaxed text-center opacity-0 group-hover:opacity-100 translate-y-[10px] group-hover:translate-y-0 transition-all duration-500 delay-200">{item.desc}</p>
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
                Iris Visualization
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
                  <div className={`${spec.bg} p-8 rounded-lg h-full flex flex-col justify-center items-center group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg min-h-[160px] overflow-hidden relative`}>
                    <div className="flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 group-hover:translate-y-[-10px] transition-all duration-500 absolute">
                      <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white mb-2 tracking-tight text-center">
                        {spec.value}
                      </p>
                      <p className="text-sm text-white/80 text-center">{spec.label}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 translate-y-[10px] group-hover:translate-y-0 transition-all duration-500 delay-200 px-2">
                      <h4 className="text-sm font-semibold text-white mb-2">{spec.label}</h4>
                      <p className="text-xs text-white/80 leading-relaxed text-center">
                        {spec.description}
                      </p>
                    </div>
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