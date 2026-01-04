import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export const StatCard = ({ value, label, description, icon, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className={cn(
        "group relative p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm",
        "hover:border-aqua/30 hover:bg-card/80 transition-all duration-500",
        "water-ripple opacity-0 animate-fade-up"
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-aqua/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-aqua/10 text-aqua group-hover:bg-aqua/20 transition-colors">
            {icon}
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-3xl md:text-4xl font-display font-bold text-foreground group-hover:text-glow transition-all">
            {value}
          </p>
          <p className="text-sm font-semibold text-aqua uppercase tracking-wider">
            {label}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
