import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Mic, Zap, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">AI-Powered Call Analysis</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your
              <br />
              <span className="hero-text">Conversations</span>
              <br />
              Into Insights
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Record, transcribe, and analyze your calls with AI-powered intelligence. 
              Discover patterns, track sentiment, and unlock actionable insights from every conversation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-success" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mic className="w-4 h-4 text-secondary" />
                <span>50+ Languages</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Real-time Analysis</span>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative">
            <div className="glass-effect rounded-2xl p-6 hover-lift">
              <img 
                src={dashboardPreview}
                alt="InsightVoice Dashboard Preview"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 glass-effect rounded-lg p-4 animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold text-success">94%</div>
                <div className="text-xs text-muted-foreground">Accuracy</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-effect rounded-lg p-4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">2.5k+</div>
                <div className="text-xs text-muted-foreground">Hours Analyzed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;