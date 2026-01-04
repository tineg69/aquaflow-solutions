import { useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

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
    }, 600);

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
          "fixed inset-0 z-[100] pointer-events-none overflow-hidden",
          isTransitioning ? "opacity-100" : "opacity-0"
        )}
        style={{ transition: "opacity 0.3s ease" }}
      >
        {/* Multiple wave layers for depth effect */}
        <div
          className={cn(
            "absolute inset-0 bg-background transition-transform duration-700 ease-in-out",
            isTransitioning ? "translate-y-0" : "-translate-y-full"
          )}
        >
          {/* Animated water particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-aqua/30 animate-float"
                style={{
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                }}
              />
            ))}
          </div>

          {/* Main water wave SVG */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-64"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="animate-wave"
              fill="hsl(var(--aqua) / 0.4)"
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,165.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-48"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ animationDelay: "-3s" }}
          >
            <path
              className="animate-wave"
              fill="hsl(var(--primary) / 0.5)"
              d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,186.7C672,203,768,245,864,250.7C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>

          {/* Center logo during transition */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-3 animate-pulse-glow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aqua to-primary flex items-center justify-center shadow-aqua">
                <span className="font-display font-bold text-primary-foreground text-2xl">O</span>
              </div>
            </div>
          </div>

          {/* Flowing lines */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-aqua/50 to-transparent"
                style={{
                  width: "150%",
                  left: "-25%",
                  top: `${20 + i * 15}%`,
                  animation: `flow ${2 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
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
    </>
  );
};
