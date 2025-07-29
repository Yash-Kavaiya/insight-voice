import { Button } from "@/components/ui/button";
import { Mic, BarChart3, Search, Settings, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold hero-text">InsightVoice</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="#analytics" className="text-muted-foreground hover:text-foreground transition-smooth">
              Analytics
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-smooth">
              Pricing
            </a>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-smooth">
              Docs
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:flex">
              Sign In
            </Button>
            <Button variant="hero">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;