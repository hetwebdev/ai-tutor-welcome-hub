
import React from 'react';
import { Brain, LineChart, Clock, Users, Shield, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Brain className="h-8 w-8 text-teacher-primary" />,
    title: "Adaptive Learning",
    description: "AI tailors lessons to your learning style, pace, and knowledge gaps"
  },
  {
    icon: <LineChart className="h-8 w-8 text-teacher-primary" />,
    title: "Progress Tracking",
    description: "Detailed analytics on your progress and personalized recommendations"
  },
  {
    icon: <Clock className="h-8 w-8 text-teacher-primary" />,
    title: "Learn Anytime",
    description: "Available 24/7, study whenever fits your schedule without time constraints"
  },
  {
    icon: <Users className="h-8 w-8 text-teacher-primary" />,
    title: "Interactive Sessions",
    description: "Engage in natural conversations and get immediate feedback"
  },
  {
    icon: <Shield className="h-8 w-8 text-teacher-primary" />,
    title: "Safe Learning",
    description: "Curated content and moderated interactions for appropriate learning"
  },
  {
    icon: <Globe className="h-8 w-8 text-teacher-primary" />,
    title: "Multiple Subjects",
    description: "From math and science to languages and arts - all in one platform"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AI Teacher</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform leverages the latest in artificial intelligence to create a learning experience that adapts to each student's needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:border-teacher-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
