import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Zap, Crown, Building2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Perfect for small teams getting started with AI call analysis",
    icon: Zap,
    features: [
      "Up to 100 hours of audio per month",
      "Basic transcription in 20+ languages",
      "Sentiment analysis",
      "Email support",
      "Standard security",
      "1 user account"
    ],
    popular: false,
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$99",
    period: "per month",
    description: "Advanced features for growing businesses",
    icon: Crown,
    features: [
      "Up to 500 hours of audio per month",
      "Advanced transcription in 65+ languages",
      "Advanced sentiment & emotion analysis",
      "Custom topic detection",
      "Speaker identification",
      "Priority support",
      "Up to 10 user accounts",
      "API access",
      "Custom integrations"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for large organizations",
    icon: Building2,
    features: [
      "Unlimited audio processing",
      "White-label solutions",
      "Advanced AI models",
      "Custom training & fine-tuning",
      "Dedicated account manager",
      "24/7 phone support",
      "Unlimited user accounts",
      "On-premise deployment",
      "Custom compliance requirements",
      "SLA guarantees"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-background-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Choose Your 
              <span className="text-gradient"> Perfect Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unlock the power of AI-driven call analysis with flexible pricing designed for businesses of all sizes
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold">
              🎉 Start with a 14-day free trial - No credit card required
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-primary shadow-2xl ring-1 ring-primary/20' 
                      : 'hover:shadow-xl'
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      plan.popular ? 'bg-primary' : 'bg-primary/10'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        plan.popular ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.popular ? "default" : "outline"} 
                      className="w-full py-6 text-lg font-semibold"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Got questions? We've got answers.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What's included in the free trial?</h3>
                <p className="text-muted-foreground text-sm">
                  Your 14-day free trial includes full access to Professional plan features with up to 50 hours of audio processing.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at your next billing cycle.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground text-sm">
                  We accept all major credit cards, ACH transfers, and can accommodate invoice billing for Enterprise customers.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Is my data secure?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely. We use bank-level encryption, are SOC 2 compliant, and process data in secure, isolated environments.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do you offer custom integrations?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! Professional and Enterprise plans include API access and custom integration support.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What if I need more than the Enterprise plan offers?</h3>
                <p className="text-muted-foreground text-sm">
                  Contact our sales team for custom solutions including on-premise deployment and specialized AI model training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Calls?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of businesses already using Insight Voice to unlock valuable insights from their conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="px-8 py-4">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
