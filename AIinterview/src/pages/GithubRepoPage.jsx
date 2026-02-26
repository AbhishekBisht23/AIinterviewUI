// import React, { useState, useEffect } from 'react';
// import { Search, Star, GitFork, Lock, Globe } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// useNavigate
// const GithubRepoPage = () => {
//     const navigate = useNavigate();
//   const [repos, setRepos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedRepo, setSelectedRepo] = useState(null);

//   // Replace 'username' with the actual GitHub handle or a dynamic variable
//   const GITHUB_USERNAME = 'abhishek-bisht'; 

//   useEffect(() => {
//     const fetchRepos = async () => {
//       try {
//         const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`);
//         const data = await response.json();
//         setRepos(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching repos:", error);
//         setLoading(false);
//       }
//     };
//     fetchRepos();
//   }, []);

//   const filteredRepos = repos.filter(repo => 
//     repo.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) return <div className="text-white text-center mt-20">Loading repositories...</div>;

//   return (
//     <div className="min-h-screen bg-[#0d1117] text-slate-200 p-8 font-sans">
//       {/* Header Section */}
//       <header className="max-w-6xl mx-auto text-center mb-12">
//         <div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700 mb-6">
//           <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//           <span className="text-sm font-medium">Connected: {GITHUB_USERNAME}</span>
//         </div>
//         <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
//           GitHub Repository Interview
//         </h1>
//         <p className="text-slate-400 text-lg">Select a repository to begin your AI-generated technical assessment.</p>
//       </header>

//       {/* Controls */}
//       <div className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row gap-4">
//         <div className="relative flex-1">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
//           <input 
//             type="text"
//             placeholder="Search repositories..."
//             className="w-full bg-[#161b22] border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <select className="bg-[#161b22] border border-slate-700 rounded-lg px-4 py-2.5 outline-none">
//           <option>All Languages</option>
//         </select>
//       </div>

//       {/* Grid */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {filteredRepos.map((repo) => (
//           <div 
//             key={repo.id}
//             onClick={() => setSelectedRepo(repo.id)}
//             className={`group relative p-5 rounded-xl border transition-all cursor-pointer hover:shadow-xl 
//               ${selectedRepo === repo.id 
//                 ? 'border-indigo-500 bg-indigo-500/5 ring-1 ring-indigo-500' 
//                 : 'border-slate-800 bg-[#161b22] hover:border-slate-600'}`}
//           >
//             <div className="flex justify-between items-start mb-3">
//               <h3 className="font-bold text-lg text-white truncate pr-4">{repo.name}</h3>
//               {repo.private ? 
//                 <span className="flex items-center gap-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">
//                   <Lock size={10} /> Private
//                 </span> : 
//                 <span className="flex items-center gap-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
//                   <Globe size={10} /> Public
//                 </span>
//               }
//             </div>
            
//             <p className="text-slate-400 text-sm line-clamp-2 h-10 mb-6">
//               {repo.description || "No description provided for this repository."}
//             </p>

//             <div className="flex items-center justify-between text-slate-500 text-sm">
//               <div className="flex items-center gap-4">
//                 <span className="flex items-center gap-1.5">
//                   <div className="w-3 h-3 rounded-full bg-blue-500"></div>
//                   {repo.language || 'Plain Text'}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Star size={14} /> {repo.stargazers_count}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <GitFork size={14} /> {repo.forks_count}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Action Footer */}
//       <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
//         <button onClick={()=>navigate("/resumebasedinterview")}
//           disabled={!selectedRepo}
//           className={`px-8 py-3 rounded-full font-bold text-white transition-all shadow-lg flex items-center gap-2
//             ${selectedRepo 
//               ? 'bg-indigo-600 hover:bg-indigo-500 hover:scale-105 active:scale-95' 
//               : 'bg-slate-700 cursor-not-allowed opacity-50'}`}
//         >
//           Start AI Repo Interview
//           <span>→</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GithubRepoPage;

