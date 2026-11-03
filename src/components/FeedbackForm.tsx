import React, { useState } from 'react';
import { Star, Send, CheckCircle2, MessageSquare, AlertCircle, Heart, Sparkles, X } from 'lucide-react';
import { Review } from '../types';

interface FeedbackFormProps {
  onSubmitReview: (review: Review) => void;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmitReview }) => {
  const [fullName, setFullName] = useState('');
  const [starRating, setStarRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [usabilityRating, setUsabilityRating] = useState<string>('5/5 - Ergonomic & Highly Sturdy');
  const [comment, setComment] = useState('');
  const [wantsToMake, setWantsToMake] = useState<boolean>(true);

  // Validation & UI states
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedReview, setConfirmedReview] = useState<Review | null>(null);

  const starLabels: { [key: number]: string } = {
    1: '1 Star · Needs Significant Improvement',
    2: '2 Stars · Fair Concept, Needs Work',
    3: '3 Stars · Good Sustainable Craft',
    4: '4 Stars · Great Design & Rigidity',
    5: '5 Stars · Exceptional Eco-Craftsmanship',
  };

  const usabilityOptions = [
    '5/5 - Ergonomic & Highly Sturdy',
    '4/5 - Very Practical Desk Tool',
    '3/5 - Adequate Everyday Utility',
    '2/5 - Needs Refined Tube Tightness',
    '1/5 - Low Stability',
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }
    if (!comment.trim()) {
      newErrors.comment = 'Please share your thoughts or suggestions.';
    } else if (comment.trim().length < 10) {
      newErrors.comment = 'Please provide at least 10 characters of feedback.';
    }
    if (starRating < 1 || starRating > 5) {
      newErrors.starRating = 'Please choose a star rating from 1 to 5.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Client-side simulation of processing
    setTimeout(() => {
      const newReview: Review = {
        id: 'rev_' + Date.now(),
        fullName: fullName.trim(),
        starRating,
        usabilityRating,
        comment: comment.trim(),
        wantsToMake,
        createdAt: 'Just now',
        isUserSubmitted: true,
      };

      onSubmitReview(newReview);
      setConfirmedReview(newReview);
      setIsSubmitting(false);
      setShowConfirmation(true);

      // Reset form
      setFullName('');
      setStarRating(5);
      setUsabilityRating('5/5 - Ergonomic & Highly Sturdy');
      setComment('');
      setErrors({});
    }, 400);
  };

  return (
    <section id="feedback-section" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-md mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-teal-600" />
            <span>Interactive Craft Review</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Share Your Feedback & Suggestions
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Have you tested the square-base stack or tried rolling newspaper tubes? Tell us what you think about the finish, stability, or how we can make the upcycling instructions even better.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md shadow-slate-200/40 p-6 sm:p-10 relative">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="full-name"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="full-name"
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                }}
                placeholder="e.g. Maya Lin"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                    : 'border-slate-200 focus:border-teal-600 focus:ring-teal-100'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Row 2: Star Rating (1 to 5 stars) */}
            <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Star Rating (1 to 5 Stars) <span className="text-rose-500">*</span>
                </label>
                <span className="text-xs font-semibold text-teal-800">
                  {starLabels[hoverRating || starRating]}
                </span>
              </div>

              <div className="flex items-center gap-1.5 pt-1">
                {[1, 2, 3, 4, 5].map((star) => {
                  const isFilled = star <= (hoverRating || starRating);
                  return (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setStarRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="p-1 rounded-lg text-slate-300 hover:scale-115 transition-transform focus:outline-none focus:ring-2 focus:ring-teal-500"
                      aria-label={`Rate ${star} out of 5 stars`}
                    >
                      <Star
                        className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                          isFilled
                            ? 'text-amber-400 fill-amber-400 drop-shadow-xs'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 3: Usability / Design Rating */}
            <div>
              <label
                htmlFor="usability-select"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Usability & Design Rating <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {usabilityOptions.map((opt) => {
                  const isSelected = usabilityRating === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setUsabilityRating(opt)}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-medium text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/80 text-teal-900 font-semibold shadow-xs'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 4: Comments / Suggestions Text Box */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="comments"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider"
                >
                  Comments / Suggestions <span className="text-rose-500">*</span>
                </label>
                <span className="text-[11px] text-slate-400">
                  {comment.length} / 500 characters
                </span>
              </div>
              <textarea
                id="comments"
                rows={4}
                maxLength={500}
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                  if (errors.comment) setErrors((prev) => ({ ...prev, comment: '' }));
                }}
                placeholder="What did you like about the square-base stack? How does the teal/aqua finish look? Any ideas for alternative materials or base reinforcement?"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.comment
                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                    : 'border-slate-200 focus:border-teal-600 focus:ring-teal-100'
                }`}
              />
              {errors.comment && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.comment}</span>
                </p>
              )}
            </div>

            {/* Checkbox: DIY Interest */}
            <div className="flex items-center gap-2.5 pt-1">
              <input
                id="diy-interest"
                type="checkbox"
                checked={wantsToMake}
                onChange={(e) => setWantsToMake(e.target.checked)}
                className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 border-slate-300 cursor-pointer"
              />
              <label
                htmlFor="diy-interest"
                className="text-xs text-slate-600 select-none cursor-pointer"
              >
                I want to try handcrafting this desk organizer at home using old newspapers.
              </label>
            </div>

            {/* Submit Button with Hover Effects */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg hover:shadow-teal-600/20 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting Your Feedback...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    <span>Submit Craft Review</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Client-Side JavaScript Confirmation Modal */}
      {showConfirmation && confirmedReview && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-teal-200 relative animate-in zoom-in-95 duration-150">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowConfirmation(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close confirmation"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Confirmation Visual */}
            <div className="text-center mb-5">
              <div className="w-14 h-14 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Review Successfully Recorded!</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Thank You, {confirmedReview.fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Your feedback has been verified and added to the community showcase feed below.
              </p>
            </div>

            {/* Review Summary Card */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-6 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">Rating Given:</span>
                <div className="flex items-center gap-0.5 text-amber-500">
                  {Array.from({ length: confirmedReview.starRating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">Usability Score:</span>
                <span className="text-teal-800 font-medium">{confirmedReview.usabilityRating}</span>
              </div>

              <div className="text-xs pt-2 border-t border-slate-200/60">
                <span className="font-semibold text-slate-700 block mb-1">Your Comment:</span>
                <p className="text-slate-600 italic bg-white p-2.5 rounded-lg border border-slate-100">
                  "{confirmedReview.comment}"
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowConfirmation(false);
                  const el = document.getElementById('community-reviews');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:flex-1 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
              >
                View in Community Feed
              </button>
              <button
                type="button"
                onClick={() => setShowConfirmation(false)}
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
