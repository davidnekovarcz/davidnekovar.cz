import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Investment Portfolio Manager",
    company: "Online / Global",
    type: "Portfolio Manager & Value Investor & Crypto-Trader",
    period: "2014/01 - now",
    duration: "11+ years, part time / seasonal",
    location: "Global",
    description: "I have a solid experience with investment portfolio management & strategy, risk management, crypto-trading, crypto-accounting, startup funding & (startup) product development etc.",
    skills: ["Portfolio Management", "Risk Management", "Crypto Trading", "Startup Funding"],
    current: true,
    logo: "💼",
    logoUrl: null
  },
  {
    title: "Lead Vue.js & Ruby on Rails Developer & Project Manager",
    company: "Designeo Creative s.r.o.",
    type: "Lead Developer & Project Manager",
    period: "2012/07 - 2025/01",
    duration: "12+ years, external / part-time / on demand",
    location: "Prague, Czech Republic",
    description: "Together we've built high-tech web/mobile/HW solutions for global brands like Yves Saint-Laurent, Dior, British American Tobacco, as well as complex internal task management system based on Redmine.",
    skills: ["Vue.js", "Ruby on Rails", "Project Management", "Mobile Development"],
    current: true,
    logo: "🎨",
    logoUrl: "https://logo.clearbit.com/designeo.cz"
  },
  {
    title: "Co-Founder & Product Owner & Lead Rails/Vue.js Developer",
    company: "Improvee.io",
    type: "Co-Founder & Product Owner",
    period: "2019/06 - 2024/05",
    duration: "5 years, part time / on demand",
    location: "Online / Global",
    description: "\"People over-estimate what they can do in a single day and under-estimate what they can do in their whole lives.\" That is why we help people unleash their true potential and let them grow, following the principles of 改善 (kaizen).",
    skills: ["Product Management", "Ruby on Rails", "Vue.js", "Startup Development"],
    current: false,
    logo: "📈",
    logoUrl: "https://logo.clearbit.com/improvee.io"
  },
  {
    title: "Product Owner & React Native Developer & English Teacher",
    company: "DreamArts / 株式会社 ドリーム・アーツ",
    type: "Product Owner & Developer",
    period: "2021/01 - 2021/09",
    duration: "9 months, fully on-site",
    location: "Hiroshima, Japan",
    description: "Responsible for the design & development of a new online product (JP market, retail). \"Accelerate your business with digitalization.\"",
    skills: ["React Native", "Product Design", "Japanese Market", "Retail Solutions"],
    current: false,
    logo: "🏯",
    logoUrl: "https://logo.clearbit.com/dreamarts.co.jp"
  },
  {
    title: "Founder & CTO & Ruby on Rails Developer & Scrum Master",
    company: "Smarlify.co",
    type: "Founder & CTO",
    period: "2014/01 - 2020/03",
    duration: "6+ years, part time",
    location: "Online / Global",
    description: "Smarlify: \"Our customers believe that having a sustainable online business is the way to freedom in their lives. We believe that too. Therefore we help startupers solve the right problem, find & validate their MVP, design a prototype, build & launch the right product - and constantly grow & improve their businesses.\"",
    skills: ["Ruby on Rails", "Scrum", "Startup Development", "MVP Development"],
    current: false,
    logo: "🚀",
    logoUrl: "https://logo.clearbit.com/smarlify.co"
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Professional
              <span className="text-gradient mx-3">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Over a decade of building innovative solutions, leading teams, and creating value across multiple industries and markets.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 timeline-line" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline Dot with Logo */}
                  <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-background timeline-dot ${
                    exp.current ? 'bg-primary' : 'bg-secondary'
                  } shadow-lg flex items-center justify-center`}>
                    {exp.logoUrl ? (
                      <img 
                        src={exp.logoUrl} 
                        alt={`${exp.company} logo`}
                        className="w-4 h-4 rounded object-contain"
                        onError={(e) => {
                          // Fallback to emoji if logo fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'block';
                        }}
                      />
                    ) : null}
                    <span 
                      className={`text-xs ${exp.logoUrl ? 'hidden' : 'block'}`}
                      style={{ display: exp.logoUrl ? 'none' : 'block' }}
                    >
                      {exp.logo}
                    </span>
                  </div>
                  
                  {/* Content Card */}
                  <div className="ml-20">
                    <Card className="luxury-card">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl font-semibold text-foreground mb-2">
                              {exp.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-primary font-medium mb-2">
                              <span>{exp.company}</span>
                              {exp.current && (
                                <Badge variant="secondary" className="bg-primary/10 text-primary">
                                  Current
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground italic mb-3">
                              {exp.type}
                            </div>
                          </div>
                          
                          <div className="text-right text-sm text-muted-foreground">
                            <div className="flex items-center gap-1 mb-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1 mb-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="text-xs opacity-75">
                              {exp.duration}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Want to know more about my experience?
            </p>
            <div className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer">
              <span className="font-medium">View Full LinkedIn Profile</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
