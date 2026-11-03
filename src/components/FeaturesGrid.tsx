import React from 'react';
import { Package, Shield, Leaf, Compass, CheckCircle2 } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      id: 'materials',
      icon: Package,
      title: 'Materials Used',
      tagline: 'Pure Post-Consumer Upcycling',
      description:
        'Constructed using discarded daily newspapers and print magazines rolled into tight structural tubes, bonded with non-toxic PVA craft adhesive over a reinforced corrugated cardboard square base.',
      details: [
        'Recycled newsprint & magazines',
        'Non-toxic PVA wood/craft adhesive',
        'Reinforced corrugated cardboard base',
        'Water-based acrylic paint & matte varnish seal',
      ],
      highlight: 'Zero Virgin Plastics',
    },
    {
      id: 'durability',
      icon: Shield,
      title: 'Durable Layered Roll Design',
      tagline: 'Log-Cabin Structural Integrity',
      description:
        'Tightly rolled paper tubes behave like engineered composite dowels. When stacked and cross-laminated layer-by-layer, the walls gain immense compressive strength and withstand accidental desk drops.',
      details: [
        'Square-base stack architecture',
        'Interlocking corner joints distribute load',
        'High tensile strength resists crushing',
        'Accommodates 25+ heavy pens, scissors & tools',
      ],
      highlight: 'Engineered Rigidity',
    },
    {
      id: 'eco-impact',
      icon: Leaf,
      title: '100% Biodegradable & Recycled',
      tagline: 'Closing the Waste Loop',
      description:
        'Transforms single-use paper pulp into years of daily utility. Each unit diverts approximately 40 printed newspaper pages from local waste streams, preventing landfill methane emissions.',
      details: [
        '100% post-consumer discarded paper',
        'Completely biodegradable at lifecycle end',
        'Replaces mass-produced plastic organizers',
        'Low embodied energy hand production',
      ],
      highlight: '~40 Pages Diverted',
    },
    {
      id: 'use-cases',
      icon: Compass,
      title: 'Versatile Everyday Use Cases',
      tagline: 'Clutter-Free Workspaces',
      description:
        'Sized to keep study and work surfaces organized. The square interior compartment holds diverse instruments without toppling or scratching fine desk surfaces.',
      details: [
        'Office pens, rollerballs & highlighters',
        'Artist watercolor brushes & palette knives',
        'Craft scissors, tweezers & cutting styluses',
        'Minimalist home office conversation piece',
      ],
      highlight: 'Universal Organizer',
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feat) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-teal-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-50/80 px-2 py-0.5 rounded-md">
                    {feat.highlight}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-teal-900 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-teal-800/80 font-medium mb-2.5">
                  {feat.tagline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {feat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <ul className="space-y-1.5">
                  {feat.details.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[11px] text-slate-600 flex items-start gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sustainable Craft Guarantee strip */}
      <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-300 uppercase tracking-wider mb-0.5">
            Craft Philosophy
          </div>
          <div className="text-sm font-medium text-slate-100">
            'Best Out of Waste' proves that thoughtful human labor and everyday scrap paper can rival industrial plasticware in beauty and durability.
          </div>
        </div>
        <a
          href="#how-its-made"
          className="whitespace-nowrap shrink-0 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs rounded-xl transition-colors"
        >
          See 3-Step Process
        </a>
      </div>
    </div>
  );
};
