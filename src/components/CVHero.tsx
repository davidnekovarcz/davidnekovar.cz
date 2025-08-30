import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const CVHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/50" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-ocean rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-40 w-12 h-12 bg-gradient-sunset rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Main Info */}
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-primary font-medium">Available for New Opportunities 🚀</span>
              </div>

              {/* Name & Title */}
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 leading-tight">
                David
                <span className="text-gradient mx-3">Nekovář</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 leading-relaxed">
                Full Stack Developer & Product Owner
              </h2>

              {/* Tagline */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                <span className="text-primary font-semibold">Intrapreneur・Investor・Minimalist</span>
                <br />
                Building innovative solutions for global brands with 12+ years of experience in Ruby on Rails, Vue.js, and React.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <Button className="btn-hero group">
                  <Download className="mr-2 w-5 h-5" />
                  Download CV
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="group">
                  <Mail className="mr-2 w-5 h-5" />
                  Get in Touch
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Prague, Czech Republic</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+420 728 234 648</span>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Skills Preview */}
            <div className="animate-slide-up">
              <div className="luxury-card p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Professional Highlights</h3>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">12+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">6</div>
                    <div className="text-sm text-muted-foreground">Languages Spoken</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">11+</div>
                    <div className="text-sm text-muted-foreground">Years Investing</div>
                  </div>
                </div>

                {/* Key Skills */}
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Ruby on Rails', 'Vue.js', 'React', 'TypeScript', 'PostgreSQL', 'Docker'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVHero;
