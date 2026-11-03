import React from 'react';
import { Leaf, MessageSquare } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single element Brand Wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shadow-xs group-hover:bg-teal-700 transition-colors">
            <Leaf className="w-4 h-4" />
          </div>
          <span className="font-display">EcoCraft</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href="#overview"
            className="hover:text-teal-800 transition-colors whitespace-nowrap shrink-0"
          >
            Overview
          </a>
          <a
            href="#features"
            className="hover:text-teal-800 transition-colors whitespace-nowrap shrink-0"
          >
            Features & Materials
          </a>
          <a
            href="#how-its-made"
            className="hover:text-teal-800 transition-colors whitespace-nowrap shrink-0"
          >
            How It’s Made
          </a>
          <a
            href="#eco-calculator"
            className="hover:text-teal-800 transition-colors whitespace-nowrap shrink-0"
          >
            Eco Impact
          </a>
          <a
            href="#feedback-section"
            className="hover:text-teal-800 transition-colors whitespace-nowrap shrink-0"
          >
            Feedback
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#feedback-section"
            className="px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Leave Feedback</span>
          </a>
        </div>
      </div>
    </header>
  );
};
