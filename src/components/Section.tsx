import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-24 md:py-32",
          className
        )}
      >
        <div className="container px-6">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
