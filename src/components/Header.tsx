import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import smarlifyPinkLogo from "@/assets/smarlify-pink.svg";
import smarlifyWhiteLogo from "@/assets/smarlify-white.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverLight, setIsOverLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Keep header transparent/glass effect throughout
      setIsOverLight(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Lifestyle", href: "#lifestyle" },
    { label: "Investments", href: "#investments" },
    { label: "Technology", href: "#technology" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
      isOverLight 
        ? 'bg-black/80 border-black/20' 
        : 'bg-white/10 border-white/10'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={smarlifyPinkLogo}
              alt="Smarlify Logo" 
              className="h-10 w-auto transition-all duration-300"
            />
            <div>
              <h1 className="text-xl font-bold text-white">Smarlify</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.trackEvent) {
                    window.trackEvent('nav_click', {
                      nav_item: item.label,
                      event_category: 'navigation'
                    });
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-luxury" onClick={() => {
              if (typeof window !== 'undefined' && window.trackEvent) {
                window.trackEvent('header_cta_click', {
                  event_category: 'cta_interaction'
                });
              }
            }}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => {
              if (typeof window !== 'undefined' && window.trackEvent) {
                window.trackEvent('mobile_menu_toggle', {
                  event_category: 'navigation'
                });
              }
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t pt-4 ${
            isOverLight ? 'border-white/20' : 'border-white/10'
          }`}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.trackEvent) {
                      window.trackEvent('mobile_nav_click', {
                        nav_item: item.label,
                        event_category: 'navigation'
                      });
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <Button className="btn-luxury w-fit" onClick={() => {
                if (typeof window !== 'undefined' && window.trackEvent) {
                  window.trackEvent('mobile_header_cta_click', {
                    event_category: 'cta_interaction'
                  });
                }
              }}>Get Started</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;