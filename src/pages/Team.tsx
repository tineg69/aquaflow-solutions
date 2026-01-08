import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { NeuralWaveBackground } from "@/components/NeuralWaveBackground";
import currentEventsLogo from "@/assets/currentevents-logo.png";
import oSealLogo from "@/assets/o-seal-logo-full.png";
const teamMembers = [{
  name: "Tanish Gottimukkula",
  role: "Director of Operations",
  initials: "TG"
}, {
  name: "Maneesh Vaddi",
  role: "CTO",
  initials: "MV"
}, {
  name: "Dhruv Miriyala",
  role: "Head of R&D",
  initials: "DM"
}, {
  name: "Hatim Ghadiali",
  role: "Chief Financial Officer",
  initials: "HG"
}, {
  name: "Zoeb Izzi",
  role: "Lead Systems Engineer",
  initials: "ZI"
}];
const Team = () => {
  return <div className="min-h-screen bg-background overflow-y-auto">
      <Navigation />
      
      {/* Hero - Full viewport */}
      <section className="h-screen flex flex-col justify-center relative overflow-hidden section-dark">
        <NeuralWaveBackground />
        <div className="container px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* CurrentEvents branding */}
            <RevealOnScroll>
              <div className="flex items-center justify-center mb-10">
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">A Project by</span>
                  <img src={currentEventsLogo} alt="CurrentEvents" className="h-24 object-contain" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Main headline */}
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-center text-foreground mb-6 tracking-tight leading-tight">
                Meet the Team
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <p className="text-muted-foreground text-lg md:text-xl text-center max-w-xl mx-auto mb-14 leading-relaxed">
                The people building the future of water infrastructure.
              </p>
            </RevealOnScroll>

            {/* Team photo placeholder */}
            <RevealOnScroll delay={300}>
              <div className="aspect-[21/9] max-w-4xl mx-auto bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-2xl border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block font-display text-2xl text-muted-foreground/40 mb-2">Team Photo</span>
                    <span className="text-sm text-muted-foreground/30">Coming Soon</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </RevealOnScroll>

            {/* Scroll indicator */}
            <RevealOnScroll delay={400}>
              <div className="flex justify-center mt-10">
                
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>


      <Footer />
    </div>;
};
export default Team;