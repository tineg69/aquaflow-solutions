import { useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import waterLoadingVideo from "@/assets/water-loading.mp4";

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
        {/* Water video background */}
        <video
          src={waterLoadingVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
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
