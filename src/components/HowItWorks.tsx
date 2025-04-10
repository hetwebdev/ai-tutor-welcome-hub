
import React from 'react';
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account in seconds and tell us about your learning goals"
  },
  {
    number: "02",
    title: "Assessment",
    description: "Take a quick assessment so our AI can understand your current knowledge level"
  },
  {
    number: "03",
    title: "Personalized Plan",
    description: "Receive a customized learning plan tailored to your needs and goals"
  },
  {
    number: "04",
    title: "Start Learning",
    description: "Begin your lessons with your AI teacher that adapts as you progress"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How AI Teacher Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and experience the future of education
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="p-6 bg-teacher-light rounded-lg">
                <div className="text-5xl font-bold text-teacher-primary/30 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-teacher-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-teacher-primary/10 to-teacher-secondary/10 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to transform how you learn?</h3>
              <p className="text-gray-600 mb-6">
                Our AI teacher is designed to help you master any subject at your own pace with personalized guidance.
              </p>
              <ul className="space-y-2">
                {["Personalized feedback", "Adaptive curriculum", "24/7 availability", "Progress tracking"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-teacher-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-teacher-primary to-teacher-secondary opacity-30 blur"></div>
              <div className="relative overflow-hidden rounded-2xl bg-white p-2">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Student learning with AI" 
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
