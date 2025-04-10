
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Experience the Future of Learning?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join thousands of students who have already transformed their learning experience with our AI teacher.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="gradient-bg text-white hover:opacity-90 transition-opacity" size="lg">
            <span>Try Demo</span>
            <PlayCircle className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg">
            <span>Join Waitlist</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Limited spots available for early access. Join the waitlist to secure your place.
        </p>
      </div>
    </section>
  );
};

export default CTA;
