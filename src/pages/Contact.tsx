import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Headphones,
  Users,
  Building2,
  Send,
  CheckCircle
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help from our support team",
    contact: "support@insight-voice.com",
    availability: "24/7 response within 4 hours"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    contact: "+1 (555) 123-4567",
    availability: "Mon-Fri, 9 AM - 6 PM PST"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant help when you need it",
    contact: "Available in app",
    availability: "24/7 for Enterprise customers"
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "API and integration assistance",
    contact: "tech@insight-voice.com",
    availability: "Mon-Fri, 8 AM - 8 PM PST"
  }
];

const offices = [
  {
    city: "San Francisco",
    address: "123 Innovation Drive, Suite 400, San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    isHeadquarters: true
  },
  {
    city: "New York",
    address: "456 Business Ave, Floor 15, New York, NY 10001",
    phone: "+1 (555) 234-5678",
    isHeadquarters: false
  },
  {
    city: "London",
    address: "789 Tech Street, London EC2A 4DP, United Kingdom",
    phone: "+44 20 1234 5678",
    isHeadquarters: false
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    inquiry: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-8 pb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              We've received your message and will get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-background-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get in 
              <span className="text-gradient"> Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions about Insight Voice? We're here to help. Reach out to our team 
              and discover how we can transform your business conversations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Can We Help?</h2>
            <p className="text-muted-foreground">Choose the best way to reach us</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                    <p className="font-medium text-primary mb-2">{method.contact}</p>
                    <p className="text-xs text-muted-foreground">{method.availability}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Business Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="inquiry">Inquiry Type *</Label>
                  <Select onValueChange={(value) => handleInputChange("inquiry", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="demo">Request Demo</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Tell us more about how we can help..."
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Office Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Offices</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-lg">{office.city}</h4>
                        {office.isHeadquarters && (
                          <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                            Headquarters
                          </span>
                        )}
                      </div>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">{office.phone}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Business Hours</h4>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM PST</div>
                    <div>Saturday: 10:00 AM - 4:00 PM PST</div>
                    <div>Sunday: Closed</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Answers</h2>
            <p className="text-muted-foreground">Common questions we receive</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How quickly will I hear back?</h3>
                <p className="text-muted-foreground text-sm">
                  We respond to all inquiries within 4 hours during business hours, often much sooner.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I schedule a demo?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! Select "Request Demo" in the inquiry type and we'll schedule a personalized demonstration.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do you offer phone support?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, phone support is available for all paid plans during business hours.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What about after-hours support?</h3>
                <p className="text-muted-foreground text-sm">
                  Enterprise customers have access to 24/7 live chat and emergency phone support.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I speak with a technical expert?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! Our technical support team can assist with API integration and advanced features.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do you offer on-site visits?</h3>
                <p className="text-muted-foreground text-sm">
                  For Enterprise customers, we can arrange on-site consultations and training sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
