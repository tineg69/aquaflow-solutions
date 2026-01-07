import { Link } from "react-router-dom";
import currentEventsLogo from "@/assets/currentevents-final.png";
import oSealLogo from "@/assets/o-seal-final.png";

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
                src={currentEventsLogo} 
                alt="CurrentEvents" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Engineering solutions for tomorrow's infrastructure challenges.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground/60">Our Product:</span>
              <img 
                src={oSealLogo} 
                alt="O-Seal" 
                className="h-8 w-auto object-contain opacity-80"
              />
            </div>
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
                href="mailto:info@currentevents.team"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                info@currentevents.team
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CurrentEvents
          </p>
          <p className="text-sm text-muted-foreground">
            Engineering for resilience
          </p>
        </div>
      </div>
    </footer>
  );
};
