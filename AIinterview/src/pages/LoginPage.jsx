import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, BrainCircuit } from 'lucide-react'; // Icons for the inputs

const LoginPage = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0c16] text-white p-4 font-sans">
      
      {/* Logo & Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 mb-4">
          <BrainCircuit className="w-8 h-8 text-[#7b61ff] rotate-90" />
          <span className="text-2xl font-bold tracking-tight">MockAI</span>
        </div>
        <h1 className="text-3xl font-semibold mb-2">Welcome back</h1>
        <p className="text-slate-400 text-sm">Sign in to continue your practice sessions</p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-[#111422] border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-[#7b61ff] transition-colors" />
              </div>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-[#1c2033] border border-transparent focus:border-[#7b61ff] focus:ring-1 focus:ring-[#7b61ff] text-white py-3 pl-12 pr-4 rounded-xl outline-none transition-all placeholder:text-slate-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-[#7b61ff] transition-colors" />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#1c2033] border border-transparent focus:border-[#7b61ff] focus:ring-1 focus:ring-[#7b61ff] text-white py-3 pl-12 pr-4 rounded-xl outline-none transition-all placeholder:text-slate-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-from-[#6366f1] to-[#a855f7] hover:from-[#585ce5] hover:to-[#9333ea] text-white font-semibold py-3 rounded-xl shadow-[0_0_20px_rgba(123,97,255,0.3)] transition-all active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>
        <br />
          <button
            className="w-full bg-white text-gray-700 font-semibold py-3 rounded-xl shadow-[0_0_20px_rgba(123,97,255,0.3)] transition-all active:scale-[0.98]"
          >
            Sign in with Google
          </button>

        {/* Footer Link */}
        <div className="mt-8 text-center text-sm text-slate-400">
          Don't have an account?{' '}
          <a href="/signuppage" className="text-[#7b61ff] hover:text-[#9381ff] font-medium transition-colors">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;