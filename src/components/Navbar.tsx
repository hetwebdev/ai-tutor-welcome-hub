
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="py-4 px-6 md:px-10 flex items-center justify-between bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold gradient-text">AITeacher</h1>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="font-medium text-gray-600 hover:text-teacher-primary transition-colors">Features</a>
        <a href="#how-it-works" className="font-medium text-gray-600 hover:text-teacher-primary transition-colors">How It Works</a>
        <a href="#testimonials" className="font-medium text-gray-600 hover:text-teacher-primary transition-colors">Testimonials</a>
      </div>
      
      <div className="hidden md:block">
        <Button variant="outline" className="mr-4">Log In</Button>
      </div>
      
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </Button>
      </div>
      
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="font-medium text-gray-600 hover:text-teacher-primary transition-colors">Features</a>
            <a href="#how-it-works" className="font-medium text-gray-600 hover:text-teacher-primary transition-colors">How It Works</a>
            <a href="#testimonials" className="font-medium text-gray-600 hover:text-teacher-primary transition-colors">Testimonials</a>
            <Button variant="outline" className="w-full">Log In</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
