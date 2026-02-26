// import React from 'react';
// import { FileText, Github, Code, BookOpen, Trophy, ArrowRight, Sparkles } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const InterviewSelection = () => {
//     const navigate = useNavigate();
//   return (
//     <div className="min-h-screen bg-[#0a0b1e] text-white p-8 font-sans">
//       {/* Background Ambient Glows */}
//       <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full -z-10" />
      
//       <div className="max-w-6xl mx-auto pt-16">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold mb-6 tracking-tight">Choose Your Interview Mode</h1>
//           <p className="text-gray-400 max-w-xl mx-auto">
//             Select how you want to practice today. Each mode is powered by AI and tailored to your growth.
//           </p>
//         </div>

//         {/* Grid Container */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
//           {/* 1. Resume-Based Interview (Active State) */}
//           <div className= "relative p-8 rounded-2xl bg-[#161b33]/40 border border-white/5 hover:border-white/20 flex flex-col transition-all">
//             <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-gradient-to-r from-purple-500 to-blue-500 flex items-center gap-1">
//               <Sparkles className="w-3 h-3" /> AI Powered
//             </div>
//             <div className="mb-6 p-3 bg-[#1e2548] rounded-xl w-fit">
//               <FileText className="w-6 h-6 text-blue-400" />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Resume-Based Interview</h3>
//             <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
//               Upload your resume and get dynamically generated questions based on your skills and experience.
//             </p>
//             <button onClick={()=>navigate("/resumeuploadpage")} className="w-full py-3 rounded-xl font-medium bg-[#2a2f4c] text-gray-300 hover:bg-[#343a5e] flex items-center justify-center gap-2 transition-all">
//               Start <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>

//           {/* 2. GitHub Repository Analysis */}
//           <div className="relative p-8 rounded-2xl bg-[#161b33]/40 border border-white/5 hover:border-white/20 flex flex-col transition-all">
//             <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-gradient-to-r from-purple-500 to-blue-500 flex items-center gap-1">
//               <Sparkles className="w-3 h-3" /> AI Powered
//             </div>
//             <div className="mb-6 p-3 bg-[#1e2548] rounded-xl w-fit">
//               <Github className="w-6 h-6 text-blue-400" />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">GitHub Repository Analysis</h3>
//             <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
//               AI analyzes your GitHub projects and asks technical questions based on your code and contributions.
//             </p>
//             <button onClick={()=>navigate("/githubrepopage")} className="w-full py-3 rounded-xl font-medium bg-[#2a2f4c] text-gray-300 hover:bg-[#343a5e] flex items-center justify-center gap-2 transition-all">
//               Start <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>

//           {/* 3. Coding Questions Round */}
//           <div className="p-8 rounded-2xl bg-[#161b33]/40 border border-white/5 hover:border-white/20 flex flex-col transition-all">
//             <div className="mb-6 p-3 bg-[#1e2548] rounded-xl w-fit">
//               <Code className="w-6 h-6 text-blue-400" />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Coding Questions Round</h3>
//             <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
//               Solve real-world coding problems under timed conditions with AI evaluation.
//             </p>
//             <button onClick={()=>navigate("")} className="w-full py-3 rounded-xl font-medium bg-[#2a2f4c] text-gray-300 hover:bg-[#343a5e] flex items-center justify-center gap-2 transition-all">
//               Start <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>

//           {/* 4. CS Core Questionnaire */}
//           <div className="p-8 rounded-2xl bg-[#161b33]/40 border border-white/5 hover:border-white/20 flex flex-col transition-all">
//             <div className="mb-6 p-3 bg-[#1e2548] rounded-xl w-fit">
//               <BookOpen className="w-6 h-6 text-blue-400" />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">CS Core Questionnaire</h3>
//             <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
//               Test your knowledge in Operating Systems, DBMS, CN, OOPS, and System Design.
//             </p>
//             <button onClick={()=>navigate("")} className="w-full py-3 rounded-xl font-medium bg-[#2a2f4c] text-gray-300 hover:bg-[#343a5e] flex items-center justify-center gap-2 transition-all">
//               Start <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>

//           {/* 5. Contest Mode */}
//           <div className="relative p-8 rounded-2xl bg-[#161b33]/40 border border-white/5 hover:border-white/20 flex flex-col transition-all">
//             <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-gradient-to-r from-orange-500 to-red-600 flex items-center gap-1">
//               Competitive
//             </div>
//             <div className="mb-6 p-3 bg-[#1e2548] rounded-xl w-fit">
//               <Trophy className="w-6 h-6 text-blue-400" />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Contest Mode</h3>
//             <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
//               Compete in a 4-hour mock contest and track your position on the live leaderboard.
//             </p>
//             <button onClick={()=>navigate("")}  className="w-full py-3 rounded-xl font-medium bg-[#2a2f4c] text-gray-300 hover:bg-[#343a5e] flex items-center justify-center gap-2 transition-all">
//               Start <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterviewSelection;

