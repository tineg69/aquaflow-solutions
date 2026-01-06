import { useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import waterLoading from "@/assets/water-loading.png";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setIsTransitioning(true);
    
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    if (!isTransitioning) {
      setDisplayChildren(children);
    }
  }, [children, isTransitioning]);

  return (
    <>
      {/* Water Flow Transition Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] pointer-events-none overflow-hidden transition-opacity duration-300",
          isTransitioning ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Water background image with animation */}
        <div
          className={cn(
            "absolute inset-0 transition-transform duration-700 ease-out",
            isTransitioning ? "scale-100" : "scale-110"
          )}
        >
          {/* Main water image */}
          <img
            src={waterLoading}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              animation: isTransitioning ? "waterFlow 2s ease-in-out infinite" : "none",
            }}
          />
          
          {/* Overlay for depth and brand consistency */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
          
          {/* Animated caustics overlay */}
          <div 
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: `radial-gradient(ellipse at 30% 20%, hsl(var(--aqua) / 0.4) 0%, transparent 50%),
                               radial-gradient(ellipse at 70% 80%, hsl(var(--primary) / 0.3) 0%, transparent 50%)`,
              animation: isTransitioning ? "caustics 3s ease-in-out infinite" : "none",
            }}
          />
        </div>

        {/* Center logo during transition */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={cn(
              "flex flex-col items-center gap-4 transition-all duration-500",
              isTransitioning ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
          >
            <span className="font-display font-bold text-aqua text-5xl tracking-tight drop-shadow-[0_0_20px_hsl(var(--aqua)/0.6)]">
              O-Seal
            </span>
            
            {/* Loading ripple rings */}
            <div className="relative w-32 h-8 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-aqua/80"
                  style={{
                    animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`,
                    left: `${32 + i * 24}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave accent */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 opacity-60"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(var(--background))"
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
            style={{
              animation: isTransitioning ? "waveMotion 2s ease-in-out infinite" : "none",
            }}
          />
        </svg>
      </div>

      {/* Page Content */}
      <div
        className={cn(
          "transition-opacity duration-300",
          isTransitioning ? "opacity-0" : "opacity-100"
        )}
      >
        {displayChildren}
      </div>

      {/* Keyframes for water animations */}
      <style>{`
        @keyframes waterFlow {
          0%, 100% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.02) translateY(-5px);
          }
        }
        
        @keyframes caustics {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        
        @keyframes waveMotion {
          0%, 100% {
            d: path("M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z");
          }
          50% {
            d: path("M0,60 C360,0 720,120 1080,60 C1260,30 1380,90 1440,60 L1440,120 L0,120 Z");
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-12px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};
