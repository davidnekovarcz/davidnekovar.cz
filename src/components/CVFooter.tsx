import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Github, Heart, Code } from "lucide-react";
import { YEARS_OF_EXPERIENCE_STRING, CURRENT_YEAR } from "@/utils/experience";

const CVFooter = () => {
  return (
    <footer className="bg-card/50 border-t border-border backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="md:w-80 lg:w-96">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DN</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">David Nekovář</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-xl">
              Full Stack Developer & Product Owner with {YEARS_OF_EXPERIENCE_STRING} years of experience building innovative solutions for global brands.
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:w-64 lg:w-72">
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
                <a href="https://signal.me/#eu/+420728234648" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
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
                  href="https://github.com/davidnekovarcz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.codewars.com/users/davidnekovarcz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Code className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation - Hidden on mobile */}
          <div className="hidden md:block md:w-32 lg:w-36">
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-muted-foreground hover:text-primary transition-colors text-sm">Overview</a></li>
              <li><a href="#experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">Experience</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">Skills</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-muted-foreground">
            © {CURRENT_YEAR} David Nekovář. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
            <span>Designed by</span>
            <a 
              href="https://lovable.dev?via=david-nekovar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 mr-3 px-2 py-1 bg-muted dark:bg-gray-700/50 dark:hover:bg-gray-700/70 hover:bg-muted/30 rounded-full transition-colors group"
            >
              <img src="/lovable-logo.ico" alt="Lovable" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="group-hover:text-primary transition-colors text-xs sm:text-sm">Lovable</span>
            </a>
            <span>Fine-tuned with</span>
            <a 
              href="https://cursor.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 mr-3 px-2 py-1 bg-muted dark:bg-gray-700/50 dark:hover:bg-gray-700/70 hover:bg-muted/30 rounded-full transition-colors group"
            >
              <img src="/cursor-logo.ico" alt="Cursor" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="group-hover:text-primary transition-colors text-xs sm:text-sm">Cursor</span>
            </a>
            <span>Powered by</span>
            <a 
              href="https://heroku.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 px-2 py-1 bg-muted dark:bg-gray-700/50 dark:hover:bg-gray-700/70 hover:bg-muted/30 rounded-full transition-colors group"
            >
              <img src="/heroku-logo.svg" alt="Heroku" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="group-hover:text-primary transition-colors text-xs sm:text-sm">Heroku</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CVFooter;
