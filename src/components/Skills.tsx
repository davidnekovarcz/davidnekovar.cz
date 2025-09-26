import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  TrendingUp, 
  Users, 
  Globe,
  Briefcase,
  Languages,
  Heart,
  ExternalLink
} from "lucide-react";

const skillCategories = [
  {
    title: "Development & Programming",
    icon: Code2,
    color: "text-primary",
    skills: [
      { name: "Ruby / Ruby on Rails / Sinatra", level: 95, years: "2012+" },
      { name: "JavaScript / TypeScript / Coffee", level: 95, years: "2010+" },
      { name: "Vue.js & Nuxt.js / React.js & Next.js", level: 95, years: "2017+" },
      { name: "Node.js / Nest.js / Sails / Fastify", level: 78, years: "2017+" },
      { name: "PWA / React Native / Ionic / Capacitor", level: 75, years: "2018+" },
      { name: "HTML5 / (S)CSS / BEM / Tailwind", level: 95, years: "2006+" }
    ]
  },
  {
    title: "Database & Infrastructure",
    icon: Database,
    color: "text-secondary",
    skills: [
      { name: "PostgreSQL / MySQL / NoSQL", level: 80, years: "2009+" },
      { name: "Real-time databases / Firebase", level: 80, years: "2018+" },
      { name: "Git & CI / Heroku / GCP", level: 95, years: "2012+" },
      { name: "MacOS / Ubuntu / Debian", level: 95, years: "2012+" }
    ]
  },
  {
    title: "Business & Leadership",
    icon: Briefcase,
    color: "text-accent",
    skills: [
      { name: "Product Owner / Co-Founder", level: 95, years: "2012+" },
      { name: "AI Solutions Architect", level: 70, years: "2023+" },
      { name: "Lean Startup / SaaS / Scrum(ban)", level: 95, years: "2013+" },
      { name: "Investment Portfolio Management", level: 78, years: "2014+" }
    ]
  }
];

const languages = [
  { name: "English", level: "Proficient / Fluent", flag: "🇬🇧" },
  { name: "Czech & Slovak", level: "Native / Bilingual", flag: "🇨🇿" },
  { name: "Japanese", level: "Intermediate", flag: "🇯🇵" },
  { name: "Ukrainian", level: "Intermediate", flag: "🇺🇦" },
  { name: "German", level: "Elementary", flag: "🇩🇪" }
];

const personalityTraits = [
  { 
    type: "16Personalities", 
    result: "INFJ \"Advocate\"", 
    description: "Insightful, creative, and motivated by values",
    url: "https://www.16personalities.com/infj-personality?utm_source=davidnekovar.cz&utm_medium=external&utm_campaign=davidnekovarcz"
  },
  { 
    type: "Wealth Dynamics", 
    result: "\"Mechanic\"", 
    description: "Systems thinker, detail-oriented problem solver",
    url: "https://www.wealthdynamics.com/wealth-profiles/mechanic?utm_source=davidnekovar.cz&utm_medium=external&utm_campaign=davidnekovarcz"
  },
  { 
    type: "C. G. Jung", 
    result: "King, Explorer, Creator", 
    description: "Leadership, curiosity, and innovation",
    url: "https://jdmeier.com/brand-archetypes/?utm_source=davidnekovar.cz&utm_medium=external&utm_campaign=davidnekovarcz"
  }
];

const values = [
  "Freedom & Responsibility",
  "Minimalism & Efficiency", 
  "Sustainability & Decentralization",
  "Work & Life Balance",
  "On/Off-line Balance"
];

const hobbies = [
  "Self-development, Kaizen",
  "Languages, Native Cultures",
  "Macro-economy, Politics",
  "Qi Qong, Yoga, Jiu-jitsu",
  "Mountain Hiking, Coral Reef Snorkeling",
  "Libertarianism, Anarcho-capitalism",
  "Value Investing, Crypto-trading",
  "Healthy Cooking, Growing Food"
];

const Skills = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Skills &
              <span className="text-gradient mx-2 sm:mx-3">Expertise</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              A comprehensive overview of my technical skills, languages, and personal approach to work and life.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="luxury-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 sm:gap-3">
                    <category.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${category.color}`} />
                    <span className="text-sm sm:text-base">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-1.5 sm:space-y-2">
                        <div className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="font-medium text-foreground text-xs sm:text-sm leading-tight">{skill.name}</span>
                          <span className="text-muted-foreground text-xs flex-shrink-0 ml-2">({skill.years})</span>
                        </div>
                        <Progress value={skill.level} className="h-1.5 sm:h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Languages & Personality */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Languages */}
            <Card className="luxury-card animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 sm:gap-3">
                  <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <span className="text-sm sm:text-base">Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between p-2.5 sm:p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <span className="text-xl sm:text-2xl flex-shrink-0">{lang.flag}</span>
                        <span className="font-medium text-foreground text-sm sm:text-base">{lang.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs flex-shrink-0 ml-2">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personality */}
            <Card className="luxury-card animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 sm:gap-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                  <span className="text-sm sm:text-base">Personality</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {personalityTraits.map((trait, index) => (
                    <a 
                      key={index} 
                      href={trait.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 sm:p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                            {trait.type}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors font-medium mb-2 italic">
                            {trait.result}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {trait.description}
                          </p>
                        </div>
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values & Hobbies - Hidden for now */}
          {/* <div className="grid md:grid-cols-2 gap-8">
            <Card className="luxury-card animate-slide-up" style={{ animationDelay: '1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-accent" />
                  <span className="text-base">Values</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-3 p-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>📚 Simon Sinek: Start with WHY</div>
                    <div>🏢 37signals: Rework & Remote</div>
                    <div>💰 The Kabbalah of Money</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="luxury-card animate-slide-up" style={{ animationDelay: '1.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  <span className="text-base">Hobbies & Interests</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {hobbies.map((hobby, index) => (
                    <Badge key={index} variant="outline" className="justify-start text-left p-2 h-auto">
                      {hobby}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
