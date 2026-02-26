// import React from 'react';
// import { BrainCircuit, Upload, Video, FileText, Mail, Lock, User } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="bg-[#0a0c16] text-white font-sans selection:bg-indigo-500/30">
//       {/* --- NAVIGATION --- */}
//       <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-[#0a0c16]/80 backdrop-blur-md border-b border-slate-800/50">
//         <div className="flex items-center gap-2">
//           <BrainCircuit className="w-8 h-8 text-indigo-400 rotate-90" />
//           <span className="text-xl font-bold tracking-tight">MockAI</span>
//         </div>
//         <div className="flex items-center gap-8">
//           <button onClick={()=>navigate("/loginpage")} className="text-slate-300 hover:text-white transition-colors font-medium">Login</button>
//           <button onClick={()=>navigate("/interviewselection")}  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-indigo-500/20 transition-all active:scale-95">
//             Start Interview
//           </button>
//         </div>
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 pt-20 overflow-hidden">
//         {/* Background Glow */}
//         <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        
//         <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
//           <div>
//             <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
//               Crack Interviews <br /> 
//               with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI-Powered</span> <br />
//               Mock Sessions
//             </h1>
//             <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
//               Practice realistic technical and behavioral interviews with instant AI feedback and performance tracking.
//             </p>
//             <button onClick={()=>navigate("/interviewselection")} className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/20 active:scale-[0.98]">
//               Start Mock Interview
//             </button>
//           </div>

//           {/* Abstract Hero Graphic */}
//           <div className="hidden lg:flex justify-center items-center relative">
//             <div className="relative">
//                 {/* Orbital Rings Effect */}
//                 <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-full scale-150 animate-[spin_10s_linear_infinite]" />
//                 <div className="absolute inset-0 border border-purple-500/10 rounded-full scale-[2] animate-[spin_15s_linear_infinite_reverse]" />
//                 <div className="p-12 bg-indigo-600/10 rounded-full border border-indigo-500/20 backdrop-blur-sm">
//                     <BrainCircuit className="w-32 h-32 text-indigo-400 rotate-90" />
//                 </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- HOW IT WORKS SECTION --- */}
//       <section className="py-32 px-8 md:px-16 bg-[#0c0f1d]">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl font-bold mb-4">How It Works</h2>
//           <p className="text-slate-400 text-lg">Three simple steps to interview mastery</p>
//         </div>

//         <div className="relative max-w-6xl mx-auto">
//           {/* Connecting Line */}
//           <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent hidden md:block" />
          
//           <div className="grid md:grid-cols-3 gap-12 relative z-10">
//             {/* Step 1 */}
//             <div className="flex flex-col items-center text-center group">
//               <div className="relative mb-8 p-8 bg-[#161b30] border border-slate-700 rounded-2xl transition-all group-hover:border-indigo-500 group-hover:shadow-2xl group-hover:shadow-indigo-500/10">
//                 <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">1</div>
//                 <Upload className="w-10 h-10 text-indigo-400" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Upload Resume</h3>
//               <p className="text-slate-500">Share your background</p>
//             </div>

//             {/* Step 2 */}
//             <div className="flex flex-col items-center text-center group">
//               <div className="relative mb-8 p-8 bg-[#161b30] border border-slate-700 rounded-2xl transition-all group-hover:border-indigo-500 group-hover:shadow-2xl group-hover:shadow-indigo-500/10">
//                 <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">2</div>
//                 <Video className="w-10 h-10 text-indigo-400" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Take AI Mock Interview</h3>
//               <p className="text-slate-500">Practice with AI interviewer</p>
//             </div>

//             {/* Step 3 */}
//             <div className="flex flex-col items-center text-center group">
//               <div className="relative mb-8 p-8 bg-[#161b30] border border-slate-700 rounded-2xl transition-all group-hover:border-indigo-500 group-hover:shadow-2xl group-hover:shadow-indigo-500/10">
//                 <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">3</div>
//                 <FileText className="w-10 h-10 text-indigo-400" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Get Detailed Feedback</h3>
//               <p className="text-slate-500">Receive improvement plan</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- CALL TO ACTION SECTION --- */}
//       <section className="py-32 px-8 flex justify-center">
//         <div className="w-full max-w-5xl bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl shadow-indigo-900/20 relative overflow-hidden">
//             {/* Decorative circles */}
//             <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
//             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
            
