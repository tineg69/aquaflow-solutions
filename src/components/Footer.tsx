import { Link } from "react-router-dom";
import oSealLogo from "@/assets/o-seal-logo-new.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Mission", path: "/mission" },
  { name: "Technology", path: "/technology" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Team", path: "/team" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <img 
                src={oSealLogo} 
                alt="O-Seal" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Autonomous leak-sealing technology for resilient water infrastructure.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="text-sm text-foreground mb-4">Navigation</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="text-sm text-foreground mb-4">Contact</p>
              <a 
                href="mailto:info@o-seal.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                info@o-seal.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} O-Seal
            </p>
            <span className="text-muted-foreground/50">·</span>
            <p className="text-sm text-muted-foreground">
              A <span className="text-accent font-medium">CurrentEvents</span> Innovation
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Engineering for resilience
          </p>
        </div>
      </div>
    </footer>
  );
};