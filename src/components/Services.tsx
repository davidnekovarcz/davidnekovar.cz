"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Palmtree, 
  TrendingUp, 
  Smartphone, 
  Heart, 
  Bitcoin, 
  Gem,
  ArrowRight 
} from "lucide-react";
import investmentsImage from "@/assets/investments.jpg";
import healthyLifestyleImage from "@/assets/healthy-lifestyle.jpg";

const Services = () => {
  const services = [
    {
      id: "lifestyle",
      icon: <Palmtree className="w-8 h-8" />,
      title: "Smart & Healthy Lifestyle",
      description: "Transform your daily routines with smart technology and healthy habits that promote freedom and well-being.",
      image: healthyLifestyleImage,
      features: [
        "Wellness Technology Integration",
        "Smart Home Automation",
        "Healthy Habit Tracking",
        "Work-Life Balance Optimization"
      ],
      gradient: "bg-gradient-sunset"
    },
    {
      id: "investments",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investment Portfolio Growth",
      description: "Build diversified portfolios with cryptocurrency, gold, silver, and other smart investment strategies.",
      image: investmentsImage,
      features: [
        "Crypto Portfolio Management",
        "Precious Metals Investment",
        "Risk Assessment & Strategy",
        "Market Analysis & Insights"
      ],
      gradient: "bg-gradient-ocean"
    },
    {
      id: "technology",
      icon: <Smartphone className="w-8 h-8" />,
      title: "Life-Enhancing Technology",
      description: "Custom technology solutions and projects designed to simplify and enhance your everyday life.",
      image: null,
      features: [
        "Custom App Development",
        "Smart Automation Systems",
        "Productivity Tools",
        "Digital Life Optimization"
      ],
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Path to a 
            <span className="text-gradient ml-3">Smarter Life</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine three powerful pillars to help you achieve true freedom: 
            smart lifestyle choices, strategic investments, and cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-16`}
            >
              {/* Content */}
              <div className="flex-1 space-y-8">
                <div className={`w-16 h-16 rounded-2xl ${service.gradient} flex items-center justify-center text-white shadow-luxury animate-luxury-glow`}>
                  {service.icon}
                </div>
                
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="btn-hero group">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Image/Visual */}
              <div className="flex-1">
                {service.image ? (
                  <div className="relative">
                    <img
                      src={service.image.src}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-elegant"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                ) : (
                  <Card className="luxury-card h-96 flex items-center justify-center">
                    <CardContent className="text-center p-8">
                      <div className={`w-24 h-24 rounded-full ${service.gradient} flex items-center justify-center text-white mx-auto mb-6 animate-float`}>
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-semibold mb-4">Coming Soon</h4>
                      <p className="text-muted-foreground">
                        Revolutionary technology projects in development
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Investment Icons Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-8">Supported Investment Assets</h3>
          <div className="flex items-center justify-center space-x-12">
            <div className="flex flex-col items-center space-y-2">
              <Bitcoin className="w-12 h-12 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Bitcoin & Crypto</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Gem className="w-12 h-12 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Gold & Silver</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Heart className="w-12 h-12 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Wellness Tech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;