//             <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
//                 Ready to Level Up Your <br className="hidden md:block"/> Interview Game?
//             </h2>
//             <p className="text-indigo-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
//                 Join thousands of candidates who have successfully prepared with MockAI.
//             </p>
//             <button className="bg-white text-indigo-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl active:scale-95">
//                 Get Started Now
//             </button>
//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="py-12 px-8 md:px-16 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
//         <div className="flex items-center gap-2">
//           <BrainCircuit className="w-6 h-6 text-indigo-400 rotate-90" />
//           <span className="font-bold">MockAI</span>
//         </div>
//         <p className="text-slate-500 text-sm">© 2026 MockAI. All rights reserved to <span className='font-bold text-gray-400'>filenotfound</span>.</p>
//         <div className="flex gap-6 text-slate-400 text-sm">
//             <a href="#" className="hover:text-white transition-colors">Privacy</a>
//             <a href="#" className="hover:text-white transition-colors">Terms</a>
//             <a href="#" className="hover:text-white transition-colors">Contract</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

// import React from 'react';
// import { BrainCircuit, Upload, Video, FileText } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="bg-[#fcfaf2] text-[#1b3022] font-sans selection:bg-[#2d4f39]/20">
//       {/* --- NAVIGATION --- */}
//       <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-[#fcfaf2]/80 backdrop-blur-md border-b border-[#1b3022]/10">
//         <div className="flex items-center gap-2">
//           <BrainCircuit className="w-8 h-8 text-[#2d4f39] rotate-90" />
//           <span className="text-xl font-bold tracking-tight text-[#1b3022]">MockAI</span>
//         </div>
//         <div className="flex items-center gap-8">
//           <button onClick={()=>navigate("/loginpage")} className="text-[#3e5c47] hover:text-[#1b3022] transition-colors font-medium">Login</button>
//           <button onClick={()=>navigate("/interviewselection")}  className="bg-[#2d4f39] text-[#fcfaf2] hover:bg-[#1b3022] px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-[#2d4f39]/20 transition-all active:scale-95">
//             Start Interview
//           </button>
//         </div>
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 pt-20 overflow-hidden">
//         {/* Background Glow */}
//         <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#2d4f39]/5 rounded-full blur-[120px] pointer-events-none" />
        
//         <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
//           <div>
//             <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-[#1b3022]">
//               Crack Interviews <br /> 
//               with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d4f39] to-[#5a7d64]">AI-Powered</span> <br />
//               Mock Sessions
//             </h1>
//             <p className="text-[#3e5c47] text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
//               Practice realistic technical and behavioral interviews with instant AI feedback and performance tracking.
//             </p>
//             <button onClick={()=>navigate("/interviewselection")} className="bg-[#2d4f39] hover:bg-[#1b3022] text-[#fcfaf2] px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-[#2d4f39]/20 active:scale-[0.98]">
//               Start Mock Interview
//             </button>
//           </div>

//           {/* Abstract Hero Graphic */}
//           <div className="hidden lg:flex justify-center items-center relative">
//             <div className="relative">
//                 {/* Orbital Rings Effect */}
//                 <div className="absolute inset-0 border-2 border-[#2d4f39]/10 rounded-full scale-150 animate-[spin_10s_linear_infinite]" />
//                 <div className="absolute inset-0 border border-[#2d4f39]/5 rounded-full scale-[2] animate-[spin_15s_linear_infinite_reverse]" />
//                 <div className="p-12 bg-[#2d4f39]/5 rounded-full border border-[#2d4f39]/10 backdrop-blur-sm">
//                     <BrainCircuit className="w-32 h-32 text-[#2d4f39] rotate-90" />
//                 </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- HOW IT WORKS SECTION --- */}
//       <section className="py-32 px-8 md:px-16 bg-[#f5f2e6]">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl font-bold mb-4 text-[#1b3022]">How It Works</h2>
//           <p className="text-[#3e5c47] text-lg">Three simple steps to interview mastery</p>
//         </div>

//         <div className="relative max-w-6xl mx-auto">
//           {/* Connecting Line */}
//           <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2d4f39]/30 to-transparent hidden md:block" />
          
//           <div className="grid md:grid-cols-3 gap-12 relative z-10">
//             {/* Step 1 */}
//             <div className="flex flex-col items-center text-center group">
//               <div className="relative mb-8 p-8 bg-[#fcfaf2] border border-[#2d4f39]/10 rounded-2xl transition-all group-hover:border-[#2d4f39] group-hover:shadow-2xl group-hover:shadow-[#2d4f39]/10">
//                 <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#2d4f39] text-[#fcfaf2] rounded-full flex items-center justify-center text-sm font-bold shadow-lg">1</div>
//                 <Upload className="w-10 h-10 text-[#2d4f39]" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-[#1b3022]">Upload Resume</h3>
//               <p className="text-[#5a7d64]">Share your background</p>
//             </div>

