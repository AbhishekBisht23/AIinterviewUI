// import React, { useState, useEffect } from 'react';
// import { FileText, Clock, LogOut, Sparkles, Lightbulb, Bookmark } from 'lucide-react';

// const ResumeBasedInterview = () => {
//   // 1. Timer Logic (Starts at 1800 seconds / 30 minutes)
//   const [secondsLeft, setSecondsLeft] = useState(1800); // 17:45 start point
  
//   // 2. Questions State (Dynamic Status)
//   const [questions, setQuestions] = useState(
//     Array.from({ length: 10 }, (_, i) => ({
//       id: i + 1,
//       status: i < 5 ? 'answered' : 'unanswered' // Mocking first 5 as answered
//     }))
//   );
  
//   const [currentIdx, setCurrentIdx] = useState(5); // Start on Q6
//   const [answer, setAnswer] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // --- Timer Effect ---
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   // --- Submit Logic ---
//   const handleSubmit = () => {
//     setIsSubmitting(true);
    
//     // Simulate API delay
//     setTimeout(() => {
//       // Mark current question as answered
//       const updatedQuestions = [...questions];
//       updatedQuestions[currentIdx].status = 'answered';
//       setQuestions(updatedQuestions);
      
//       setIsSubmitting(false);
//       alert("Answer submitted to AI!");
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0b14] text-slate-300 p-6 font-sans">
      
//       {/* Header */}
//       <header className="flex justify-between items-center mb-8">
//         <div className="flex items-center gap-3">
//           <div className="bg-indigo-600 p-2 rounded-lg"><FileText className="text-white size-5" /></div>
//           <div>
//             <h1 className="text-white font-semibold text-lg">Resume Interview</h1>
//             <p className="text-slate-500 text-xs">Resume_SDE_2025.pdf</p>
//           </div>
//         </div>
        
//         <div className="flex items-center gap-4">
//           <div className="bg-[#161b30] border border-slate-800 px-4 py-2 rounded-xl flex items-center gap-2 text-cyan-400">
//             <Clock size={18} />
//             <span className="font-mono font-bold">{formatTime(secondsLeft)}</span>
//           </div>
//           <button className="flex items-center gap-2 border border-rose-900/50 text-rose-400 px-4 py-2 rounded-xl hover:bg-rose-950/30 transition">
//             <LogOut size={18} /> <span className="text-sm">Exit Interview</span>
//           </button>
//         </div>
//       </header>

//       <main className="grid grid-cols-12 gap-6">
        
//         {/* Sidebar: Dynamic Question Buttons */}
//         <section className="col-span-2 bg-[#121421] border border-slate-800/50 rounded-2xl p-5">
//           <h3 className="text-white font-medium mb-6">Questions</h3>
//           <div className="grid grid-cols-5 gap-3 mb-8">
//             {questions.map((q, index) => {
//               const isCurrent = currentIdx === index;
//               const isAnswered = q.status === 'answered';

//               return (
//                 <button
//                   key={q.id}
//                   onClick={() => setCurrentIdx(index)}
//                   className={`h-10 w-10 rounded-lg border text-sm flex items-center justify-center transition-all duration-300
//                     ${isCurrent 
//                       ? 'bg-indigo-600 border-indigo-400 text-white shadow-[0_0_20px_rgba(79,70,229,0.6)] scale-110 z-10' 
//                       : isAnswered 
//                         ? 'border-cyan-500/60 text-cyan-400 bg-cyan-500/5' 
//                         : 'border-slate-700 text-slate-500 hover:border-slate-500'}`}
//                 >
//                   {q.id}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Legend */}
//           <div className="space-y-3 text-[11px] uppercase tracking-wider font-semibold text-slate-500">
//             <div className="flex items-center gap-2">
//                <div className="w-3 h-3 bg-indigo-600 rounded shadow-[0_0_5px_rgba(79,70,229,1)]" /> Current
//             </div>
//             <div className="flex items-center gap-2">
//                <div className="w-3 h-3 border border-cyan-500 rounded" /> Answered
//             </div>
//             <div className="flex items-center gap-2">
//                <div className="w-3 h-3 border border-slate-700 rounded" /> Not Answered
//             </div>
//           </div>
//         </section>

