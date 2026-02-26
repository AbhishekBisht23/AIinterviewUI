import React from 'react';
import { FileText, Github, Code, BookOpen, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InterviewSelection = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white p-8 font-sans">
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-6xl mx-auto pt-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Choose Your Interview Mode</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Select how you want to practice today. Each mode is powered by AI and tailored to your growth.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Resume-Based Interview (Active State) */}
          <div className= "relative p-8 rounded-2xl bg-[#161b33]/40 border border-white/5 hover:border-white/20 flex flex-col transition-all">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-gradient-to-r from-purple-500 to-blue-500 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> AI Powered
            </div>
            <div className="mb-6 p-3 bg-[#1e2548] rounded-xl w-fit">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Resume-Based Interview</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
              Upload your resume and get dynamically generated questions based on your skills and experience.
            </p>
            <button onClick={()=>navigate("/resumeuploadpage")} className="w-full py-3 rounded-xl font-medium bg-[#2a2f4c] text-gray-300 hover:bg-[#343a5e] flex items-center justify-center gap-2 transition-all">
              Start <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 2. GitHub Repository Analysis */}
          <div className="relative p-8 rounded-2xl bg-[#161b33]/40 border border-white/5 hover:border-white/20 flex flex-col transition-all">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-gradient-to-r from-purple-500 to-blue-500 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> AI Powered
            </div>
            <div className="mb-6 p-3 bg-[#1e2548] rounded-xl w-fit">
              <Github className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">GitHub Repository Analysis</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
              AI analyzes your GitHub projects and asks technical questions based on your code and contributions.
            </p>
            <button onClick={()=>navigate("")} className="w-full py-3 rounded-xl font-medium bg-[#2a2f4c] text-gray-300 hover:bg-[#343a5e] flex items-center justify-center gap-2 transition-all">
              Start <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3. Coding Questions Round */}
          <div className="p-8 rounded-2xl bg-[#161b33]/40 border border-white/5 hover:border-white/20 flex flex-col transition-all">
            <div className="mb-6 p-3 bg-[#1e2548] rounded-xl w-fit">
              <Code className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Coding Questions Round</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
              Solve real-world coding problems under timed conditions with AI evaluation.
            </p>
            <button onClick={()=>navigate("")} className="w-full py-3 rounded-xl font-medium bg-[#2a2f4c] text-gray-300 hover:bg-[#343a5e] flex items-center justify-center gap-2 transition-all">
              Start <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4. CS Core Questionnaire */}
          <div className="p-8 rounded-2xl bg-[#161b33]/40 border border-white/5 hover:border-white/20 flex flex-col transition-all">
            <div className="mb-6 p-3 bg-[#1e2548] rounded-xl w-fit">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">CS Core Questionnaire</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
              Test your knowledge in Operating Systems, DBMS, CN, OOPS, and System Design.
            </p>
            <button onClick={()=>navigate("")} className="w-full py-3 rounded-xl font-medium bg-[#2a2f4c] text-gray-300 hover:bg-[#343a5e] flex items-center justify-center gap-2 transition-all">
              Start <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 5. Contest Mode */}
          <div className="relative p-8 rounded-2xl bg-[#161b33]/40 border border-white/5 hover:border-white/20 flex flex-col transition-all">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-gradient-to-r from-orange-500 to-red-600 flex items-center gap-1">
              Competitive
            </div>
            <div className="mb-6 p-3 bg-[#1e2548] rounded-xl w-fit">
              <Trophy className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Contest Mode</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
              Compete in a 4-hour mock contest and track your position on the live leaderboard.
            </p>
            <button onClick={()=>navigate("")} className="w-full py-3 rounded-xl font-medium bg-[#2a2f4c] text-gray-300 hover:bg-[#343a5e] flex items-center justify-center gap-2 transition-all">
              Start <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InterviewSelection;