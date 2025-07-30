import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    title: "Intelligent Transcription",
    description: "Industry-leading accuracy with real-time processing across 65+ languages and dialects"
  },
  {
    icon: Brain,
    title: "Advanced AI Analytics",
    description: "Deep learning algorithms extract key insights, action items, and strategic decisions automatically"
  },
  {
    icon: BarChart3,
    title: "Sentiment Intelligence",
    description: "Comprehensive emotion analysis and customer satisfaction tracking with predictive insights"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and complete data sovereignty controls"
  },
  {
    icon: Users,
    title: "Seamless Integration",
    description: "Native integration with CRM, collaboration tools, and existing business workflows"
  },
  {
    icon: Search,
    title: "Executive Reporting",
    description: "C-suite dashboards with KPIs, trends analysis, and automated performance reporting"
  }
];

const Features = () => {
  return (
    <section id="features" className="corporate-spacing bg-gradient-to-b from-background to-background-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 uppercase tracking-wide">
            Enterprise-Grade Features
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Built for 
            <span className="text-primary"> Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform every conversation into strategic advantage with our comprehensive suite of AI-powered tools
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="relative p-0">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enterprise CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-card border border-border rounded-3xl p-12 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business Communications?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join industry leaders who trust CallInsight to deliver actionable intelligence from every conversation.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="px-12 py-4 text-lg font-semibold">
                Start Enterprise Trial
              </Button>
              <Button variant="outline" size="lg" className="px-12 py-4 text-lg font-semibold">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;