import React from 'react';
import { FileText, Github, Code, BookOpen, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InterviewSelection = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#fcfaf2] text-[#1b3022] p-8 selection:bg-[#2d4f39]/20 font-['Rubik']">
      {/* --- RUBIK FONT IMPORT --- */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap');
          
          .rubik-heading { 
            font-family: 'Rubik', sans-serif; 
            font-weight: 900; 
            text-transform: uppercase; 
            letter-spacing: -0.02em; 
          }
          
          .rubik-body { 
            font-family: 'Rubik', sans-serif; 
          }
        `}
      </style>

      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#2d4f39]/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-6xl mx-auto pt-12 rubik-body">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 tracking-tight text-[#1b3022] rubik-heading">
            Select Protocol
          </h1>
          <p className="text-[#5a7d64] text-xs font-bold uppercase tracking-widest max-w-xl mx-auto">
            Choose your simulation mode. Powered by machine intelligence.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* 1. Resume-Based Interview */}
          <div className="relative p-6 bg-[#fcfaf2] border border-[#1b3022]/20 hover:border-[#1b3022] flex flex-col transition-all group">
            <div className="absolute top-3 right-3 px-2 py-0.5 text-[8px] font-black uppercase bg-[#2d4f39] text-[#fcfaf2] flex items-center gap-1">
              <Sparkles className="w-2 h-2" /> AI Active
            </div>
            <div className="mb-4 p-3 bg-[#f5f2e6] border border-[#1b3022]/10 w-fit">
              <FileText className="w-5 h-5 text-[#2d4f39]" />
            </div>
            <h3 className="text-lg mb-2 rubik-heading">Resume-Based</h3>
            <p className="text-[#5a7d64] text-[11px] leading-tight mb-6 flex-grow font-medium uppercase tracking-tighter">
              Dynamic question generation based on your background data.
            </p>
            <button onClick={()=>navigate("/resumeuploadpage")} className="w-full py-2 border border-[#1b3022] font-bold text-[10px] uppercase tracking-widest bg-transparent hover:bg-[#1b3022] hover:text-[#fcfaf2] flex items-center justify-center gap-2 transition-all">
              Initialize <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* 2. GitHub Analysis */}
          <div className="relative p-6 bg-[#fcfaf2] border border-[#1b3022]/20 hover:border-[#1b3022] flex flex-col transition-all group">
            <div className="absolute top-3 right-3 px-2 py-0.5 text-[8px] font-black uppercase bg-[#2d4f39] text-[#fcfaf2] flex items-center gap-1">
              <Sparkles className="w-2 h-2" /> AI Active
            </div>
            <div className="mb-4 p-3 bg-[#f5f2e6] border border-[#1b3022]/10 w-fit">
              <Github className="w-5 h-5 text-[#2d4f39]" />
            </div>
            <h3 className="text-lg mb-2 rubik-heading">Repo Analysis</h3>
            <p className="text-[#5a7d64] text-[11px] leading-tight mb-6 flex-grow font-medium uppercase tracking-tighter">
              Codebase extraction and technical contribution review.
            </p>
            <button onClick={()=>navigate("/githubrepopage")} className="w-full py-2 border border-[#1b3022] font-bold text-[10px] uppercase tracking-widest bg-transparent hover:bg-[#1b3022] hover:text-[#fcfaf2] flex items-center justify-center gap-2 transition-all">
              Initialize <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* 3. Coding Round */}
          <div className="p-6 bg-[#fcfaf2] border border-[#1b3022]/20 hover:border-[#1b3022] flex flex-col transition-all group">
            <div className="mb-4 p-3 bg-[#f5f2e6] border border-[#1b3022]/10 w-fit">
              <Code className="w-5 h-5 text-[#2d4f39]" />
            </div>
            <h3 className="text-lg mb-2 rubik-heading">Coding Round</h3>
            <p className="text-[#5a7d64] text-[11px] leading-tight mb-6 flex-grow font-medium uppercase tracking-tighter">
              Solve real-world problems under timed conditions.
            </p>
            <button onClick={()=>navigate("codingbasedpage")} className="w-full py-2 border border-[#1b3022] font-bold text-[10px] uppercase tracking-widest bg-transparent hover:bg-[#1b3022] hover:text-[#fcfaf2] flex items-center justify-center gap-2 transition-all">
              Initialize <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* 4. CS Core */}
          <div className="p-6 bg-[#fcfaf2] border border-[#1b3022]/20 hover:border-[#1b3022] flex flex-col transition-all group">
            <div className="mb-4 p-3 bg-[#f5f2e6] border border-[#1b3022]/10 w-fit">
              <BookOpen className="w-5 h-5 text-[#2d4f39]" />
            </div>
            <h3 className="text-lg mb-2 rubik-heading">Core Systems</h3>
            <p className="text-[#5a7d64] text-[11px] leading-tight mb-6 flex-grow font-medium uppercase tracking-tighter">
              OS, DBMS, CN, and System Design diagnostics.
            </p>
            <button onClick={()=>navigate("")} className="w-full py-2 border border-[#1b3022] font-bold text-[10px] uppercase tracking-widest bg-transparent hover:bg-[#1b3022] hover:text-[#fcfaf2] flex items-center justify-center gap-2 transition-all">
              Initialize <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* 5. Contest Mode */}
          <div className="relative p-6 bg-[#fcfaf2] border border-[#1b3022]/20 hover:border-[#1b3022] flex flex-col transition-all group">
            <div className="absolute top-3 right-3 px-2 py-0.5 text-[8px] font-black uppercase bg-[#8b4513] text-[#fcfaf2] flex items-center gap-1">
              Competitive
            </div>
            <div className="mb-4 p-3 bg-[#f5f2e6] border border-[#1b3022]/10 w-fit">
              <Trophy className="w-5 h-5 text-[#2d4f39]" />
            </div>
            <h3 className="text-lg mb-2 rubik-heading">Arena Mode</h3>
            <p className="text-[#5a7d64] text-[11px] leading-tight mb-6 flex-grow font-medium uppercase tracking-tighter">
              4-hour live contest. Track your rank on the matrix.
            </p>
            <button onClick={()=>navigate("")}  className="w-full py-2 border border-[#1b3022] font-bold text-[10px] uppercase tracking-widest bg-transparent hover:bg-[#1b3022] hover:text-[#fcfaf2] flex items-center justify-center gap-2 transition-all">
              Initialize <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InterviewSelection;