import React, { useState, useEffect } from 'react';
import { Search, Star, GitFork, Lock, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GithubRepoPage = () => {
    const navigate = useNavigate();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRepo, setSelectedRepo] = useState(null);

  const GITHUB_USERNAME = 'abhishek-bisht'; 

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`);
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repos:", error);
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter(repo => 
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="min-h-screen bg-[#fcfaf2] flex items-center justify-center font-['Rubik']">
        <p className="text-[#1b3022] font-black uppercase tracking-widest text-xs animate-pulse">Synchronizing Repositories...</p>
    </div>
  );

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

      {/* Header Section */}
      <header className="max-w-6xl mx-auto text-center mb-12 rubik-body">
        <div className="inline-flex items-center gap-2 bg-[#f5f2e6] px-4 py-1 border-2 border-[#1b3022] mb-6">
          <div className="w-2 h-2 bg-[#2d4f39] rounded-full animate-ping"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest">Active Connection: {GITHUB_USERNAME}</span>
        </div>
        <h1 className="text-4xl md:text-5xl mb-4 rubik-heading">
          Repository // Matrix
        </h1>
        <p className="text-[#5a7d64] text-[11px] font-bold uppercase tracking-widest">Select a codebase for neural analysis and assessment.</p>
      </header>

      {/* Controls */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row gap-2 rubik-body">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1b3022] w-4 h-4" />
          <input 
            type="text"
            placeholder="FILTER REPOSITORIES..."
            className="w-full bg-[#f5f2e6] border-2 border-[#1b3022] py-3 pl-12 pr-4 text-[#1b3022] text-xs font-bold outline-none placeholder-[#1b3022]/40"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select className="bg-[#f5f2e6] border-2 border-[#1b3022] px-6 py-3 text-[10px] font-black uppercase outline-none cursor-pointer">
          <option>All Languages</option>
        </select>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rubik-body">
        {filteredRepos.map((repo) => (
          <div 
            key={repo.id}
            onClick={() => setSelectedRepo(repo.id)}
            className={`group relative p-6 border-2 transition-all cursor-pointer
              ${selectedRepo === repo.id 
                ? 'bg-[#1b3022] border-[#1b3022] translate-x-1 translate-y-1' 
                : 'bg-[#fcfaf2] border-[#1b3022] hover:bg-[#f5f2e6] shadow-[4px_4px_0px_#1b3022]'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className={`font-black text-sm truncate pr-4 rubik-heading ${selectedRepo === repo.id ? 'text-[#fcfaf2]' : 'text-[#1b3022]'}`}>
                {repo.name}
              </h3>
              {repo.private ? 
                <span className="text-[8px] font-black uppercase px-2 py-0.5 border border-[#1b3022] bg-[#f5f2e6] text-[#1b3022]">
                  Private
                </span> : 
                <span className="text-[8px] font-black uppercase px-2 py-0.5 border border-[#1b3022] bg-[#2d4f39] text-[#fcfaf2]">
                  Public
                </span>
              }
            </div>
            
            <p className={`text-[11px] leading-tight line-clamp-2 h-8 mb-6 font-medium uppercase tracking-tighter ${selectedRepo === repo.id ? 'text-[#fcfaf2]/70' : 'text-[#5a7d64]'}`}>
              {repo.description || "No description provided for this repository."}
            </p>

            <div className={`flex items-center justify-between text-[10px] font-bold uppercase ${selectedRepo === repo.id ? 'text-[#fcfaf2]' : 'text-[#1b3022]'}`}>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-none bg-[#2d4f39] border border-[#1b3022]"></div>
                  {repo.language || 'Data'}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={12} strokeWidth={3} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} strokeWidth={3} /> {repo.forks_count}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Footer */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 rubik-body">
        <button onClick={()=>navigate("/resumebasedinterview")}
          disabled={!selectedRepo}
          className={`px-10 py-4 border-4 border-[#1b3022] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-3
            ${selectedRepo 
              ? 'bg-[#1b3022] text-[#fcfaf2] hover:bg-[#2d4f39] shadow-[8px_8px_0px_#d4d0b8] active:translate-x-1 active:translate-y-1 active:shadow-none' 
              : 'bg-[#f5f2e6] text-[#1b3022]/30 border-[#1b3022]/20 cursor-not-allowed'}`}
        >
          Initialize AI Assessment
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default GithubRepoPage;