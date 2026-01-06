import { Link } from "react-router-dom";
import oSealLogo from "@/assets/o-seal-logo-circular.png";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-navy-deep/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={oSealLogo} 
                alt="O-Seal" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              O-Seal: Autonomous leak-sealing technology that addresses the global 
              water crisis with elegance and intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Model", path: "/model" },
                { name: "Branding", path: "/branding" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-aqua transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@o-seal.com"
                  className="text-sm text-muted-foreground hover:text-aqua transition-colors"
                >
                  info@o-seal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} O-Seal. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Engineering for resilience. Designing self-healing systems.
          </p>
        </div>
      </div>
    </footer>
  );
};
