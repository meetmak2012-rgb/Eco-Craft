import React, { useState } from 'react';
import { Calculator, Trees, Trash2, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';

export const EcoCalculator: React.FC = () => {
  const [units, setUnits] = useState<number>(4);

  // Calculations per unit:
  // ~40 newspaper pages per pen stand
  // ~95g virgin plastic saved vs cheap molded plastic desk cup
  // ~260g CO2eq diverted from paper decomposition & plastic manufacture
  const pagesSaved = units * 40;
  const plasticAvoidedGrams = units * 95;
  const co2SavedGrams = units * 260;

  return (
    <section id="eco-calculator" className="py-12 bg-slate-100/60 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Interactive Slider */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1 rounded-md">
                <Calculator className="w-3.5 h-3.5 text-teal-600" />
                <span>Impact Assessment</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Upcycling Footprint Calculator
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                See what happens when offices, classrooms, and craft hobbyists choose upcycled paper stands over mass-produced plastic organizers.
              </p>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="unit-slider" className="text-xs font-semibold text-slate-700">
                    Units Handcrafted / Adopted:
                  </label>
                  <span className="text-lg font-bold text-teal-700 font-mono tabular-nums">
                    {units} {units === 1 ? 'Stand' : 'Stands'}
                  </span>
                </div>

                <input
                  id="unit-slider"
                  type="range"
                  min="1"
                  max="50"
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                />

                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>1 unit (Personal Desk)</span>
                  <span>25 units (Classroom)</span>
                  <span>50 units (Office Floor)</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Calculations derived from EPA municipal solid waste & paper recycling metrics.</span>
              </div>
            </div>

            {/* Right Column: Key Ecological Metrics */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Metric 1 */}
              <div className="bg-gradient-to-b from-teal-50/60 to-white p-5 rounded-2xl border border-teal-100/80 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-3">
                    <Trash2 className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-teal-800 font-mono tabular-nums mb-1">
                    {pagesSaved.toLocaleString()}
                  </div>
                  <div className="text-xs font-bold text-slate-800 mb-1">
                    Newspaper Pages Diverted
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-100">
                  Equivalent to ~{(pagesSaved / 20).toFixed(1)} full multi-section Sunday newspaper editions kept out of landfills.
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-gradient-to-b from-emerald-50/60 to-white p-5 rounded-2xl border border-emerald-100/80 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-800 font-mono tabular-nums mb-1">
                    {(plasticAvoidedGrams / 1000).toFixed(2)} kg
                  </div>
                  <div className="text-xs font-bold text-slate-800 mb-1">
                    Virgin Plastic Prevented
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-100">
                  Avoids polypropylene and ABS injection molding that takes 450+ years to break down.
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-gradient-to-b from-cyan-50/60 to-white p-5 rounded-2xl border border-cyan-100/80 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-3">
                    <Trees className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-800 font-mono tabular-nums mb-1">
                    {(co2SavedGrams / 1000).toFixed(2)} kg
                  </div>
                  <div className="text-xs font-bold text-slate-800 mb-1">
                    Net CO₂ Emissions Saved
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-100">
                  Carbon offset generated across paper recovery and avoided fossil fuel processing.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
