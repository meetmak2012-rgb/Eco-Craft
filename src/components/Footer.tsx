import React from 'react';
import { Leaf, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-slate-800">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-lg font-display">
              <div className="w-7 h-7 rounded-lg bg-teal-500 text-slate-950 flex items-center justify-center">
                <Leaf className="w-4 h-4" />
              </div>
              <span>EcoCraft Showcase</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Demonstrating the art of the 'Best Out of Waste' through upcycled newspaper pen & pencil stands. Transforming domestic print waste into functional, moisture-sealed desk artifacts.
            </p>
            <div className="text-[11px] text-teal-400 font-medium">
              Teal & Aqua Matte Painted Finish · Square-Base Stack Design
            </div>
          </div>

          {/* Col 2: Specifications */}
          <div className="space-y-2 text-xs">
            <div className="font-semibold text-white uppercase tracking-wider mb-2">
              Specifications
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li>Dimensions: 9 × 9 × 11.5 cm</li>
              <li>Capacity: 25+ Pens & Brushes</li>
              <li>Base: Reinforced Cardboard</li>
              <li>Adhesive: PVA Craft Adhesive</li>
              <li>Finish: Water-based Acrylic & Varnish</li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-2 text-xs">
            <div className="font-semibold text-white uppercase tracking-wider mb-2">
              Sections
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a href="#overview" className="hover:text-teal-400 transition-colors">
                  Overview & Showcase
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-teal-400 transition-colors">
                  Materials & Durability
                </a>
              </li>
              <li>
                <a href="#how-its-made" className="hover:text-teal-400 transition-colors">
                  3-Step Craft Process
                </a>
              </li>
              <li>
                <a href="#eco-calculator" className="hover:text-teal-400 transition-colors">
                  Waste Diverted Calculator
                </a>
              </li>
              <li>
                <a href="#feedback-section" className="hover:text-teal-400 transition-colors">
                  Leave Craft Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} EcoCraft 'Best Out of Waste' Showcase. 100% Recycled & Biodegradable.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
