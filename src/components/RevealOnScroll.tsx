import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "right" | "left" | "scale";
}

export const RevealOnScroll = ({ 
  children, 
  className,
  delay = 0,
  direction = "up",
}: RevealOnScrollProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: false });

  const getTransform = () => {
    if (isVisible) return "opacity-100 translate-y-0 translate-x-0 scale-100";
    switch (direction) {
      case "right": return "opacity-0 translate-x-12";
      case "left": return "opacity-0 -translate-x-12";
      case "scale": return "opacity-0 scale-95";
      default: return "opacity-0 translate-y-8";
    }
  };

  return (
    <div 
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        getTransform(),
        className
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};
