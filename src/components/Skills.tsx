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
  Heart
} from "lucide-react";

const skillCategories = [
  {
    title: "Development & Programming",
    icon: Code2,
    color: "text-primary",
    skills: [
      { name: "Ruby / Ruby on Rails / Sinatra", level: 95, years: "2012+" },
      { name: "JavaScript / TypeScript / Coffee", level: 90, years: "2010+" },
      { name: "Vue.js / Nuxt.js / React / Node.js", level: 88, years: "2017+" },
      { name: "HTML5 / (S)CSS / BEM / Tailwind", level: 92, years: "2006+" },
      { name: "PWA / React Native / Ionic", level: 80, years: "2018+" }
    ]
  },
  {
    title: "Database & Infrastructure",
    icon: Database,
    color: "text-secondary",
    skills: [
      { name: "PostgreSQL / MySQL / NoSQL", level: 85, years: "2009+" },
      { name: "Git & CI / Heroku / GCP / Docker", level: 88, years: "2012+" },
      { name: "MacOS / Ubuntu / Debian", level: 90, years: "2012+" }
    ]
  },
  {
    title: "Business & Leadership",
    icon: Briefcase,
    color: "text-accent",
    skills: [
      { name: "Product Owner / Co-Founder", level: 92, years: "2012+" },
      { name: "Lean Startup / SaaS / Scrum(ban)", level: 88, years: "2013+" },
      { name: "Investment Portfolio Management", level: 85, years: "2014+" }
    ]
  }
];

const languages = [
  { name: "English", level: "Proficient / Fluent", flag: "🇺🇸" },
  { name: "Czech & Slovak", level: "Native / Bilingual", flag: "🇨🇿" },
  { name: "Japanese", level: "Intermediate", flag: "🇯🇵" },
  { name: "Russian & Ukrainian", level: "Intermediate", flag: "🇷🇺" },
  { name: "German & Spanish", level: "Elementary", flag: "🇩🇪" }
];

const personalityTraits = [
  { type: "16Personalities", result: "INFJ \"Advocate\"", description: "Insightful, creative, and motivated by values" },
  { type: "Wealth Dynamics", result: "\"Mechanic\"", description: "Systems thinker, detail-oriented problem solver" },
  { type: "C. G. Jung", result: "King, Explorer, Creator", description: "Leadership, curiosity, and innovation" }
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Skills &
              <span className="text-gradient mx-3">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, languages, and personal approach to work and life.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="luxury-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    <span className="text-base">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground text-xs">({skill.years})</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Languages & Personality */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Languages */}
            <Card className="luxury-card animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Languages className="w-6 h-6 text-primary" />
                  <span className="text-base">Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="font-medium text-foreground">{lang.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
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
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-secondary" />
                  <span className="text-base">Personality</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {personalityTraits.map((trait, index) => (
                    <div key={index} className="p-3 bg-muted/50 rounded-lg">
                      <div className="font-medium text-foreground mb-1">{trait.type}</div>
                      <div className="text-primary font-semibold mb-2">{trait.result}</div>
                      <div className="text-sm text-muted-foreground">{trait.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values & Hobbies - Hidden for now */}
          {/* <div className="grid lg:grid-cols-2 gap-8">
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
