import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Trophy, 
  Zap, 
  AlertTriangle, 
  Lightbulb, 
  TrendingUp, 
  ArrowLeft, 
  RefreshCcw 
} from 'lucide-react';

// --- REUSABLE COMPONENTS ---

const ScoreCard = ({ title, score, colorClass }) => (
  <div className="bg-[#f5f2e6] border-2 border-[#1b3022] p-5 shadow-[4px_4px_0px_#1b3022]">
    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#5a7d64] mb-2">{title}</h4>
    <div className="flex items-end gap-2 mb-3">
      <span className="text-2xl font-black text-[#1b3022] leading-none">{score}</span>
      <span className="text-[10px] font-bold text-[#1b3022]/40 pb-1">/ 10</span>
    </div>
    <div className="w-full h-1.5 bg-[#1b3022]/10 border border-[#1b3022]/20">
      <div 
        className={`h-full ${colorClass} transition-all duration-1000`} 
        style={{ width: `${(score / 10) * 100}%` }}
      />
    </div>
  </div>
);

const FeedbackList = ({ title, items, icon: Icon, theme }) => (
  <div className={`p-6 border-2 border-[#1b3022] shadow-[6px_6px_0px_#1b3022] ${theme === 'dark' ? 'bg-[#1b3022] text-[#fcfaf2]' : 'bg-[#fcfaf2]'}`}>
    <div className="flex items-center gap-2 mb-4">
      <Icon className={`w-5 h-5 ${theme === 'dark' ? 'text-[#fcfaf2]' : 'text-[#2d4f39]'}`} />
      <h3 className="text-sm font-black uppercase tracking-widest">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-3 text-[11px] font-medium leading-relaxed uppercase tracking-tighter">
          <span className={`mt-1.5 w-1.5 h-1.5 shrink-0 ${theme === 'dark' ? 'bg-[#fcfaf2]' : 'bg-[#1b3022]'}`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// --- MAIN PAGE COMPONENT ---

const InterviewResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Dummy Data Fallback
  const resultData = useMemo(() => {
    return location.state || {
      overallScore: 7.8,
      technicalScore: 8.2,
      communicationScore: 7.5,
      behavioralScore: 7.2,
      strengths: [
        "Strong grasp of React Hooks and State management",
        "Clear articulation of complex technical architectural decisions",
        "Maintainted high confidence during pressure-testing questions"
      ],
      improvements: [
        "Optimize explanation of System Design scalability patterns",
        "Reduce filler words during behavioral storytelling",
        "Better time management for coding challenges"
      ],
      suggestions: [
        "Practice the STAR method specifically for conflict-resolution questions.",
        "Review Low-Level Design (LLD) principles for SOLID compliance.",
        "Engage in more mock sessions focusing on 'What if' scenarios."
      ],
      previousScore: 6.9
    };
  }, [location.state]);

  const getStatusBadge = (score) => {
    if (score >= 8) return { text: "Excellent", class: "bg-[#2d4f39] text-[#fcfaf2]" };
    if (score >= 6) return { text: "Good", class: "bg-[#1b3022] text-[#fcfaf2]" };
    return { text: "Needs Improvement", class: "bg-red-700 text-white" };
  };

  const status = getStatusBadge(resultData.overallScore);

  return (
    <div className="min-h-screen bg-[#fcfaf2] text-[#1b3022] p-8 selection:bg-[#2d4f39]/20 font-['Rubik']">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap');
          .rubik-heading { font-family: 'Rubik', sans-serif; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; }
        `}
      </style>

      <div className="max-w-5xl mx-auto pt-10">
        
        {/* 1. Header Section */}
        <header className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-[#2d4f39]/5 blur-[80px] -z-10" />
          <h1 className="text-4xl md:text-6xl rubik-heading lowercase mb-4">
            ai interview <span className="text-transparent border-b-4 border-[#1b3022] [-webkit-text-stroke:0.5px_#1b3022]">feedback</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5a7d64]">
            Neural performance analysis // system extraction active
          </p>
        </header>

        {/* 2. Hero Overall Score Section */}
        <div className="bg-[#f5f2e6] border-4 border-[#1b3022] p-10 shadow-[12px_12px_0px_#1b3022] mb-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 bg-[#1b3022] text-[#fcfaf2] px-3 py-1 text-[8px] font-black uppercase">
            result matrix // 001
          </div>
          
          <div className="inline-block relative mb-6">
             {/* Circular Progress Placeholder / Concept */}
            <div className="w-32 h-32 border-8 border-[#1b3022] rounded-full flex items-center justify-center bg-[#fcfaf2]">
              <span className="text-3xl font-black">{resultData.overallScore}</span>
            </div>
          </div>

          <h2 className="text-5xl font-black mb-4 rubik-heading leading-none">
            {resultData.overallScore} <span className="text-lg opacity-40">/ 10</span>
          </h2>
          <div className={`inline-block px-4 py-1 text-[10px] font-black uppercase tracking-widest ${status.class}`}>
            {status.text}
          </div>
        </div>

        {/* 3. Section-wise Scores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <ScoreCard title="Technical Skills" score={resultData.technicalScore} colorClass="bg-[#1b3022]" />
          <ScoreCard title="Communication" score={resultData.communicationScore} colorClass="bg-[#2d4f39]" />
          <ScoreCard title="Behavioral" score={resultData.behavioralScore} colorClass="bg-[#5a7d64]" />
        </div>

        {/* 4. Strengths & Improvements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FeedbackList 
            title="Core Strengths" 
            items={resultData.strengths} 
            icon={Zap} 
            theme="light" 
          />
          <FeedbackList 
            title="Improvement Nodes" 
            items={resultData.improvements} 
            icon={AlertTriangle} 
            theme="dark" 
          />
        </div>

        {/* 5. AI Suggestions & Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-[#fcfaf2] border-4 border-[#1b3022] p-8 shadow-[8px_8px_0px_#d4d0b8]">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-[#1b3022]" />
              <h3 className="text-lg font-black rubik-heading">Suggested Improvement Plan</h3>
            </div>
            <div className="bg-[#1b3022] text-[#fcfaf2] p-4 mb-6 border-l-8 border-[#2d4f39]">
               <p className="text-[11px] font-bold uppercase tracking-tight italic">
                 "Automated roadmap generated based on current session discrepancies."
               </p>
            </div>
            <div className="space-y-4">
              {resultData.suggestions.map((s, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 border-b border-[#1b3022]/10 last:border-0">
                  <span className="text-xl font-black opacity-20">{idx + 1}</span>
                  <p className="text-xs font-semibold uppercase leading-tight pt-1">{s}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f5f2e6] border-2 border-[#1b3022] p-6 flex flex-col justify-center text-center">
            <TrendingUp className="w-8 h-8 text-[#2d4f39] mx-auto mb-4" />
            <h4 className="text-[10px] font-black uppercase text-[#5a7d64] mb-2 tracking-widest">Growth Delta</h4>
            <div className="text-3xl font-black text-[#1b3022] mb-1">
              +{((resultData.overallScore - resultData.previousScore)).toFixed(1)}
            </div>
            <p className="text-[9px] font-bold text-[#1b3022]/60 uppercase mb-6">Since last session ({resultData.previousScore})</p>
            
            {/* Mini Line Chart Placeholder */}
            <div className="h-16 flex items-end gap-1 px-4">
              {[30, 45, 35, 60, 50, 85].map((h, i) => (
                <div key={i} className="flex-1 bg-[#1b3022]" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>

        {/* 6. Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
          <button 
            onClick={() => navigate("/interviewselection")}
            className="group relative bg-[#1b3022] text-[#fcfaf2] px-10 py-4 font-black text-xs uppercase tracking-[0.2em] shadow-[8px_8px_0px_#d4d0b8] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3"
          >
            <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            Retake Interview
          </button>
          
          <button 
            onClick={() => navigate("/")}
            className="border-4 border-[#1b3022] text-[#1b3022] px-10 py-4 font-black text-xs uppercase tracking-[0.2em] hover:bg-[#1b3022] hover:text-[#fcfaf2] transition-all flex items-center justify-center gap-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Exit to Dashboard
          </button>
        </div>

      </div>

      {/* Footer System Info */}
      <footer className="max-w-5xl mx-auto py-10 border-t border-[#1b3022]/10 flex justify-between items-center opacity-40 text-[9px] font-black uppercase tracking-[0.3em]">
        <span>Report // Node_29X</span>
        <span>Neural Feedback System v4.2</span>
      </footer>
    </div>
  );
};

export default InterviewResultPage;