import { useState, useEffect, ReactNode, useRef } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import waterTransition from "@/assets/water-transition.webp";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip transition on initial load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Scroll to top when navigating
    window.scrollTo(0, 0);

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
        {/* Water GIF background */}
        <img
          src={waterTransition}
          alt=""
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
    </>
  );
};
