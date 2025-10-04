import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Heart, Users } from "lucide-react";

const education = [
  {
    institution: "Unicorn College",
    degree: "Management of ICT Projects",
    period: "2012/09 - 2014/06",
    duration: "3 years",
    location: "Prague, Czech Republic",
    subjects: ["Project Management", "Software Development", "Algorithms", "Economics", "Management Accounting", "English & Russian"],
    type: "Higher Education"
  },
  {
    institution: "Laurea-ammattikorkeakoulu",
    degree: "Business Management",
    period: "2013/08 - 2014/01",
    duration: "Erasmus Internship Program",
    location: "Helsinki, Finland",
    subjects: ["International Business", "Cross-cultural Management", "Nordic Business Culture"],
    type: "Exchange Program"
  },
  {
    institution: "Private Secondary School of IT",
    degree: "Information Technology",
    period: "2008/09 - 2012/06",
    duration: "4 years",
    location: "Prague, Czech Republic",
    subjects: ["Computer Networks", "Computer Graphics", "Programming", "Web Development", "Database Systems", "Operating Systems", "Hardware", "Computer Aided Design"],
    type: "Secondary Education"
  }
];

const volunteerExperience = [
  {
    organization: "指月神社 / 日渡村のコシヒカリ",
    role: "Local Rice Salesman, Gardener, Shrine Maintainer",
    year: "2020",
    location: "島根県吉賀町 (Family Shrine in Shimane & Gardening in Hiroshima, Japan)",
    description: "Cultural immersion and agricultural work in rural Japan"
  },
  {
    organization: "Bến Thành",
    role: "Voluntary English Teacher",
    year: "2016",
    location: "Sài Gòn (Hồ Chí Minh City), Việt Nam",
    description: "Teaching English to local communities in Vietnam"
  },
  {
    organization: "Kintari Foundation",
    role: "Voluntary English Teacher & Sponsor",
    year: "2015",
    location: "Lombok, Indonesia",
    description: "Educational support and community development in Indonesia"
  }
];

const supportedOrganizations = [
  {
    name: "Scuk.cz",
    description: "Farmer's market e-shop",
    website: "https://www.myjsme.scuk.cz/"
  },
  {
    name: "Plné vědomí",
    description: "Yoga & meditation",
    website: "https://www.plnevedomi.cz/"
  },
  {
    name: "Svobodný přístav",
    description: "'Taxation is theft'",
    website: "https://opristavu.urza.cz/"
  },
  {
    name: "Local Farmers",
    description: "Supporting local businesses and sustainable agriculture"
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Education &
              <span className="text-gradient mx-3">Community</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Formal education, international experiences, and community involvement that shaped my worldview and values.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Formal Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="luxury-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-semibold text-foreground mb-2">
                          {edu.degree}
                        </CardTitle>
                        <div className="text-primary font-medium mb-2">
                          {edu.institution}
                        </div>
                        <Badge variant="secondary" className="mb-3">
                          {edu.type}
                        </Badge>
                      </div>
                      
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 mb-1 md:justify-end">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-1 md:justify-end">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="text-xs opacity-75">
                          {edu.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, subjectIndex) => (
                        <Badge key={subjectIndex} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Volunteer Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Users className="w-6 h-6 text-secondary" />
              Volunteer Experience
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteerExperience.map((vol, index) => (
                <Card key={index} className="luxury-card animate-slide-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-foreground mb-2">
                      {vol.role}
                    </CardTitle>
                    <div className="text-primary font-medium mb-1">
                      {vol.organization}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {vol.year} • {vol.location}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {vol.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Financially Supporting */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Heart className="w-6 h-6 text-accent" />
              Financially Supporting
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {supportedOrganizations.map((org, index) => (
                <Card key={index} className="luxury-card animate-slide-up" style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{org.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{org.description}</p>
                        {org.website && (
                          <a 
                            href={org.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 text-xs transition-colors"
                          >
                            Visit Website →
                          </a>
                        )}
                      </div>
                      <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0 mt-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="text-center mt-16 animate-fade-in">
            <blockquote className="text-xl md:text-2xl font-display text-muted-foreground italic max-w-3xl mx-auto">
              &ldquo;People over-estimate what they can do in a single day and under-estimate what they can do in their whole lives.&rdquo;
            </blockquote>
            <p className="text-sm text-muted-foreground mt-4">
              — Philosophy behind Improvee.io and personal growth approach
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
