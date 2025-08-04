import { Button } from "@/components/ui/button";
import { Mic, BarChart3, Search, Settings, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md">
              <Mic className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">Insight Voice</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-12">
            {location.pathname === "/" ? (
              <a href="#features" className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium text-sm uppercase tracking-wide">
                Features
              </a>
            ) : (
              <Link to="/" className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium text-sm uppercase tracking-wide">
                Home
              </Link>
            )}
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium text-sm uppercase tracking-wide">
              Pricing
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium text-sm uppercase tracking-wide">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium text-sm uppercase tracking-wide">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary font-medium">
              Sign In
            </Button>
            <Button variant="hero" className="px-8 py-3 text-sm font-semibold tracking-wide">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;