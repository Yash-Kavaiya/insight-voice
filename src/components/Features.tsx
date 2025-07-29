import { Card, CardContent } from "@/components/ui/card";
import { 
  Mic, 
  FileText, 
  Search, 
  BarChart3, 
  Users, 
  Shield,
  Brain,
  Clock,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Smart Recording",
    description: "One-click recording with automatic cloud sync and multi-device support",
    color: "text-primary"
  },
  {
    icon: FileText,
    title: "AI Transcription",
    description: "99% accurate transcription with speaker identification and timestamps",
    color: "text-secondary"
  },
  {
    icon: Brain,
    title: "Sentiment Analysis",
    description: "Real-time emotion detection and conversation tone analysis",
    color: "text-success"
  },
  {
    icon: Search,
    title: "Intelligent Search",
    description: "Full-text search across all recordings with smart filters and tags",
    color: "text-warning"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into speaking patterns, topics, and communication effectiveness",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share insights, add comments, and collaborate on call analysis",
    color: "text-secondary"
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Support for 50+ languages with real-time translation capabilities",
    color: "text-success"
  },
  {
    icon: Clock,
    title: "Real-Time Processing",
    description: "Instant analysis and insights as your conversations happen",
    color: "text-warning"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption, GDPR compliance, and enterprise-grade security",
    color: "text-destructive"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Powerful Features for
            <br />
            <span className="hero-text">Every Conversation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From automatic transcription to advanced analytics, InsightVoice provides 
            everything you need to extract maximum value from your conversations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 hover-lift group"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to unlock your conversation insights?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of professionals who trust InsightVoice for their call analysis needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-smooth shadow-primary">
                Start Free Trial
              </button>
              <button className="border border-border bg-card text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-smooth">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;