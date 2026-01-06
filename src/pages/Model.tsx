import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { cn } from "@/lib/utils";
import deviceModel from "@/assets/device-model.png";

interface FeatureCallout {
  id: string;
  title: string;
  description: string;
  position: { top: string; left: string };
}

const features: FeatureCallout[] = [
  {
    id: "rigid-ring",
    title: "Rigid Inner Ring",
    description: "Sturdy circular frame maintaining open flow channel for normal water throughput.",
    position: { top: "30%", left: "15%" },
  },
  {
    id: "torus",
    title: "Inflatable Outer Torus",
    description: "Flexible membrane with ridges that expands to seal cracks against pipe walls.",
    position: { top: "50%", left: "80%" },
  },
  {
    id: "sensors",
    title: "Pressure Sensors",
    description: "Miniaturized sensors monitoring local pressure drops to detect leak patterns.",
    position: { top: "70%", left: "20%" },
  },
  {
    id: "comms",
    title: "Communication Module",
    description: "Short-range acoustic modems enabling multi-unit coordination and task handoff.",
    position: { top: "25%", left: "75%" },
  },
  {
    id: "control",
    title: "Autonomous Control",
    description: "Tiny control chip regulating inflation timing and propulsion for pipe navigation.",
    position: { top: "85%", left: "70%" },
  },
];

const Model = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="container px-6">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="font-display font-bold text-foreground mb-4">
                The <span className="text-aqua">O-Seal</span> Device
              </h1>
              <p className="text-muted-foreground">
                A precision-engineered autonomous capsule designed to detect, navigate, 
                and seal leaks from inside live water pipes.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Interactive Model Section */}
      <Section>
        <div className="relative max-w-4xl mx-auto">
          {/* Model Image Container */}
          <RevealOnScroll>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-aqua/5 rounded-full blur-[80px] animate-pulse-subtle" />
              
              {/* Device Image */}
              <img
                src={deviceModel}
                alt="O-Seal Device Model"
                className="relative z-10 w-full h-full object-contain animate-float-gentle"
              />

              {/* Feature Points - Desktop */}
              <div className="hidden lg:block">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                    onMouseEnter={() => setActiveFeature(feature.id)}
                    onMouseLeave={() => setActiveFeature(null)}
                    className={cn(
                      "absolute w-3 h-3 rounded-full transition-all duration-200 z-20",
                      activeFeature === feature.id
                        ? "bg-aqua scale-150 shadow-glow"
                        : "bg-aqua/60 hover:bg-aqua hover:scale-125"
                    )}
                    style={{ top: feature.position.top, left: feature.position.left }}
                  />
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Feature Details - Desktop */}
          <div className="hidden lg:block">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={cn(
                  "absolute max-w-xs p-4 rounded-xl bg-card/95 border border-border backdrop-blur-sm transition-all duration-200",
                  parseInt(feature.position.left) > 50 ? "right-0" : "left-0",
                  activeFeature === feature.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                )}
                style={{ 
                  top: feature.position.top, 
                  [parseInt(feature.position.left) > 50 ? "right" : "left"]: "5%"
                }}
              >
                <h3 className="font-display font-semibold text-aqua text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards - Mobile/Tablet */}
        <div className="lg:hidden mt-10 grid gap-3 sm:grid-cols-2">
          {features.map((feature, i) => (
            <RevealOnScroll key={feature.id} delay={i * 50}>
              <div
                className="card-clean p-5 cursor-pointer"
                onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-aqua flex-shrink-0 mt-2" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                    <p className={cn(
                      "text-xs text-muted-foreground transition-all duration-200",
                      activeFeature === feature.id ? "" : "line-clamp-2"
                    )}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Technical Specs */}
      <Section variant="muted">
        <RevealOnScroll>
          <h2 className="font-display font-bold text-foreground text-center mb-10">
            Technical <span className="text-aqua">Specifications</span>
          </h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { label: "Diameter", value: "40-200mm", desc: "Adaptive" },
            { label: "Pressure", value: "16 bar", desc: "Max rated" },
            { label: "Seal Life", value: "5+ years", desc: "Durable" },
            { label: "Detection", value: "±2mm", desc: "Precision" },
            { label: "Comms", value: "Acoustic", desc: "Underwater" },
            { label: "Power", value: "Flow", desc: "Self-charging" },
          ].map((spec, i) => (
            <RevealOnScroll key={spec.label} delay={i * 50}>
              <div className="card-clean p-5 text-center">
                <p className="text-xl md:text-2xl font-display font-bold text-aqua mb-0.5">{spec.value}</p>
                <p className="text-sm font-medium text-foreground">{spec.label}</p>
                <p className="text-xs text-muted-foreground">{spec.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Model;
