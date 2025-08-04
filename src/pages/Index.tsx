import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  if (currentView === 'dashboard') {
    return <Dashboard onBackToHome={() => setCurrentView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Demo Dashboard Access */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Experience the Dashboard</h3>
            <p className="text-muted-foreground mb-6">
              See how InsightVoice transforms your call data into actionable insights.
            </p>
            <Button 
              variant="hero" 
              onClick={() => setCurrentView('dashboard')}
              className="w-full sm:w-auto"
            >
              View Demo Dashboard
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
