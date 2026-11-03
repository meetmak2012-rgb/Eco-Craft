import React, { useState } from 'react';
import { ArrowRight, Scissors, Layers, Sparkles, Check, BookOpen, Clock, HelpCircle, X } from 'lucide-react';
import { CraftStep } from '../types';

export const HowItsMade: React.FC = () => {
  const [selectedStepModal, setSelectedStepModal] = useState<CraftStep | null>(null);

  const steps: CraftStep[] = [
    {
      stepNumber: '01',
      title: 'Roll Tubes',
      subtitle: 'Precision Diagonal Wrapping',
      description:
        'Cut discarded newspaper sheets into 10cm wide strips. Place a thin 3mm craft skewer or wooden dowel at a 45-degree corner angle. Roll tightly to form dense, hollow cylindrical paper dowels. Seal the final triangular tip with a drop of PVA craft glue.',
      materialsUsed: [
        'Discarded newspaper / magazine sheets',
        '3mm thin wooden skewer or craft dowel',
        'Craft scissors or utility ruler',
        'Standard PVA craft glue',
      ],
      techniqueTip:
        'Rolling at a sharp 45° angle aligns paper grain diagonally, producing high compressive strength rather than floppy tubes.',
      duration: '15-20 mins (makes ~30 tubes)',
    },
    {
      stepNumber: '02',
      title: 'Frame & Layer',
      subtitle: 'Square-Base Interlocking Stack',
      description:
        'Cut a sturdy 9cm × 9cm corrugated cardboard square for the base. Trim rolled paper tubes to uniform 10cm lengths. Glue the first perimeter pair to the base, then stack and cross-weave successive tube layers in alternating perpendicular pairs like log-cabin walls.',
      materialsUsed: [
        '9cm × 9cm recycled cardboard base',
        'Prepared rolled paper tubes (~24-28 tubes)',
        'Heavy craft glue (PVA) applied at corners',
        'Ruler and craft snips',
      ],
      techniqueTip:
        'Apply gentle clamping pressure or rest a light book across the top between layers to guarantee flat, gap-free contact joints.',
      duration: '25-30 mins assembly',
    },
    {
      stepNumber: '03',
      title: 'Paint & Seal',
      subtitle: 'Teal/Aqua Finish & Protective Varnish',
      description:
        'Once the PVA adhesive cures rock-solid, apply an initial white primer coat to mask high-contrast newspaper typography. Follow with two smooth coats of teal & aqua acrylic paint, blending subtle highlights. Seal with two coats of clear non-toxic matte acrylic varnish.',
      materialsUsed: [
        'Teal & Aqua water-based acrylic paint',
        'White craft gesso / acrylic primer',
        'Flat synthetic-bristle craft brushes',
        'Water-based clear matte varnish / sealant',
      ],
      techniqueTip:
        'The acrylic varnish waterproofs the porous paper tubes, preventing humidity warping and ensuring pens slide in smoothly without snagging.',
      duration: '20 mins painting + drying time',
    },
  ];

  return (
    <section id="how-its-made" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-md mb-3">
            <Layers className="w-3.5 h-3.5 text-teal-600" />
            <span>Craft Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
            How It’s Made: The 3-Step Upcycling Blueprint
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
            From discarded morning newspaper to a permanent, rock-solid desk organizer. Follow the mechanical transformation that turns limp paper into structural wood-like timber.
          </p>
        </div>

        {/* 3-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            return (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-teal-300 transition-all p-6 sm:p-7 flex flex-col justify-between relative group"
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-teal-700 font-display">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      {idx === 0 && <Scissors className="w-5 h-5" />}
                      {idx === 1 && <Layers className="w-5 h-5" />}
                      {idx === 2 && <Sparkles className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-teal-800 mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Step Footer Details */}
                <div>
                  <div className="bg-slate-50 rounded-xl p-3 mb-4 border border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span className="font-medium text-slate-700">Estimated Effort:</span>
                    </div>
                    <div className="text-xs text-slate-600 font-medium pl-5">
                      {step.duration}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedStepModal(step)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-teal-800 bg-teal-50/70 hover:bg-teal-100 rounded-xl transition-colors group-hover:bg-teal-600 group-hover:text-white"
                  >
                    <span>View Recipe & Pro Tips</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Connector Flow Banner */}
        <div className="mt-8 bg-white border border-teal-100 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Want to recreate this in your classroom or home workshop?
              </div>
              <div className="text-xs text-slate-500">
                Requires standard household craft supplies: old newspapers, PVA white glue, cardboard, and non-toxic paint.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500 hidden sm:inline">
              Sequence Flow:
            </span>
            <div className="flex items-center gap-1 text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200">
              <span>Roll tubes</span>
              <span className="text-teal-400">→</span>
              <span>Frame & Layer</span>
              <span className="text-teal-400">→</span>
              <span>Paint & Seal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedStepModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedStepModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedStepModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
              <span>Step {selectedStepModal.stepNumber} Deep Dive</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {selectedStepModal.title}: {selectedStepModal.subtitle}
            </h3>
            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              {selectedStepModal.description}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Materials & Tools Needed
                </h4>
                <ul className="space-y-1.5">
                  {selectedStepModal.materialsUsed.map((mat, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-teal-50/80 rounded-xl p-3.5 border border-teal-100">
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal-900 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                  <span>Artisan's Secret Tip</span>
                </div>
                <p className="text-xs text-teal-800 leading-relaxed">
                  {selectedStepModal.techniqueTip}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedStepModal(null)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors"
            >
              Close Recipe View
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