//         {/* Main Content Area */}
//         <section className="col-span-7 space-y-6">
//           <div className="bg-[#121421] border border-slate-800/50 rounded-2xl p-6">
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-slate-500 text-sm font-medium">Question {currentIdx + 1} of 10</span>
//               <span className="bg-indigo-900/20 text-indigo-400 text-[10px] px-2 py-1 rounded border border-indigo-500/20 flex items-center gap-1">
//                 <Sparkles size={12} /> Generated by AI
//               </span>
//             </div>
//             <p className="text-slate-200 text-lg">
//               What are your strategies for handling conflict within a team?
//             </p>
//           </div>

//           <div className="bg-[#121421] border border-slate-800/50 rounded-2xl p-6">
//             <textarea
//               className="w-full bg-[#1a1d2e] border border-slate-800 rounded-xl p-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 min-h-[250px] resize-none"
//               placeholder="Type your answer here..."
//               value={answer}
//               onChange={(e) => setAnswer(e.target.value)}
//             />
//             <div className="flex gap-3 mt-6">
//               <button 
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-2.5 rounded-xl transition-all active:scale-95 disabled:opacity-50"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit Answer"}
//               </button>
//               <button className="bg-slate-800/50 text-slate-300 px-6 py-2.5 rounded-xl border border-slate-700">Save Answer</button>
//             </div>
//           </div>
//         </section>

//         {/* Feedback Section */}
//         <section className="col-span-3 bg-[#121421] border border-slate-800/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
//           <div className="bg-[#1a1d2e] p-5 rounded-full mb-4 border border-slate-800 shadow-inner">
//             <Lightbulb className="text-slate-600 size-10" />
//           </div>
//           <h3 className="text-white font-bold text-lg mb-2">AI Feedback</h3>
//           <p className="text-slate-500 text-sm leading-relaxed">
//             Submit your answer to receive AI evaluation and personalized feedback.
//           </p>
//         </section>

//       </main>
//     </div>
//   );
// };

// export default ResumeBasedInterview;





// import React, { useState, useEffect } from 'react';

// const ResumeBasedInterview = () => {
//     const handlePaste = (e) => {
//   const pastedText = e.clipboardData.getData("text");

//   if (pastedText.length > 500) {
//     alert("Too much content pasted at once!");
//   }
// };
//   // --- States ---
//   const [secondsLeft, setSecondsLeft] = useState(1800); // 17:45
//   const [currentIdx, setCurrentIdx] = useState(5);
//   const [answer, setAnswer] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [questions, setQuestions] = useState(
//     Array.from({ length: 10 }, (_, i) => ({
//       id: i + 1,
//       status: 'unanswered'
//     }))
//   );