//             {/* Step 2 */}
//             <div className="flex flex-col items-center text-center group">
//               <div className="relative mb-8 p-8 bg-[#fcfaf2] border border-[#2d4f39]/10 rounded-2xl transition-all group-hover:border-[#2d4f39] group-hover:shadow-2xl group-hover:shadow-[#2d4f39]/10">
//                 <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#2d4f39] text-[#fcfaf2] rounded-full flex items-center justify-center text-sm font-bold shadow-lg">2</div>
//                 <Video className="w-10 h-10 text-[#2d4f39]" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-[#1b3022]">Take AI Mock Interview</h3>
//               <p className="text-[#5a7d64]">Practice with AI interviewer</p>
//             </div>

//             {/* Step 3 */}
//             <div className="flex flex-col items-center text-center group">
//               <div className="relative mb-8 p-8 bg-[#fcfaf2] border border-[#2d4f39]/10 rounded-2xl transition-all group-hover:border-[#2d4f39] group-hover:shadow-2xl group-hover:shadow-[#2d4f39]/10">
//                 <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#2d4f39] text-[#fcfaf2] rounded-full flex items-center justify-center text-sm font-bold shadow-lg">3</div>
//                 <FileText className="w-10 h-10 text-[#2d4f39]" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-[#1b3022]">Get Detailed Feedback</h3>
//               <p className="text-[#5a7d64]">Receive improvement plan</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- CALL TO ACTION SECTION --- */}
//       <section className="py-32 px-8 flex justify-center bg-[#fcfaf2]">
//         <div className="w-full max-w-5xl bg-gradient-to-br from-[#2d4f39] to-[#1b3022] rounded-[3rem] p-12 md:p-24 text-center shadow-2xl shadow-[#1b3022]/20 relative overflow-hidden">
//             <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
//             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
            
//             <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-[#fcfaf2]">
//                 Ready to Level Up Your <br className="hidden md:block"/> Interview Game?
//             </h2>
//             <p className="text-[#fcfaf2]/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
//                 Join thousands of candidates who have successfully prepared with MockAI.
//             </p>
//             <button className="bg-[#fcfaf2] text-[#1b3022] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#f5f2e6] transition-all shadow-xl active:scale-95">
//                 Get Started Now
//             </button>
//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="py-12 px-8 md:px-16 border-t border-[#1b3022]/10 flex flex-col md:flex-row justify-between items-center gap-6">
//         <div className="flex items-center gap-2">
//           <BrainCircuit className="w-6 h-6 text-[#2d4f39] rotate-90" />
//           <span className="font-bold text-[#1b3022]">MockAI</span>
//         </div>
//         <p className="text-[#5a7d64] text-sm">© 2026 MockAI. All rights reserved to <span className='font-bold text-[#1b3022]'>filenotfound</span>.</p>
//         <div className="flex gap-6 text-[#5a7d64] text-sm">
//             <a href="#" className="hover:text-[#1b3022] transition-colors">Privacy</a>
//             <a href="#" className="hover:text-[#1b3022] transition-colors">Terms</a>
//             <a href="#" className="hover:text-[#1b3022] transition-colors">Contract</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
// import React from 'react';
// import { BrainCircuit, Upload, Video, FileText } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="bg-[#fcfaf2] text-[#1b3022] selection:bg-[#2d4f39]/20">
//       {/* --- CRAZY FONTS IMPORT --- */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&family=Syne:wght@800&display=swap');
//           .crazy-heading { font-family: 'Syne', sans-serif; text-transform: uppercase; letter-spacing: -0.02em; }
//           .crazy-body { font-family: 'Space Grotesk', sans-serif; }
//         `}
//       </style>

