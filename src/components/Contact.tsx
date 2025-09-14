import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Download,
  MessageCircle,
  Calendar,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "9542175312",
      link: "tel:9542175312",
      copyable: true
    },
    {
      icon: Mail,
      label: "Email",
      value: "khanfarooq86360@gmail.com",
      link: "mailto:khanfarooq86360@gmail.com",
      copyable: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/farooq-khan-pathan",
      link: "https://www.linkedin.com/in/farooq-khan-pathan/",
      external: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Farooq3130",
      link: "https://github.com/Farooq3130",
      external: true
    }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects and discuss new opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  Get In Touch
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <div key={index} className="group">
                        <div className="flex items-center p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                          <IconComponent className="h-5 w-5 text-primary mr-4 flex-shrink-0" />
                          <div className="flex-grow min-w-0">
                            <p className="text-sm font-medium text-muted-foreground">
                              {contact.label}
                            </p>
                            <p className="font-semibold truncate">{contact.value}</p>
                          </div>
                          <div className="flex gap-2 ml-2">
                            {contact.copyable && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleCopy(contact.value)}
                                className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                📋
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              asChild
                              className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <a 
                                href={contact.link}
                                target={contact.external ? "_blank" : undefined}
                                rel={contact.external ? "noopener noreferrer" : undefined}
                              >
                                {contact.external ? <ExternalLink className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Quick Actions</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="hero" className="group">
                      <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Send Email
                    </Button>
                    <Button variant="outline" className="group">
                      <Calendar className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Schedule Call
                    </Button>
                    <Button variant="outline" className="group">
                      <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Availability & Location */}
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  Location
                </h3>
                <p className="text-muted-foreground mb-2">Hyderabad, India</p>
                <Badge variant="secondary" className="text-xs">
                  Open to Remote Work
                </Badge>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-secondary">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <h3 className="font-semibold mb-2">Available for Work</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Actively seeking internship and entry-level opportunities
                </p>
                <Badge variant="default" className="bg-gradient-primary">
                  Immediate Start
                </Badge>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Preferred Contact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-medium">Within 24hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best Time</span>
                    <span className="font-medium">10 AM - 6 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Preferred Method</span>
                    <span className="font-medium">Email / LinkedIn</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16">
          <Card className="card-hover border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                Ready to Build Something Amazing Together?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm always excited to discuss new projects, innovative ideas, and opportunities to contribute 
                to meaningful work. Whether it's AI/ML development, full-stack applications, or collaborative 
                research, let's connect and explore what we can create together.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
