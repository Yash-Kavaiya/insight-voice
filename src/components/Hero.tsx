import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Mic, Zap, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background-secondary">
      {/* Corporate Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, hsl(var(--primary)) 0%, transparent 50%)`,
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Corporate Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8 uppercase tracking-wide">
            <Zap className="w-4 h-4 mr-2" />
            Enterprise AI Technology
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
            Transform Your
            <br />
            <span className="text-gradient">Business Calls</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Harness enterprise-grade AI to unlock actionable insights from every conversation. 
            Advanced transcription, sentiment analysis, and intelligent reporting that drive success.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-16">
            <Button variant="hero" size="lg" className="w-full lg:w-auto px-12 py-4 text-lg font-semibold">
              <Mic className="mr-3 h-5 w-5" />
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg" className="w-full lg:w-auto px-12 py-4 text-lg font-semibold">
              <Play className="mr-3 h-5 w-5" />
              See How It Works
            </Button>
          </div>
          
          {/* Enterprise Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-3">15M+</div>
              <div className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Calls Processed</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-3">99.8%</div>
              <div className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-3">65+</div>
              <div className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Languages</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-3">2,500+</div>
              <div className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Enterprise Clients</div>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mt-20 relative">
            <div className="glass-effect rounded-2xl p-6 hover-lift max-w-4xl mx-auto">
              <img 
                src={dashboardPreview}
                alt="CallInsight Dashboard Preview"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;