import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Download,
  MessageCircle
} from "lucide-react";
import { printCV } from "@/utils/print";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "nekovar.david@gmail.com",
    href: "mailto:nekovar.david@gmail.com",
    primary: true
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+420 728 234 648",
    href: "tel:+420728234648",
    primary: true
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Prague, Czech Republic",
    href: null,
    primary: false
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    username: "dave-nekovar",
    href: "https://www.linkedin.com/in/dave-nekovar/",
    color: "text-blue-600"
  },
  {
    icon: Github,
    label: "GitHub",
    username: "daveNekovar",
    href: "https://github.com/daveNekovar",
    color: "text-gray-800"
  }
];

const projects = [
  {
    name: "Smarlify.co",
    tagline: "Live smarter, invest wiser, be free",
    url: "https://www.smarlify.co/?utm_source=website&utm_medium=external&utm_campaign=dave",
    description: "Smart lifestyle and investment platform"
  },
  {
    name: "Improvee.io",
    tagline: "Become the designer of your life",
    url: "https://app.improvee.io/?utm_source=website&utm_medium=external&utm_campaign=dave",
    description: "Personal development and kaizen platform"
  },
  {
    name: "Koinly.io",
    tagline: "Make crypto less taxing",
    url: "https://koinly.io/?via=B2E92FE3&utm_source=website&utm_medium=external&utm_campaign=dave",
    description: "Crypto tax and accounting solution"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Let's
              <span className="text-gradient mx-3">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project or explore collaboration opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Methods */}
                  <div className="space-y-4">
                    {contactMethods.map((contact, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                        <contact.icon className={`w-5 h-5 ${contact.primary ? 'text-primary' : 'text-muted-foreground'}`} />
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground">{contact.label}</div>
                          {contact.href ? (
                            <a 
                              href={contact.href}
                              className="font-medium text-foreground hover:text-primary transition-colors"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <div className="font-medium text-foreground">{contact.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-border">
                    <h4 className="font-medium text-foreground mb-4">Social Profiles</h4>
                    <div className="space-y-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors group"
                        >
                          <social.icon className={`w-5 h-5 ${social.color}`} />
                          <div className="flex-1">
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {social.label}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              @{social.username}
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-6 border-t border-border space-y-3 no-print">
                    <Button 
                      className="w-full btn-hero group"
                      onClick={() => window.location.href = 'mailto:nekovar.david@gmail.com'}
                    >
                      <Mail className="mr-2 w-5 h-5" />
                      Send Email
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full group"
                      onClick={printCV}
                    >
                      <Download className="mr-2 w-5 h-5" />
                      Download CV (PDF)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Projects & Links */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <ExternalLink className="w-6 h-6 text-secondary" />
                    My Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Check out some of the projects I've founded, co-founded, or actively support:
                  </p>

                  <div className="space-y-4">
                    {projects.map((project, index) => (
                      <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                              {project.name}
                            </h4>
                            <p className="text-sm text-primary font-medium mb-2 italic">
                              "{project.tagline}"
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {project.description}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Availability Status */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-medium text-foreground">Available for New Opportunities</span>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>✅ Full-time positions</div>
                      <div>✅ Part-time / Contract work</div>
                      <div>✅ Consulting & Advisory roles</div>
                      <div>✅ Investment opportunities</div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 no-print">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      <span className="font-medium text-primary">Quick Response</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      I typically respond to emails within 24 hours. For urgent matters, feel free to call directly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="text-center mt-16 animate-fade-in">
            <blockquote className="text-2xl md:text-3xl font-display text-muted-foreground italic max-w-2xl mx-auto mb-4">
              "Live smarter, invest wiser, be free"
            </blockquote>
            <p className="text-muted-foreground">
              — My personal philosophy and approach to life and work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
