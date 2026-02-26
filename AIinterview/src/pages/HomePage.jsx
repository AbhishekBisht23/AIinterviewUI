import React from 'react';
import { BrainCircuit, Upload, Video, FileText, Mail, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0a0c16] text-white font-sans selection:bg-indigo-500/30">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-[#0a0c16]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-8 h-8 text-indigo-400 rotate-90" />
          <span className="text-xl font-bold tracking-tight">MockAI</span>
        </div>
        <div className="flex items-center gap-8">
          <button onClick={()=>navigate("/loginpage")} className="text-slate-300 hover:text-white transition-colors font-medium">Login</button>
          <button onClick={()=>navigate("/interviewselection")}  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-indigo-500/20 transition-all active:scale-95">
            Start Interview
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 pt-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              Crack Interviews <br /> 
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI-Powered</span> <br />
              Mock Sessions
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Practice realistic technical and behavioral interviews with instant AI feedback and performance tracking.
            </p>
            <button onClick={()=>navigate("/interviewselection")} className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/20 active:scale-[0.98]">
              Start Mock Interview
            </button>
          </div>

          {/* Abstract Hero Graphic */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative">
                {/* Orbital Rings Effect */}
                <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-full scale-150 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 border border-purple-500/10 rounded-full scale-[2] animate-[spin_15s_linear_infinite_reverse]" />
                <div className="p-12 bg-indigo-600/10 rounded-full border border-indigo-500/20 backdrop-blur-sm">
                    <BrainCircuit className="w-32 h-32 text-indigo-400 rotate-90" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-32 px-8 md:px-16 bg-[#0c0f1d]">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400 text-lg">Three simple steps to interview mastery</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent hidden md:block" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-8 p-8 bg-[#161b30] border border-slate-700 rounded-2xl transition-all group-hover:border-indigo-500 group-hover:shadow-2xl group-hover:shadow-indigo-500/10">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">1</div>
                <Upload className="w-10 h-10 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Upload Resume</h3>
              <p className="text-slate-500">Share your background</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-8 p-8 bg-[#161b30] border border-slate-700 rounded-2xl transition-all group-hover:border-indigo-500 group-hover:shadow-2xl group-hover:shadow-indigo-500/10">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">2</div>
                <Video className="w-10 h-10 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Take AI Mock Interview</h3>
              <p className="text-slate-500">Practice with AI interviewer</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-8 p-8 bg-[#161b30] border border-slate-700 rounded-2xl transition-all group-hover:border-indigo-500 group-hover:shadow-2xl group-hover:shadow-indigo-500/10">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">3</div>
                <FileText className="w-10 h-10 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Get Detailed Feedback</h3>
              <p className="text-slate-500">Receive improvement plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION SECTION --- */}
      <section className="py-32 px-8 flex justify-center">
        <div className="w-full max-w-5xl bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl shadow-indigo-900/20 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Ready to Level Up Your <br className="hidden md:block"/> Interview Game?
            </h2>
            <p className="text-indigo-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
                Join thousands of candidates who have successfully prepared with MockAI.
            </p>
            <button className="bg-white text-indigo-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl active:scale-95">
                Get Started Now
            </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-8 md:px-16 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-6 h-6 text-indigo-400 rotate-90" />
          <span className="font-bold">MockAI</span>
        </div>
        <p className="text-slate-500 text-sm">© 2026 MockAI. All rights reserved to <span className='font-bold text-gray-400'>filenotfound</span>.</p>
        <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contract</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

