import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  TrendingUp, 
  Shield,
  Brain,
  Zap,
  Heart,
  Linkedin,
  Twitter,
  Github,
  Building2
} from "lucide-react";

const stats = [
  { number: "10M+", label: "Hours Analyzed", icon: TrendingUp },
  { number: "500+", label: "Enterprise Customers", icon: Building2 },
  { number: "99.9%", label: "Uptime SLA", icon: Shield },
  { number: "65+", label: "Languages Supported", icon: Globe }
];

const values = [
  {
    icon: Brain,
    title: "Innovation First",
    description: "We're constantly pushing the boundaries of what's possible with AI and voice technology."
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your data security is our top priority. We maintain the highest standards of privacy protection."
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "We measure our success by the value we deliver to our customers and their business outcomes."
  },
  {
    icon: Heart,
    title: "Ethical AI",
    description: "We're committed to developing AI responsibly and ensuring our technology benefits everyone."
  }
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of AI at Google, PhD in Machine Learning from Stanford",
    image: "/api/placeholder/150/150",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder", 
    bio: "Ex-Principal Engineer at Amazon Alexa, 15+ years in voice technology",
    image: "/api/placeholder/150/150",
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Dr. Priya Patel",
    role: "Head of AI Research",
    bio: "Former Research Scientist at OpenAI, published 40+ papers in NLP",
    image: "/api/placeholder/150/150",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "James Thompson",
    role: "VP of Engineering",
    bio: "Former Engineering Lead at Spotify, expert in scalable audio processing",
    image: "/api/placeholder/150/150",
    social: { linkedin: "#", github: "#" }
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-background-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 px-4 py-2 text-sm">About Insight Voice</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming Business 
              <span className="text-gradient"> Communication</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're on a mission to unlock the hidden value in every business conversation through 
              cutting-edge AI technology that turns voice into actionable intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground">How we started and where we're going</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Insight Voice was born from a simple observation: businesses were sitting on a goldmine of 
                untapped insights locked away in their recorded conversations. Sales calls, customer support 
                interactions, team meetings – all containing valuable data that could drive better decisions, 
                improve customer experiences, and accelerate growth.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2022 by a team of AI researchers and industry veterans from Google, Amazon, and 
                OpenAI, we set out to build the most advanced voice intelligence platform ever created. 
                Our breakthrough came when we developed proprietary AI models that don't just transcribe 
                conversations – they truly understand them.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, we're proud to serve over 500 enterprise customers worldwide, processing millions 
                of hours of audio every month. But we're just getting started. Our vision is a world where 
                every business conversation becomes a strategic asset, driving insights that transform how 
                organizations operate and serve their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">The brilliant minds behind Insight Voice</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-xs mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-2">
                    {member.social.linkedin && (
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.github && (
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Target className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              To democratize voice intelligence and empower every organization to extract maximum 
              value from their conversations through ethical, secure, and cutting-edge AI technology.
            </p>
            <Button variant="hero" size="lg" className="px-8 py-4">
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Experience the power of AI-driven conversation intelligence for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="px-8 py-4">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
