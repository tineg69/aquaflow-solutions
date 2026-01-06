import { Link } from "react-router-dom";
import oSealLogo from "@/assets/o-seal-logo-circular.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <img 
                src={oSealLogo} 
                alt="O-Seal" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Autonomous leak-sealing technology addressing the global 
              water crisis with elegance and intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm mb-4">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Design", path: "/branding" },
                { name: "Demo", path: "/model" },
                { name: "Team", path: "/team" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm mb-4">Contact</h4>
            <a 
              href="mailto:info@o-seal.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              info@o-seal.com
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} O-Seal. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Engineering for resilience.
          </p>
        </div>
      </div>
    </footer>
  );
};
