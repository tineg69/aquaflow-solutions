import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Design", path: "/branding" },
  { name: "Demo", path: "/model" },
  { name: "Team", path: "/team" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link to="/" className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="font-display font-semibold text-background text-sm">O</span>
              </div>
              <span className="font-display font-medium text-foreground">O-Seal</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Autonomous leak-sealing technology for resilient water infrastructure.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <p className="text-sm text-foreground mb-4">Pages</p>
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

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} O-Seal
          </p>
          <p className="text-sm text-muted-foreground">
            Engineering for resilience
          </p>
        </div>
      </div>
    </footer>
  );
};