//       {/* --- NAVIGATION --- */}
//       <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-4 bg-[#fcfaf2]/80 backdrop-blur-md border-b border-[#1b3022]/10 crazy-body">
//         <div className="flex items-center gap-2">
//           <BrainCircuit className="w-6 h-6 text-[#2d4f39] rotate-90" />
//           <span className="text-lg font-bold tracking-tighter crazy-heading">MockAI</span>
//         </div>
//         <div className="flex items-center gap-6">
//           <button onClick={()=>navigate("/loginpage")} className="text-[#3e5c47] hover:text-[#1b3022] transition-colors font-bold uppercase text-[10px] tracking-widest">Login</button>
//           <button onClick={()=>navigate("/interviewselection")}  className="bg-[#2d4f39] text-[#fcfaf2] hover:bg-[#1b3022] px-5 py-2 rounded-none border border-[#1b3022] font-bold uppercase text-[11px] tracking-wider transition-all active:scale-95">
//             Start Interview
//           </button>
//         </div>
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <section className="relative min-h-[90vh] flex flex-col justify-center px-8 md:px-16 pt-20 overflow-hidden crazy-body">
//         <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
//           <div>
//             <h1 className="text-4xl md:text-6xl font-extrabold leading-[1] mb-6 text-[#1b3022] crazy-heading">
//               Crack <br /> 
//               Interviews <br />
//               <span className="text-transparent border-b-2 border-[#2d4f39] [-webkit-text-stroke:0.5px_#1b3022]">AI-Powered</span> <br />
//               Sessions
//             </h1>
//             <p className="text-[#3e5c47] text-sm md:text-base mb-8 max-w-xs font-medium leading-snug uppercase tracking-tight">
//               Practice realistic technical sessions with instant machine feedback.
//             </p>
//             <button onClick={()=>navigate("/interviewselection")} className="bg-[#1b3022] hover:bg-[#2d4f39] text-[#fcfaf2] px-8 py-3 rounded-none font-bold text-sm transition-all shadow-[4px_4px_0px_#d4d0b8] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
//               MOCK NOW →
//             </button>
//           </div>

//           <div className="hidden lg:flex justify-center items-center">
//             <div className="relative">
//                 <div className="p-12 bg-[#2d4f39] rounded-full border-4 border-[#fcfaf2] shadow-xl">
//                     <BrainCircuit className="w-24 h-24 text-[#fcfaf2] rotate-90" />
//                 </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- HOW IT WORKS SECTION --- */}
//       <section className="py-24 px-8 md:px-16 bg-[#f5f2e6] crazy-body">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-black mb-2 text-[#1b3022] crazy-heading">The Protocol</h2>
//           <p className="text-[#3e5c47] text-xs font-bold tracking-widest uppercase">Process Flow 01-03</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           <div className="flex flex-col items-start p-6 bg-[#fcfaf2] border-l-4 border-[#2d4f39]">
//             <Upload className="w-8 h-8 text-[#2d4f39] mb-4" />
//             <h3 className="text-lg font-bold mb-1 crazy-heading">Upload</h3>
//             <p className="text-[#5a7d64] text-xs font-medium italic">Data injection of your background.</p>
//           </div>

//           <div className="flex flex-col items-start p-6 bg-[#fcfaf2] border-l-4 border-[#2d4f39]">
//             <Video className="w-8 h-8 text-[#2d4f39] mb-4" />
//             <h3 className="text-lg font-bold mb-1 crazy-heading">Simulate</h3>
//             <p className="text-[#5a7d64] text-xs font-medium italic">Face the machine intelligence.</p>
//           </div>

//           <div className="flex flex-col items-start p-6 bg-[#fcfaf2] border-l-4 border-[#2d4f39]">
//             <FileText className="w-8 h-8 text-[#2d4f39] mb-4" />
//             <h3 className="text-lg font-bold mb-1 crazy-heading">Extract</h3>
//             <p className="text-[#5a7d64] text-xs font-medium italic">Download the growth matrix.</p>
//           </div>
//         </div>
//       </section>

