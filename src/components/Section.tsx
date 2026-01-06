import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "card";
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, variant = "default" }, ref) => {
    const variants = {
      default: "",
      muted: "bg-muted/30",
      card: "bg-card/40",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-20 md:py-28 lg:py-32",
          variants[variant],
          className
        )}
      >
        <div className="container px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