//   // --- Simple Timer ---
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (s) => {
//     const mins = Math.floor(s / 60);
//     const secs = s % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   const handleSubmit = () => {
//     setIsSubmitting(true);
//     setTimeout(() => {
//       const updated = [...questions];
//       updated[currentIdx].status = 'answered';
//       setQuestions(updated);
//       setIsSubmitting(false);
//     }, 800);
//   };

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-gray-300 p-8 font-sans">
      
//       {/* Header: Clean & Flat */}
//       <header className="flex justify-between items-center border-b border-slate-800 pb-6 mb-8">
//         <div>
//           <h1 className="text-xl font-bold text-white uppercase tracking-tight">Interview Portal</h1>
//           <p className="text-sm text-slate-500">File: Resume_SDE_2025.pdf</p>
//         </div>
        
//         <div className="flex gap-4 items-center">
//           <div className="text-cyan-500 font-mono text-xl border border-slate-800 px-4 py-1 rounded">
//             {formatTime(secondsLeft)}
//           </div>
//           <button className="text-sm text-red-500 border border-red-900/30 px-3 py-1 rounded hover:bg-red-900/10">
//             Exit
//           </button>
//         </div>
//       </header>

//       <div className="flex gap-8">
        
//         {/* Left: Questions Navigation */}
//         <aside className="w-64 shrink-0">
//           <h2 className="text-xs font-bold text-slate-500 mb-4 uppercase">Select Question</h2>
//           <div className="grid grid-cols-5 gap-2">
//             {questions.map((q, i) => (
//               <button
//                 key={q.id}
//                 onClick={() => setCurrentIdx(i)}
//                 className={`h-10 text-sm font-medium rounded border transition-colors
//                   ${currentIdx === i 
//                     ? 'bg-blue-600 border-blue-600 text-white' 
//                     : q.status === 'answered' 
//                       ? 'border-cyan-600 text-cyan-500 bg-slate-900' 
//                       : 'border-slate-800 text-slate-500 hover:border-slate-600'}`}
//               >
//                 {q.id}
//               </button>
//             ))}
//           </div>
          
//           <div className="mt-8 space-y-2 text-[11px] text-slate-500">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Current
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-cyan-600 rounded-full"></span> Answered
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-slate-800 rounded-full"></span> Not Answered
//             </div>
//           </div>
//         </aside>

//         {/* Center: Content */}
//         <main className="flex-1 space-y-6">
//           {/* Question Box */}
//           <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg">
//             <span className="text-xs text-slate-500 font-bold uppercase block mb-2">Question {currentIdx + 1}</span>
//             <p className="text-white text-lg leading-relaxed">
//               What are your strategies for handling conflict within a team? Can you provide a real-world example?
//             </p>
//           </div>

//           {/* Input Area */}
//           <div className="space-y-4">
//             <textarea
//               onPaste={handlePaste}
//               className="w-full bg-[#1e293b] border border-slate-700 rounded p-4 text-white focus:outline-none focus:border-blue-500 min-h-[300px]"
//               placeholder="Type your response..."
//               value={answer}
//               onChange={(e) => setAnswer(e.target.value)}
//             />
            
//             <div className="flex gap-3">
//               <button 
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-2 rounded disabled:opacity-50"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit Answer"}
//               </button>
//               <button className="border border-slate-700 text-slate-400 text-sm px-6 py-2 rounded hover:bg-slate-800">
//                 Save Draft
//               </button>
//                <button className="border border-slate-700 text-slate-400 text-sm px-6 py-2 rounded hover:bg-slate-800">
//                 Submit All Answers
//               </button>

//             </div>
//           </div>
//         </main>

//         {/* Right: Feedback
//         <aside className="w-72 bg-slate-900 border border-slate-800 p-6 rounded-lg h-fit">
//           <h3 className="text-white font-bold mb-4 border-b border-slate-800 pb-2">AI Feedback</h3>
//           <p className="text-sm text-slate-500 italic">
//             Feedback will appear here after you submit your answer.
//           </p>
//         </aside> */}

//       </div>
//     </div>
//   );
// };

// export default ResumeBasedInterview;

import React, { useState, useEffect } from 'react';

