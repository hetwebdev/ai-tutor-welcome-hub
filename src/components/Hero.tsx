
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Learn Faster with <span className="gradient-text">AI-Powered</span> Education
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Personalized learning experience tailored to your pace and style. Our AI teacher adapts to how you learn best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="gradient-bg text-white hover:opacity-90 transition-opacity" size="lg">
              <span>Try Demo</span>
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              <span>Join Waitlist</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card required. Free 7-day trial.</p>
        </div>
        
        <div className="relative animate-fade-up delay-100 hidden md:block">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-teacher-primary to-teacher-secondary opacity-30 blur"></div>
          <div className="relative overflow-hidden rounded-2xl bg-white p-2">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="AI Teacher in action" 
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