//       {/* --- CALL TO ACTION --- */}
//       <section className="py-20 px-8 bg-[#fcfaf2] crazy-body">
//         <div className="w-full max-w-4xl mx-auto bg-[#1b3022] p-10 md:p-16 text-center relative">
//             <h2 className="text-3xl md:text-5xl font-black mb-6 leading-none text-[#fcfaf2] crazy-heading">
//                 LEVEL UP <br/> YOUR GAME.
//             </h2>
//             <button className="bg-[#fcfaf2] text-[#1b3022] px-8 py-3 font-black text-sm hover:bg-[#2d4f39] hover:text-white transition-all uppercase tracking-widest">
//                 JOIN SYSTEM
//             </button>
//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="py-10 px-8 md:px-16 border-t border-[#1b3022]/10 flex flex-col md:flex-row justify-between items-center crazy-body uppercase font-bold text-[9px] tracking-widest opacity-70">
//         <div className="flex items-center gap-2">
//           <BrainCircuit className="w-4 h-4 text-[#2d4f39]" />
//           <span>MOCKAI // TERMINAL</span>
//         </div>
//         <p>© 2026. FILENOTFOUND SYSTEM.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { BrainCircuit, Upload, Video, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fcfaf2] text-[#1b3022] selection:bg-[#2d4f39]/20 font-['Rubik']">
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

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-4 bg-[#fcfaf2]/80 backdrop-blur-md border-b border-[#1b3022]/10 rubik-body">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-6 h-6 text-[#2d4f39] rotate-90" />
          <span className="text-lg font-bold tracking-tighter rubik-heading">MockAI</span>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={()=>navigate("/loginpage")} className="text-[#3e5c47] hover:text-[#1b3022] transition-colors font-bold uppercase text-[10px] tracking-widest">Login</button>
          <button onClick={()=>navigate("/interviewselection")}  className="bg-[#2d4f39] text-[#fcfaf2] hover:bg-[#1b3022] px-5 py-2 rounded-none border border-[#1b3022] font-bold uppercase text-[11px] tracking-wider transition-all active:scale-95">
            Start Interview
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-8 md:px-16 pt-20 overflow-hidden rubik-body">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-6xl mb-6 text-[#1b3022] rubik-heading leading-[1]">
              Crack <br /> 
              Interviews <br />
              <span className="text-transparent border-b-2 border-[#2d4f39] [-webkit-text-stroke:0.5px_#1b3022]">AI-Powered</span> <br />
              Sessions
            </h1>
            <p className="text-[#3e5c47] text-sm md:text-base mb-8 max-w-xs font-medium leading-snug uppercase tracking-tight">
              Practice realistic technical sessions with instant machine feedback.
            </p>
            <button onClick={()=>navigate("/interviewselection")} className="bg-[#1b3022] hover:bg-[#2d4f39] text-[#fcfaf2] px-8 py-3 rounded-none font-bold text-sm transition-all shadow-[4px_4px_0px_#d4d0b8] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
              MOCK NOW →
            </button>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
                <div className="p-12 bg-[#2d4f39] rounded-full border-4 border-[#fcfaf2] shadow-xl">
                    <BrainCircuit className="w-24 h-24 text-[#fcfaf2] rotate-90" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-24 px-8 md:px-16 bg-[#f5f2e6] rubik-body">
        <div className="text-center mb-16">
          <h2 className="text-3xl mb-2 text-[#1b3022] rubik-heading">The Protocol</h2>
          <p className="text-[#3e5c47] text-xs font-bold tracking-widest uppercase">Process Flow 01-03</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-start p-6 bg-[#fcfaf2] border-l-4 border-[#2d4f39]">
            <Upload className="w-8 h-8 text-[#2d4f39] mb-4" />
            <h3 className="text-lg font-bold mb-1 rubik-heading">Upload</h3>
            <p className="text-[#5a7d64] text-xs font-medium italic">Data injection of your background.</p>
          </div>

          <div className="flex flex-col items-start p-6 bg-[#fcfaf2] border-l-4 border-[#2d4f39]">
            <Video className="w-8 h-8 text-[#2d4f39] mb-4" />
            <h3 className="text-lg font-bold mb-1 rubik-heading">Simulate</h3>
            <p className="text-[#5a7d64] text-xs font-medium italic">Face the machine intelligence.</p>
          </div>

          <div className="flex flex-col items-start p-6 bg-[#fcfaf2] border-l-4 border-[#2d4f39]">
            <FileText className="w-8 h-8 text-[#2d4f39] mb-4" />
            <h3 className="text-lg font-bold mb-1 rubik-heading">Extract</h3>
            <p className="text-[#5a7d64] text-xs font-medium italic">Download the growth matrix.</p>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 px-8 bg-[#fcfaf2] rubik-body">
        <div className="w-full max-w-4xl mx-auto bg-[#1b3022] p-10 md:p-16 text-center relative">
            <h2 className="text-3xl md:text-5xl mb-6 leading-none text-[#fcfaf2] rubik-heading">
                LEVEL UP <br/> YOUR GAME.
            </h2>
            <button className="bg-[#fcfaf2] text-[#1b3022] px-8 py-3 font-black text-sm hover:bg-[#2d4f39] hover:text-white transition-all uppercase tracking-widest">
                JOIN SYSTEM
            </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 px-8 md:px-16 border-t border-[#1b3022]/10 flex flex-col md:flex-row justify-between items-center rubik-body uppercase font-bold text-[9px] tracking-widest opacity-70">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-4 h-4 text-[#2d4f39]" />
          <span>MOCKAI // TERMINAL</span>
        </div>
        <p>© 2026. FILENOTFOUND SYSTEM.</p>
      </footer>
    </div>
  );
};

export default HomePage;