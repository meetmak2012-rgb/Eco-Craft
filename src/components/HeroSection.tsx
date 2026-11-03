import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Maximize2, X, Sparkles, MessageSquare } from 'lucide-react';
import { FeaturesGrid } from './FeaturesGrid';

export const HeroSection: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="overview" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      {/* Creative ambient background glow using the craft tones */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/35 via-emerald-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-10 w-80 h-96 rounded-full overflow-hidden opacity-10 blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      >
        <img
          src="/assets/aistudio/image_fec9ae2a.png"
          alt=""
          className="w-full h-full object-cover scale-125"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Column: Narrative, Typography & Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Metadata: clean unboxed text with subtle typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
              <span className="text-teal-700 font-semibold">Best Out of Waste Initiative</span>
              <span aria-hidden="true">·</span>
              <span>Handmade Sustainable Craft</span>
              <span aria-hidden="true">·</span>
              <span>Teal & Aqua Edition</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance font-display">
              EcoCraft: Upcycled Newspaper Desk Organizer
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-balance">
              A handcrafted square-base stack pen & pencil stand fashioned from discarded newspapers and magazines. Blending rock-solid paper roll structural engineering with a radiant teal and aqua painted finish.
            </p>

            {/* Key Highlights (Clean inline presentation, anti-pill discipline) */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/60 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="font-semibold">100% Biodegradable & Recycled</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/60 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="font-semibold">Durable Layered Roll Design</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/60 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="font-semibold">Reduces Daily Paper Waste</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#how-its-made"
                className="px-5 py-3 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Explore 3-Step Process</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#feedback-section"
                className="px-5 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-all shadow-2xs hover:shadow-xs flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-teal-600" />
                <span>Leave Feedback</span>
              </a>
            </div>
          </div>

          {/* Right Column: Creative Background Photo Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Soft ambient back-glow behind photo */}
            <div
              className="absolute -inset-2 bg-teal-500/20 rounded-3xl blur-2xl transform rotate-1 pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Creative Photo Card */}
            <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-3 border border-slate-200/80 shadow-xl shadow-teal-950/10 group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                {/* The actual handcrafted pen stand photograph */}
                <img
                  src="/assets/aistudio/image_fec9ae2a.png"
                  alt="Handcrafted Upcycled Newspaper Pen and Pencil Stand in teal and aqua finish"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                />

                {/* Subtle top tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-semibold text-teal-900 border border-white/60 shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  <span>Real Craft Prototype</span>
                </div>

                {/* Zoom button affordance */}
                <button
                  type="button"
                  onClick={() => setIsZoomed(true)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-colors shadow-xs"
                  aria-label="View full size photo"
                  title="View full size photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Bottom glassmorphic info bar */}
                <div className="absolute inset-x-3 bottom-3 bg-slate-900/80 backdrop-blur-md text-white p-3.5 rounded-xl border border-white/10 shadow-lg">
                  <div className="text-xs font-bold leading-snug">
                    Square-Base Stack Pen & Pencil Stand
                  </div>
                  <div className="text-[11px] text-teal-300 font-medium flex items-center justify-between mt-0.5">
                    <span>Hand-painted Teal/Aqua Finish</span>
                    <span className="text-slate-300">Newspaper Rolls</span>
                  </div>
                </div>
              </div>

              {/* Caption & Authentic Craftsmanship Notice */}
              <div className="px-2 pt-2.5 pb-1 flex items-center justify-between text-[11px] text-slate-500">
                <span>Interlocking rolled paper cylinders</span>
                <span className="font-medium text-teal-800">100% Upcycled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Specifications Grid */}
        <div id="features" className="pt-4">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Materials & Engineering Highlights
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Detailed specifications on durability, materials, waste diversion, and versatile workspace use cases.
            </p>
          </div>
          <FeaturesGrid />
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-2xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src="/assets/aistudio/image_fec9ae2a.png"
              alt="Handcrafted Upcycled Newspaper Pen & Pencil Stand high resolution view"
              className="w-full h-auto max-h-[82vh] object-contain mx-auto"
            />

            <div className="p-4 bg-slate-900 text-white text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-800">
              <div>
                <span className="font-bold">EcoCraft Upcycled Newspaper Desk Organizer</span>
                <span className="text-slate-400 block sm:inline sm:ml-2">
                  Square-base stack design · Teal & Aqua finish with newspaper typography peeking through
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs self-start sm:self-auto transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
