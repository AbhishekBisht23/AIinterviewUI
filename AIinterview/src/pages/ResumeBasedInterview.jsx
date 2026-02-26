import React, { useState, useEffect } from 'react';
import { FileText, Clock, LogOut, Sparkles, Lightbulb, Bookmark } from 'lucide-react';

const ResumeBasedInterview = () => {
  // 1. Timer Logic (Starts at 1800 seconds / 30 minutes)
  const [secondsLeft, setSecondsLeft] = useState(1800); // 17:45 start point
  
  // 2. Questions State (Dynamic Status)
  const [questions, setQuestions] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      status: i < 5 ? 'answered' : 'unanswered' // Mocking first 5 as answered
    }))
  );
  
  const [currentIdx, setCurrentIdx] = useState(5); // Start on Q6
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Timer Effect ---
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // --- Submit Logic ---
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Mark current question as answered
      const updatedQuestions = [...questions];
      updatedQuestions[currentIdx].status = 'answered';
      setQuestions(updatedQuestions);
      
      setIsSubmitting(false);
      alert("Answer submitted to AI!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0a0b14] text-slate-300 p-6 font-sans">
      
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg"><FileText className="text-white size-5" /></div>
          <div>
            <h1 className="text-white font-semibold text-lg">Resume Interview</h1>
            <p className="text-slate-500 text-xs">Resume_SDE_2025.pdf</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-[#161b30] border border-slate-800 px-4 py-2 rounded-xl flex items-center gap-2 text-cyan-400">
            <Clock size={18} />
            <span className="font-mono font-bold">{formatTime(secondsLeft)}</span>
          </div>
          <button className="flex items-center gap-2 border border-rose-900/50 text-rose-400 px-4 py-2 rounded-xl hover:bg-rose-950/30 transition">
            <LogOut size={18} /> <span className="text-sm">Exit Interview</span>
          </button>
        </div>
      </header>

      <main className="grid grid-cols-12 gap-6">
        
        {/* Sidebar: Dynamic Question Buttons */}
        <section className="col-span-2 bg-[#121421] border border-slate-800/50 rounded-2xl p-5">
          <h3 className="text-white font-medium mb-6">Questions</h3>
          <div className="grid grid-cols-5 gap-3 mb-8">
            {questions.map((q, index) => {
              const isCurrent = currentIdx === index;
              const isAnswered = q.status === 'answered';

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIdx(index)}
                  className={`h-10 w-10 rounded-lg border text-sm flex items-center justify-center transition-all duration-300
                    ${isCurrent 
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-[0_0_20px_rgba(79,70,229,0.6)] scale-110 z-10' 
                      : isAnswered 
                        ? 'border-cyan-500/60 text-cyan-400 bg-cyan-500/5' 
                        : 'border-slate-700 text-slate-500 hover:border-slate-500'}`}
                >
                  {q.id}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="space-y-3 text-[11px] uppercase tracking-wider font-semibold text-slate-500">
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 bg-indigo-600 rounded shadow-[0_0_5px_rgba(79,70,229,1)]" /> Current
            </div>
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 border border-cyan-500 rounded" /> Answered
            </div>
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 border border-slate-700 rounded" /> Not Answered
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="col-span-7 space-y-6">
          <div className="bg-[#121421] border border-slate-800/50 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-500 text-sm font-medium">Question {currentIdx + 1} of 10</span>
              <span className="bg-indigo-900/20 text-indigo-400 text-[10px] px-2 py-1 rounded border border-indigo-500/20 flex items-center gap-1">
                <Sparkles size={12} /> Generated by AI
              </span>
            </div>
            <p className="text-slate-200 text-lg">
              What are your strategies for handling conflict within a team?
            </p>
          </div>

          <div className="bg-[#121421] border border-slate-800/50 rounded-2xl p-6">
            <textarea
              className="w-full bg-[#1a1d2e] border border-slate-800 rounded-xl p-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 min-h-[250px] resize-none"
              placeholder="Type your answer here..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <div className="flex gap-3 mt-6">
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-2.5 rounded-xl transition-all active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Answer"}
              </button>
              <button className="bg-slate-800/50 text-slate-300 px-6 py-2.5 rounded-xl border border-slate-700">Save Answer</button>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="col-span-3 bg-[#121421] border border-slate-800/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
          <div className="bg-[#1a1d2e] p-5 rounded-full mb-4 border border-slate-800 shadow-inner">
            <Lightbulb className="text-slate-600 size-10" />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">AI Feedback</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Submit your answer to receive AI evaluation and personalized feedback.
          </p>
        </section>

      </main>
    </div>
  );
};

export default ResumeBasedInterview;