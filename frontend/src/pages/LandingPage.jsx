import React from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/image/task.jpg"

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-500">Task</div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="hover:text-blue-500">Features</a>
          <a href="#pricing" className="hover:text-blue-500">Pricing</a>
          <a href="#integrations" className="hover:text-blue-500">Integrations</a>
          <a href="#learn" className="hover:text-blue-500">Learn</a>
          <Link to="/login" className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">Login</Link>
          <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Sign Up</Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 text-center flex-grow">
        <h1 className="text-5xl font-bold mb-6">Making Task Management<br />More Human!</h1>
        <p className="text-xl text-gray-400 mb-8">
          Manage your work, initiatives and team mates all at once, set and<br />
          track progress, expand goals and keep your projects in check.
        </p>
        <div className="space-x-4">
          <Link to="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">Get Started</Link>
          <button className="bg-transparent border border-blue-500 text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white transition">Learn More</button>
        </div>

       
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-blue-500 font-bold mb-2">Task</h3>
              <p className="text-sm text-gray-400">Simplifying task management for teams worldwide.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="text-sm">
                <li><a href="#" className="text-gray-400 hover:text-blue-500">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="text-sm">
                <li><a href="#" className="text-gray-400 hover:text-blue-500">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="font-semibold mb-2">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-gray-400 text-center">
            <p>&copy; 2024 Cubex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;