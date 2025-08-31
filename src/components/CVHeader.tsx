import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { scrollToSection } from "@/utils/scroll";
import ThemeToggle from "./ThemeToggle";

const CVHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-gray-900/70 backdrop-blur-md border-b border-border no-print">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-display font-bold text-xl text-foreground hover:opacity-80 transition-opacity cursor-pointer"
          >
            David <span className="text-gradient">Nekovář</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="px-3 py-2 rounded-lg font-medium text-muted-foreground hover:text-white hover:bg-primary transition-all duration-200"
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="px-3 py-2 rounded-lg font-medium text-muted-foreground hover:text-white hover:bg-primary transition-all duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="px-3 py-2 rounded-lg font-medium text-muted-foreground hover:text-white hover:bg-primary transition-all duration-200"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-3 py-2 rounded-lg font-medium text-muted-foreground hover:text-white hover:bg-primary transition-all duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 dark:bg-gray-900/85 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left font-medium text-muted-foreground hover:text-white hover:bg-primary transition-all duration-200 py-3 px-3 rounded-lg"
              >
                Overview
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-left font-medium text-muted-foreground hover:text-white hover:bg-primary transition-all duration-200 py-3 px-3 rounded-lg"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left font-medium text-muted-foreground hover:text-white hover:bg-primary transition-all duration-200 py-3 px-3 rounded-lg"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left font-medium text-muted-foreground hover:text-white hover:bg-primary transition-all duration-200 py-3 px-3 rounded-lg"
              >
                Contact
              </button>
              <div className="pt-3 border-t border-border">
                <div className="flex items-center justify-between py-2 px-3">
                  <span className="text-sm text-muted-foreground">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default CVHeader;
