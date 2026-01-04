import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { WaveBackground } from "@/components/WaveBackground";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import deviceModel from "@/assets/device-model.png";

interface FeatureCallout {
  id: string;
  title: string;
  description: string;
  position: { top: string; left: string };
  lineDirection: "left" | "right" | "top" | "bottom";
}

const features: FeatureCallout[] = [
  {
    id: "rigid-ring",
    title: "Rigid Inner Ring",
    description: "The capsule's core is a sturdy circular frame that maintains an open flow channel through its center. This ensures normal water throughput even while deployed.",
    position: { top: "30%", left: "15%" },
    lineDirection: "right",
  },
  {
    id: "torus",
    title: "Inflatable Outer Torus",
    description: "A flexible, tire-like membrane with external ridges. When inflated by the internal pneumatic system, this torus expands to press against the pipe wall, sealing cracks.",
    position: { top: "50%", left: "80%" },
    lineDirection: "left",
  },
  {
    id: "sensors",
    title: "Pressure Sensors",
    description: "Miniaturized pressure sensors monitor local drops. A sudden dip-and-recover pattern indicates a leak, triggering the torus to inflate for sealing.",
    position: { top: "70%", left: "20%" },
    lineDirection: "right",
  },
  {
    id: "comms",
    title: "Communication Module",
    description: "Short-range acoustic modems let O-Seal units coordinate and hand off tasks. This acoustic handshake enables precise multi-unit swarming.",
    position: { top: "25%", left: "75%" },
    lineDirection: "left",
  },
  {
    id: "control",
    title: "Autonomous Control",
    description: "Each capsule carries a tiny control chip that regulates inflation timing and propulsion. By pulsing inflation and motor vibrations, O-Seal crawls along the pipe.",
    position: { top: "85%", left: "70%" },
    lineDirection: "left",
  },
];

const Model = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <WaveBackground />
        
        <div className="container relative z-10 px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              The <span className="text-aqua text-glow">O-Seal</span> Device
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A precision-engineered autonomous capsule designed to detect, navigate, 
              and seal leaks from inside live water pipes.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Model Section */}
      <section className="relative py-16 md:py-24">
        <div className="container px-6">
          <div className="relative max-w-5xl mx-auto">
            {/* Model Image Container */}
            <div className="relative aspect-square max-w-xl mx-auto">
              {/* Glow effect behind model */}
              <div className="absolute inset-0 bg-gradient-radial from-aqua/20 via-transparent to-transparent rounded-full blur-3xl animate-pressure-pulse" />
              
              {/* Device Image */}
              <img
                src={deviceModel}
                alt="O-Seal Device Model"
                className="relative z-10 w-full h-full object-contain animate-float"
              />

              {/* Feature Callout Points - Desktop */}
              <div className="hidden lg:block">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                    onMouseEnter={() => setActiveFeature(feature.id)}
                    onMouseLeave={() => setActiveFeature(null)}
                    className={cn(
                      "absolute w-4 h-4 rounded-full transition-all duration-300 z-20",
                      activeFeature === feature.id
                        ? "bg-aqua scale-150 shadow-aqua"
                        : "bg-aqua/50 hover:bg-aqua hover:scale-125"
                    )}
                    style={{ top: feature.position.top, left: feature.position.left }}
                  >
                    <span className="absolute inset-0 rounded-full bg-aqua animate-ping opacity-30" />
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Details - Desktop */}
            <div className="hidden lg:block">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={cn(
                    "absolute max-w-xs p-4 rounded-xl bg-card/90 border border-border backdrop-blur-sm transition-all duration-300",
                    feature.lineDirection === "left" ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2",
                    activeFeature === feature.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  )}
                  style={{ 
                    top: feature.position.top, 
                    [feature.lineDirection === "left" ? "right" : "left"]: "10%"
                  }}
                >
                  <h3 className="font-display font-semibold text-aqua mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards - Mobile/Tablet */}
          <div className="lg:hidden mt-12 grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <div
                key={feature.id}
                className={cn(
                  "p-6 rounded-2xl bg-card border border-border/50 water-ripple",
                  "opacity-0 animate-fade-up"
                )}
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
                onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-aqua flex-shrink-0 mt-1.5 animate-pulse-glow" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className={cn(
                      "text-sm text-muted-foreground leading-relaxed transition-all duration-300",
                      activeFeature === feature.id ? "max-h-48" : "max-h-12 overflow-hidden"
                    )}>
                      {feature.description}
                    </p>
                    <button 
                      className="text-xs text-aqua mt-2 hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveFeature(activeFeature === feature.id ? null : feature.id);
                      }}
                    >
                      {activeFeature === feature.id ? "Show less" : "Read more"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="relative py-24 bg-card/30">
        <div className="container px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
            Technical <span className="text-aqua">Specifications</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Diameter", value: "40-200mm", desc: "Adaptive sizing" },
              { label: "Operating Pressure", value: "Up to 16 bar", desc: "High-pressure rated" },
              { label: "Seal Duration", value: "5+ years", desc: "Long-term reliability" },
              { label: "Detection Range", value: "±2mm", desc: "Precision sensing" },
              { label: "Communication", value: "Acoustic", desc: "Underwater modems" },
              { label: "Power", value: "Flow-charged", desc: "Self-sustaining" },
            ].map((spec, i) => (
              <div 
                key={spec.label}
                className="text-center p-6 rounded-xl border border-border/50 bg-card/50 hover:border-aqua/30 transition-colors"
              >
                <p className="text-3xl font-display font-bold text-aqua mb-1">{spec.value}</p>
                <p className="font-semibold text-foreground">{spec.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Model;
