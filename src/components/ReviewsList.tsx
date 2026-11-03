import React, { useState } from 'react';
import { Star, MessageSquare, ThumbsUp, Filter, Sparkles, User } from 'lucide-react';
import { Review } from '../types';

interface ReviewsListProps {
  reviews: Review[];
}

export const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  const filtered = reviews.filter((r) => {
    if (filterRating === 'all') return true;
    return r.starRating === filterRating;
  });

  if (reviews.length === 0) {
    return null;
  }

  const avgRating = (
    reviews.reduce((acc, r) => acc + r.starRating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section id="community-reviews" className="py-12 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Summary Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-md mb-2">
              <MessageSquare className="w-3.5 h-3.5 text-teal-600" />
              <span>Submitted Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Community Reviews
            </h2>
          </div>

          {/* Rating aggregate and filter bar */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
              <span className="text-lg font-bold text-slate-900 font-mono tabular-nums">
                {avgRating}
              </span>
              <span className="text-xs text-slate-500">
                ({reviews.length} reviews)
              </span>
            </div>

            {/* Filter buttons (Interactive filter controls allowed) */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => setFilterRating('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filterRating === 'all'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setFilterRating(5)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filterRating === 5
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                5 Stars
              </button>
              <button
                type="button"
                onClick={() => setFilterRating(4)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filterRating === 4
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                4 Stars
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((rev) => (
            <div
              key={rev.id}
              className={`rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                rev.isUserSubmitted
                  ? 'bg-gradient-to-b from-teal-50/50 to-white border-teal-300 shadow-md ring-1 ring-teal-200'
                  : 'bg-white border-slate-200/80 shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                {/* Header: User & Rating */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs uppercase">
                      {rev.fullName.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span>{rev.fullName}</span>
                        {rev.isUserSubmitted && (
                          <span className="text-[10px] text-teal-800 bg-teal-100 px-1.5 py-0.2 rounded font-semibold">
                            Your Review
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {rev.createdAt}
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.starRating ? 'fill-amber-400' : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Usability Tag */}
                <div className="text-[11px] font-medium text-teal-800 bg-teal-50/80 px-2.5 py-1 rounded-md mb-2.5 inline-block">
                  {rev.usabilityRating}
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* Footer status */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>{rev.wantsToMake ? '✓ Planning to DIY at home' : 'Reviewed showcase'}</span>
                <span className="text-slate-400">Verified Craft Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
