import React, { useState } from 'react';
import { Mail, Lock, User, BrainCircuit } from 'lucide-react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating account for:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0c16] text-white p-4 font-sans">
      
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 mb-4">
          <BrainCircuit className="w-8 h-8 text-indigo-400 rotate-90" />
          <span className="text-2xl font-bold tracking-tight">MockAI</span>
        </div>
        <h1 className="text-3xl font-semibold mb-2 text-center">Create your account</h1>
        <p className="text-slate-400 text-sm">Start your journey to interview mastery</p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-[#111422] border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Full Name Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
              </div>
              <input
                name="fullName"
                type="text"
                placeholder="John Doe"
                className="w-full bg-[#1c2033] border border-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white py-3 pl-12 pr-4 rounded-xl outline-none transition-all placeholder:text-slate-600"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
              </div>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full bg-[#1c2033] border border-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white py-3 pl-12 pr-4 rounded-xl outline-none transition-all placeholder:text-slate-600"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
              </div>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#1c2033] border border-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white py-3 pl-12 pr-4 rounded-xl outline-none transition-all placeholder:text-slate-600"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-gradient from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 mt-2 rounded-xl shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        {/* Login Redirect */}
        <div className="mt-8 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <a  href="/loginpage" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;