"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import PrintInstructions from "./PrintInstructions";
import { printCV } from "@/utils/print";
import { scrollToSection } from "@/utils/scroll";
import { YEARS_OF_EXPERIENCE_STRING } from "@/utils/experience";
import CVDownload from "./CVDownload";
import { DAVID_SEO } from "@/lib/seo";

const availableForHire = true;

const CVHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/30 to-muted/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <PrintInstructions />
          <div className="grid md:grid-cols-2 gap-12 items-center px-3 justify-items-center md:justify-items-start">

            {/* Left Column - Main Info */}
            <div className="animate-fade-in">
              {/* Badge */}
              { availableForHire && (
                <div className="inline-flex items-center px-3 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2" />
                  <span className="text-muted-foreground font-medium text-sm sm:text-base">{DAVID_SEO.hero?.badge || "Available for New Opportunities"}</span>
                </div>
              ) }

              {/* Name & Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                David
                <span className="text-gradient mx-2 sm:mx-3">Nekovář</span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {DAVID_SEO.hero?.role}
              </h2>

              {/* Tagline */}
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-lg">
                {DAVID_SEO.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-6 sm:mb-8 no-print">
                <Button
                  className="btn-hero group w-full sm:w-auto"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2 w-4 h-4" />
                  {DAVID_SEO.hero?.cta || "Get in Touch"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <CVDownload variant="hero" />
              </div>

              {/* Quick Contact */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Prague, Czech Republic</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="https://signal.me/#eu/+420728234648" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    +420 728 234 648
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Skills Preview */}
            <div className="animate-slide-up mt-8 lg:mt-0">
              <div className="luxury-card p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">Professional Highlights</h3>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8 max-w-lg ">
                  <div className="text-center bg-muted/50 rounded-lg p-5 dark:p-3">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">{YEARS_OF_EXPERIENCE_STRING}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-semibold">Years Experience</div>
                  </div>
                  <div className="text-center bg-muted/50 rounded-lg p-5 dark:p-3">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">50+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-semibold">Projects Delivered</div>
                  </div>
                  <div className="text-center bg-muted/50 rounded-lg p-5 dark:p-3">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">5</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-semibold">Languages Spoken</div>
                  </div>
                  <div className="text-center bg-muted/50 rounded-lg p-5 dark:p-3">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">11+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-semibold">Years Investing</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border mt-6 sm:mt-8 pt-4 sm:pt-6">
                  {/* Key Skills */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-medium text-foreground text-sm sm:text-base">Core Technologies</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {['Ruby on Rails', 'Vue.js', 'Nuxt.js', 'React.js', 'Next.js', 'TypeScript', 'PWA', 'Three.js', 'PostgreSQL', 'Firebase'].map((skill) => (
                        <span key={skill} className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
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
