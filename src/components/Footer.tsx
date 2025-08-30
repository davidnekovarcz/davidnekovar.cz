import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight 
} from "lucide-react";
import smarlifyWhiteLogo from "@/assets/smarlify-white.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isOverLight, setIsOverLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're approaching the footer (in the services section)
      const scrolled = window.scrollY > window.innerHeight * 1.2;
      setIsOverLight(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Smart Lifestyle", href: "#lifestyle" },
        { label: "Investment Portfolio", href: "#investments" },
        { label: "Technology Solutions", href: "#technology" },
        { label: "Consulting", href: "#consulting" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Investment Guide", href: "/guide" },
        { label: "Case Studies", href: "/cases" },
        { label: "FAQ", href: "/faq" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "#contact" },
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/smarlify.co", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className={`text-white transition-all duration-300 ${
      isOverLight 
        ? 'bg-black/80 backdrop-blur-md' 
        : 'bg-foreground'
    }`}>
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Join the Smart Life Revolution
            </h3>
            <p className="text-white/70 mb-8 text-lg">
              Get exclusive insights on smart investments, lifestyle tips, and technology updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
              />
              <Button className="btn-hero group whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={smarlifyWhiteLogo}
                alt="Smarlify Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h4 className="text-2xl font-bold">Smarlify</h4>
                <p className="text-white/70 text-sm">Freedom Through Smart Living</p>
              </div>
            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering individuals to achieve financial freedom through smart lifestyle choices, 
              strategic investments, and innovative technology solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-5 h-5" />
                <span>hello@smarlify.co</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="w-5 h-5" />
                <span>Global - Remote First</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h5 className="text-lg font-semibold mb-4">{section.title}</h5>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-white/70 text-sm">
            <p>© {currentYear} Smarlify.co. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;