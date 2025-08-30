import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Github, Heart } from "lucide-react";

const CVFooter = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DN</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">David Nekovář</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Full Stack Developer & Product Owner with 12+ years of experience building innovative solutions for global brands.
            </p>
            
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-primary" />
                <span>Available for new opportunities</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:nekovar.david@gmail.com" className="text-sm hover:text-primary transition-colors">
                  nekovar.david@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+420728234648" className="text-sm hover:text-primary transition-colors">
                  +420 728 234 648
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Prague, Czech Republic</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-medium text-foreground mb-3">Connect</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/dave-nekovar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/daveNekovar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">Experience</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">Skills</a></li>
              <li><a href="#education" className="text-muted-foreground hover:text-primary transition-colors text-sm">Education</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>

            {/* My Projects */}
            <div className="mt-6">
              <h4 className="font-medium text-foreground mb-3">My Projects</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.smarlify.co/?utm_source=website&utm_medium=external&utm_campaign=dave" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Smarlify.co
                  </a>
                </li>
                <li>
                  <a href="https://app.improvee.io/?utm_source=website&utm_medium=external&utm_campaign=dave" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Improvee.io
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 David Nekovář. All rights reserved.
          </div>
          
          <div className="text-sm text-muted-foreground italic">
            "Live smarter, invest wiser, be free"
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CVFooter;
