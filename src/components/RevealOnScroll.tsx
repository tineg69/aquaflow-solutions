import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
}: RevealOnScrollProps) => {
  return (
    <div 
      className={cn("animate-fade-up", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