const ResumeBasedInterview = () => {
  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData("text");
    if (pastedText.length > 500) {
      alert("CRITICAL: EXTRANEOUS CONTENT DETECTED. PASTE BLOCKED.");
    }
  };

  // --- States ---
  const [secondsLeft, setSecondsLeft] = useState(1800);
  const [currentIdx, setCurrentIdx] = useState(5);
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questions, setQuestions] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      status: 'unanswered'
    }))
  );

  // --- Simple Timer ---
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const updated = [...questions];
      updated[currentIdx].status = 'answered';
      setQuestions(updated);
      setIsSubmitting(false);
    }, 800);
  };

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

      {/* Header: Brutalist Flat */}
      <header className="flex justify-between items-center border-b-2 border-[#1b3022] pb-6 mb-8 rubik-body">
        <div>
          <h1 className="text-2xl font-black text-[#1b3022] rubik-heading tracking-tighter">Terminal // Portal</h1>
          <p className="text-[10px] font-bold text-[#5a7d64] uppercase tracking-widest">Active File: Resume_SDE_2025.pdf</p>
        </div>
        
        <div className="flex gap-4 items-center">
          <div className="text-[#1b3022] font-bold text-xl bg-[#f5f2e6] border-2 border-[#1b3022] px-4 py-1">
            {formatTime(secondsLeft)}
          </div>
          <button className="text-[10px] font-black uppercase text-red-700 border-2 border-red-700 px-3 py-1 hover:bg-red-700 hover:text-white transition-all">
            Kill Process
          </button>
        </div>
      </header>

      <div className="flex gap-8 rubik-body">
        
        {/* Left: Questions Navigation */}
        <aside className="w-64 shrink-0">
          <h2 className="text-[10px] font-black text-[#1b3022] mb-4 uppercase tracking-widest">Select Question</h2>
          <div className="grid grid-cols-5 gap-1">
            {questions.map((q, i) => (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(i)}
                className={`h-10 text-[11px] font-bold transition-all border
                  ${currentIdx === i 
                    ? 'bg-[#1b3022] border-[#1b3022] text-[#fcfaf2] scale-110 z-10' 
                    : q.status === 'answered' 
                      ? 'bg-[#2d4f39] border-[#1b3022] text-[#fcfaf2]' 
                      : 'bg-transparent border-[#1b3022]/20 text-[#1b3022] hover:border-[#1b3022]'}`}
              >
                {q.id.toString().padStart(2, '0')}
              </button>
            ))}
          </div>
          
          <div className="mt-8 space-y-2 text-[9px] font-bold uppercase tracking-widest text-[#5a7d64]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#1b3022] border border-[#1b3022]"></span> Current
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#2d4f39] border border-[#1b3022]"></span> Answered
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border border-[#1b3022]/20"></span> Unresolved
            </div>
          </div>
        </aside>

        {/* Center: Content */}
        <main className="flex-1 space-y-6">
          {/* Question Box */}
          <div className="bg-[#f5f2e6] border-2 border-[#1b3022] p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#1b3022] text-[#fcfaf2] px-2 py-0.5 text-[8px] font-black uppercase">
              Q-Matrix {currentIdx + 1}
            </div>
            <div className="flex gap-4">
               <span className="text-[#1b3022] font-black text-sm rubik-heading mt-1 opacity-40">Q.</span>
               <p className="text-[#1b3022] text-base font-medium leading-relaxed max-w-2xl">
                What are your strategies for handling conflict within a team? Can you provide a real-world example of how you mediated a technical disagreement?
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="space-y-4">
            <textarea
              onPaste={handlePaste}
              className="w-full bg-transparent border-2 border-[#1b3022] p-4 text-[#1b3022] focus:outline-none focus:bg-[#f5f2e6] min-h-[300px] text-sm font-medium placeholder-[#1b3022]/30"
              placeholder="INPUT RESPONSE DATA..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            
            <div className="flex gap-2">
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-[#1b3022] text-[#fcfaf2] text-[10px] font-black uppercase tracking-widest px-8 py-3 hover:bg-[#2d4f39] transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Submit to Machine"}
              </button>
              <button className="border-2 border-[#1b3022] text-[#1b3022] text-[10px] font-black uppercase tracking-widest px-8 py-3 hover:bg-[#1b3022] hover:text-[#fcfaf2] transition-all">
                Save Cache
              </button>
               <button className="bg-[#2d4f39] text-[#fcfaf2] text-[10px] font-black uppercase tracking-widest px-8 py-3 hover:opacity-90 transition-all">
                Final Transmission
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResumeBasedInterview;