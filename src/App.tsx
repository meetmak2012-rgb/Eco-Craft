import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItsMade } from './components/HowItsMade';
import { EcoCalculator } from './components/EcoCalculator';
import { FeedbackForm } from './components/FeedbackForm';
import { ReviewsList } from './components/ReviewsList';
import { Footer } from './components/Footer';
import { Review } from './types';

export default function App() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('ecocraft_reviews');
      if (saved) {
        const parsed: Review[] = JSON.parse(saved);
        // Only keep reviews submitted by user
        return parsed.filter((r) => r.isUserSubmitted);
      }
    } catch {
      // ignore
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('ecocraft_reviews', JSON.stringify(reviews));
    } catch {
      // ignore
    }
  }, [reviews]);

  const handleAddReview = (newReview: Review) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero & Information Section with Showcase Alongside Features Grid */}
        <HeroSection />

        {/* 3-Step 'How It's Made' Visual Breakdown */}
        <HowItsMade />

        {/* Interactive Upcycling Footprint Calculator */}
        <EcoCalculator />

        {/* Interactive Feedback Form */}
        <FeedbackForm onSubmitReview={handleAddReview} />

        {/* Live Community Reviews Display */}
        <ReviewsList reviews={reviews} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
