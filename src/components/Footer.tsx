import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading font-semibold text-lg text-foreground">
              Selectionway
            </span>
          </Link>
          
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Selectionway. Premium learning for aspiring minds.
          </p>

          <div className="flex items-center gap-4">
            <Link to="/classes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Classes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
