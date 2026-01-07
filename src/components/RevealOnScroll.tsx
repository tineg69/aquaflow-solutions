import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "right";
}

export const RevealOnScroll = ({ 
  children, 
  className,
  delay = 0,
  direction = "up",
}: RevealOnScrollProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible 
          ? "opacity-100 translate-y-0 translate-x-0" 
          : direction === "right"
            ? "opacity-0 translate-x-8"
            : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
