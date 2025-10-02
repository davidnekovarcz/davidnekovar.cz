import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-lifestyle.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-white/90 font-medium">Smart Life for Yourself! 🏝️</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Live
            <span className="text-gradient mx-4">Smarter</span>
            <br />
            Invest
            <span className="text-gradient mx-4">Wiser</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Combine freedom, healthy lifestyle, growing investment portfolios in crypto & precious metals, 
            and cutting-edge technology to transform your life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button className="btn-hero group" onClick={() => {
              if (typeof window !== 'undefined' && window.trackEvent) {
                window.trackEvent('hero_cta_click', {
                  cta_text: 'Start Your Journey',
                  event_category: 'cta_interaction'
                });
              }
            }}>
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="ghost" className="btn-luxury group" onClick={() => {
              if (typeof window !== 'undefined' && window.trackEvent) {
                window.trackEvent('hero_video_click', {
                  event_category: 'cta_interaction'
                });
              }
            }}>
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/70">Smart Investors</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-white mb-2">$50M+</div>
              <div className="text-white/70">Portfolio Growth</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-white/70">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-ocean rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-sunset rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;