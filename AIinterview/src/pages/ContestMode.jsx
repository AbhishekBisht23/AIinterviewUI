import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Trophy, 
  Clock, 
  Mic, 
  Square, 
  RotateCcw, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Activity,
  UserCheck,
  LayoutDashboard
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContestMode = () => {
  const navigate = useNavigate();

  // --- WORKFLOW STATE ---
  const [step, setStep] = useState("overview"); // overview, rounds, inRound, hrRound, completed, leaderboard
  const [currentRoundIdx, setCurrentRoundIdx] = useState(0);
  const [rounds, setRounds] = useState([
    { id: 1, title: "Resume Round", desc: "Data extraction of your background.", status: "not_started" },
    { id: 2, title: "GitHub Round", desc: "Neural analysis of code contributions.", status: "not_started" },
    { id: 3, title: "Coding Round", desc: "Algorithmic logic under pressure.", status: "not_started" },
    { id: 4, title: "Core CS Round", desc: "Diagnostic of CS fundamental nodes.", status: "not_started" },
    { id: 5, title: "HR Voice Round", desc: "Communication & behavior evaluation.", status: "locked" },
  ]);

  // --- AUDIO RECORDING STATE ---
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [recordingTime, setRecordingTime] = useState(120); // 2 minutes
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const timerRef = useRef(null);

  // --- DUMMY DATA ---
  const finalScores = useMemo(() => ({
    resume: Math.floor(Math.random() * 5) + 15,
    github: Math.floor(Math.random() * 5) + 14,
    coding: Math.floor(Math.random() * 5) + 15,
    core: Math.floor(Math.random() * 5) + 15,
    hr: Math.floor(Math.random() * 5) + 15,
  }), [step === "completed"]);

  const totalScore = Object.values(finalScores).reduce((a, b) => a + b, 0);

  // --- ACTIONS ---
  const startContest = () => setStep("rounds");

  const enterRound = (idx) => {
    const round = rounds[idx];
    if (round.status === "locked") return;
    
    setCurrentRoundIdx(idx);
    if (round.title.includes("HR")) {
      setStep("hrRound");
    } else {
      setStep("inRound");
    }
  };

  const completeTechnicalRound = () => {
    const newRounds = [...rounds];
    newRounds[currentRoundIdx].status = "completed";
    
    // Unlock HR if first 4 are done
    const techDone = newRounds.slice(0, 4).every(r => r.status === "completed");
    if (techDone && newRounds[4].status === "locked") {
      newRounds[4].status = "not_started";
    }
    
    setRounds(newRounds);
    setStep("rounds");
  };

  // --- MEDIA RECORDER LOGIC ---
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      const chunks = [];
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
        setAudioURL(URL.createObjectURL(blob));
      };

      mediaRecorder.start();
      setIsRecording(true);
      
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } catch (err) {
      alert("Microphone access denied. Evaluation cannot proceed.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      streamRef.current.getTracks().forEach(track => track.stop());
      clearInterval(timerRef.current);
      setIsRecording(false);
    }
  };

  const submitHRRound = () => {
    const newRounds = [...rounds];
    newRounds[4].status = "completed";
    setRounds(newRounds);
    setStep("completed");
  };

  // --- UI COMPONENTS ---

  const RoundCard = ({ round, idx }) => (
    <div 
      onClick={() => enterRound(idx)}
      className={`p-6 border-2 transition-all relative cursor-pointer
        ${round.status === 'locked' ? 'opacity-30 grayscale cursor-not-allowed' : ''}
        ${round.status === 'completed' ? 'bg-[#2d4f39] border-[#1b3022] text-[#fcfaf2]' : 'bg-[#fcfaf2] border-[#1b3022] hover:bg-[#f5f2e6] shadow-[4px_4px_0px_#1b3022]'}`}
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-[9px] font-black uppercase tracking-widest">Node 0{idx + 1}</span>
        {round.status === "completed" && <CheckCircle2 className="w-4 h-4" />}
      </div>
      <h3 className="text-lg font-black rubik-heading mb-1">{round.title}</h3>
      <p className={`text-[10px] uppercase font-bold tracking-tighter ${round.status === 'completed' ? 'text-[#fcfaf2]/70' : 'text-[#5a7d64]'}`}>
        {round.desc}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcfaf2] text-[#1b3022] p-8 selection:bg-[#2d4f39]/20 font-['Rubik']">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap');
          .rubik-heading { font-family: 'Rubik', sans-serif; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; }
          .recording-pulse { animation: pulse 1.5s infinite; }
          @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }
        `}
      </style>

      <div className="max-w-5xl mx-auto pt-10">

        {/* --- STEP: OVERVIEW --- */}
        {step === "overview" && (
          <div className="text-center space-y-12 py-10">
            <header>
              <h1 className="text-5xl md:text-7xl rubik-heading mb-6 leading-none">
                ai mock // <span className="text-transparent border-b-4 border-[#1b3022] [-webkit-text-stroke:0.5px_#1b3022]">contest</span>
              </h1>
              <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#5a7d64]">neural extraction & hr voice diagnostic</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-[#f5f2e6] border-2 border-[#1b3022] p-6 shadow-[6px_6px_0px_#1b3022]">
                <Clock className="w-6 h-6 mx-auto mb-3" />
                <h4 className="text-[10px] font-black uppercase">Time Limit</h4>
                <p className="font-bold">4.0 HOURS</p>
              </div>
              <div className="bg-[#f5f2e6] border-2 border-[#1b3022] p-6 shadow-[6px_6px_0px_#1b3022]">
                <Mic className="w-6 h-6 mx-auto mb-3" />
                <h4 className="text-[10px] font-black uppercase">Voice Round</h4>
                <p className="font-bold">HR ANALYSIS</p>
              </div>
              <div className="bg-[#f5f2e6] border-2 border-[#1b3022] p-6 shadow-[6px_6px_0px_#1b3022]">
                <ShieldCheck className="w-6 h-6 mx-auto mb-3" />
                <h4 className="text-[10px] font-black uppercase">Evaluation</h4>
                <p className="font-bold">AI NATIVE</p>
              </div>
            </div>

            <button onClick={startContest} className="bg-[#1b3022] text-[#fcfaf2] px-12 py-5 font-black uppercase text-sm tracking-[0.3em] shadow-[10px_10px_0px_#d4d0b8] hover:shadow-none transition-all">
              Initialize Protocol →
            </button>
          </div>
        )}

        {/* --- STEP: ROUNDS --- */}
        {step === "rounds" && (
          <div className="space-y-10 animate-in fade-in duration-500">
            <h2 className="text-4xl rubik-heading border-b-2 border-[#1b3022] pb-6">Assessment Matrix</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rounds.map((r, i) => <RoundCard key={r.id} round={r} idx={i} />)}
            </div>
          </div>
        )}

        {/* --- STEP: IN ROUND (TECHNICAL) --- */}
        {step === "inRound" && (
          <div className="max-w-3xl mx-auto space-y-8 py-10 animate-in zoom-in-95 duration-300">
            <div className="bg-[#1b3022] text-[#fcfaf2] p-10 border-l-8 border-[#2d4f39] shadow-[12px_12px_0px_#d4d0b8]">
              <h2 className="text-3xl rubik-heading mb-4">{rounds[currentRoundIdx].title}</h2>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-8">Status: Simulation_Running</p>
              <div className="space-y-4 text-xs font-medium uppercase tracking-tighter opacity-80 leading-relaxed">
                <p>Establishing virtual environment...</p>
                <p>Retrieving contextual assessment queries...</p>
                <p className="text-[#2d4f39] bg-[#fcfaf2] inline-block px-2 italic">Machine eval buffer active</p>
              </div>
            </div>
            <button onClick={completeTechnicalRound} className="w-full bg-[#1b3022] text-[#fcfaf2] py-5 font-black uppercase text-xs tracking-[0.4em] shadow-[8px_8px_0px_#2d4f39] hover:bg-[#2d4f39] transition-all">
              Mark Round Completed
            </button>
          </div>
        )}

        {/* --- STEP: HR VOICE ROUND --- */}
        {step === "hrRound" && (
          <div className="max-w-4xl mx-auto space-y-8 py-10">
            <div className="bg-[#f5f2e6] border-4 border-[#1b3022] p-10 shadow-[10px_10px_0px_#1b3022]">
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-3xl rubik-heading">Final HR Round</h2>
                <div className="text-xl font-black bg-[#1b3022] text-[#fcfaf2] px-4 py-1">
                   {Math.floor(recordingTime / 60)}:{(recordingTime % 60).toString().padStart(2, '0')}
                </div>
              </div>

              <div className="bg-[#fcfaf2] border-2 border-[#1b3022] p-6 mb-10">
                <span className="text-[10px] font-black uppercase opacity-40 block mb-2">Current Prompt:</span>
                <p className="text-xl font-bold leading-tight lowercase rubik-body italic">
                  "Tell me about a time you faced a critical failure in a project. How did you resolve it and what was the neural growth outcome?"
                </p>
              </div>

              {/* Recording Panel */}
              <div className="flex flex-col items-center py-10 border-2 border-[#1b3022]/10 bg-[#fcfaf2]/50 mb-8">
                {isRecording ? (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-red-700 rounded-full recording-pulse mb-4 flex items-center justify-center">
                      <Square className="text-white w-6 h-6" />
                    </div>
                    <div className="flex gap-1 h-8 items-end mb-4">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-1 bg-red-700 animate-pulse" style={{ height: `${Math.random() * 100}%` }} />
                      ))}
                    </div>
                    <button onClick={stopRecording} className="text-[10px] font-black uppercase tracking-widest border-2 border-red-700 text-red-700 px-6 py-2 hover:bg-red-700 hover:text-white transition-all">
                      Terminate Recording
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    {!audioURL ? (
                      <button onClick={startRecording} className="group flex flex-col items-center gap-4">
                        <div className="w-20 h-20 border-4 border-[#1b3022] flex items-center justify-center hover:bg-[#1b3022] hover:text-[#fcfaf2] transition-all">
                           <Mic className="w-10 h-10" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest">Start Neural Voice Capture</span>
                      </button>
                    ) : (
                      <div className="flex flex-col items-center gap-6">
                        <div className="text-[10px] font-black uppercase bg-[#2d4f39] text-[#fcfaf2] px-4 py-1">Audio Buffer Captured</div>
                        <audio src={audioURL} controls className="mb-4" />
                        <div className="flex gap-4">
                          <button onClick={() => {setAudioURL(null); setRecordingTime(120);}} className="flex items-center gap-2 text-[10px] font-black uppercase border-2 border-[#1b3022] px-6 py-2 hover:bg-[#1b3022] hover:text-[#fcfaf2] transition-all">
                            <RotateCcw className="w-3 h-3" /> Re-Record
                          </button>
                          <button onClick={submitHRRound} className="flex items-center gap-2 text-[10px] font-black uppercase bg-[#1b3022] text-[#fcfaf2] px-8 py-2 hover:bg-[#2d4f39] transition-all">
                            Final Submit <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* --- STEP: COMPLETED --- */}
        {step === "completed" && (
          <div className="max-w-4xl mx-auto text-center space-y-12 py-10 animate-in fade-in duration-1000">
             <h1 className="text-5xl rubik-heading">Assessment // Finalized</h1>
             <div className="bg-[#f5f2e6] border-4 border-[#1b3022] p-12 shadow-[12px_12px_0px_#1b3022]">
                <div className="text-8xl font-black rubik-heading mb-8">{totalScore} <span className="text-xl opacity-30">/ 100</span></div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-left">
                  {Object.entries(finalScores).map(([key, val]) => (
                    <div key={key} className="bg-[#fcfaf2] border-2 border-[#1b3022] p-4 text-center">
                       <h4 className="text-[8px] font-black uppercase opacity-40 mb-1">{key}</h4>
                       <p className="font-bold">{val}/20</p>
                    </div>
                  ))}
                </div>
             </div>
             <button onClick={() => setStep("leaderboard")} className="bg-[#1b3022] text-[#fcfaf2] px-12 py-5 font-black uppercase text-xs tracking-[0.3em] shadow-[10px_10px_0px_#d4d0b8] hover:shadow-none transition-all">
               View Global Leaderboard →
             </button>
          </div>
        )}

        {/* --- STEP: LEADERBOARD --- */}
        {step === "leaderboard" && (
          <div className="space-y-10 animate-in fade-in duration-500">
            <h2 className="text-4xl rubik-heading text-center">Global // Standings</h2>
            <div className="bg-[#fcfaf2] border-4 border-[#1b3022] overflow-hidden shadow-[12px_12px_0px_#1b3022]">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#1b3022] text-[#fcfaf2]">
                  <tr className="text-[10px] font-black uppercase tracking-widest">
                    <th className="p-4">Rank</th>
                    <th className="p-4">Candidate</th>
                    <th className="p-4 text-right">Aggregate</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-bold uppercase tracking-tighter">
                  {[
                    { rank: 1, name: "Akash", score: 94 },
                    { rank: 2, name: "Shaurya", score: 91 },
                    { rank: 3, name: "YOU", score: totalScore, highlight: true },
                    { rank: 4, name: "Arnesh", score: 84 },
                    { rank: 5, name: "RandomUser", score: 80 },
                  ].sort((a,b) => b.score - a.score).map((user, i) => (
                    <tr key={i} className={`border-b border-[#1b3022]/10 ${user.highlight ? 'bg-[#1b3022] text-[#fcfaf2]' : 'hover:bg-[#f5f2e6]'}`}>
                      <td className="p-4 flex items-center gap-2">
                         {i + 1} {i < 3 && <Trophy className="w-3 h-3 text-[#d4d0b8]" />}
                      </td>
                      <td className="p-4">{user.name}</td>
                      <td className="p-4 text-right">{user.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center py-10">
              <button onClick={() => setStep("overview")} className="bg-[#1b3022] text-[#fcfaf2] px-8 py-3 font-black uppercase text-[10px] tracking-widest shadow-[6px_6px_0px_#d4d0b8] flex items-center gap-2 justify-center">
                 <RotateCcw className="w-3 h-3" /> Re-Initialize
              </button>
              <button onClick={() => navigate("/")} className="border-2 border-[#1b3022] px-8 py-3 font-black uppercase text-[10px] tracking-widest flex items-center gap-2 justify-center hover:bg-[#1b3022] hover:text-[#fcfaf2] transition-all">
                 <LayoutDashboard className="w-3 h-3" /> System Home
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ContestMode;