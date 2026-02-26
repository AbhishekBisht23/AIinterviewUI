import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Plus, 
  Loader2, 
  ChevronRight, 
  CheckCircle2, 
  ArrowLeft, 
  Send 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CoreCSQuestionnaire = () => {
  const navigate = useNavigate();
  
  // --- WORKFLOW STATE ---
  const [step, setStep] = useState("setup"); // setup, loading, questions, submitted
  const [selectedTopics, setSelectedTopics] = useState(["Operating Systems"]);
  const [customTopic, setCustomTopic] = useState("");
  const [questionCount, setQuestionCount] = useState(5);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [generatedQuestions, setGeneratedQuestions] = useState([]);

  const defaultTopics = [
    "Operating Systems", "DBMS", "Computer Networks", 
    "OOPS", "System Design", "Data Structures", "Algorithms"
  ];

  // --- ACTIONS ---
  const toggleTopic = (topic) => {
    setSelectedTopics(prev => 
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const addCustomTopic = (e) => {
    if (e.key === 'Enter' && customTopic.trim()) {
      if (!selectedTopics.includes(customTopic)) {
        setSelectedTopics([...selectedTopics, customTopic.trim()]);
      }
      setCustomTopic("");
    }
  };

  const handleGenerate = () => {
    setStep("loading");
    // Simulate AI Generation
    setTimeout(() => {
      const dummyQuestions = Array.from({ length: questionCount }, (_, i) => ({
        id: i + 1,
        text: `Explain a core concept related to ${selectedTopics[i % selectedTopics.length]}. Specifically, how does it handle ${i % 2 === 0 ? 'resource allocation' : 'concurrency'}?`,
      }));
      setGeneratedQuestions(dummyQuestions);
      setStep("questions");
    }, 2000);
  };

  const handleAnswerChange = (val) => {
    setAnswers({ ...answers, [currentIdx]: val });
  };

  const handleFinalSubmit = () => {
    setStep("submitted");
  };

  // --- UI COMPONENTS ---

  const TopicChip = ({ label, isSelected, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border-2 transition-all
        ${isSelected 
          ? 'bg-[#1b3022] text-[#fcfaf2] border-[#1b3022]' 
          : 'bg-transparent text-[#1b3022] border-[#1b3022]/20 hover:border-[#1b3022]'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#fcfaf2] text-[#1b3022] p-8 selection:bg-[#2d4f39]/20 font-['Rubik']">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap');
          .rubik-heading { font-family: 'Rubik', sans-serif; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; }
        `}
      </style>

      <div className="max-w-5xl mx-auto pt-10">
        
        {/* --- STEP: SETUP --- */}
        {step === "setup" && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <header className="text-center">
              <h1 className="text-4xl md:text-5xl rubik-heading mb-4">Core CS // <span className="text-transparent border-b-4 border-[#1b3022] [-webkit-text-stroke:0.5px_#1b3022]">Protocol</span></h1>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5a7d64]">Neural assessment configuration module</p>
            </header>

            <div className="bg-[#f5f2e6] border-4 border-[#1b3022] p-8 shadow-[12px_12px_0px_#1b3022]">
              <div className="space-y-10">
                {/* Topics Selection */}
                <section>
                  <h3 className="text-xs font-black uppercase mb-6 tracking-widest flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> 01. Select Domain Topics
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {defaultTopics.map(topic => (
                      <TopicChip 
                        key={topic} 
                        label={topic} 
                        isSelected={selectedTopics.includes(topic)} 
                        onClick={() => toggleTopic(topic)}
                      />
                    ))}
                  </div>
                  <div className="relative max-w-sm">
                    <Plus className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
                    <input 
                      type="text"
                      placeholder="ADD CUSTOM TOPIC..."
                      className="w-full bg-transparent border-2 border-[#1b3022] py-2 pl-10 pr-4 text-[10px] font-bold outline-none placeholder-[#1b3022]/30"
                      value={customTopic}
                      onChange={(e) => setCustomTopic(e.target.value)}
                      onKeyDown={addCustomTopic}
                    />
                  </div>
                </section>

                {/* Question Count */}
                <section>
                  <h3 className="text-xs font-black uppercase mb-6 tracking-widest">02. Question Magnitude</h3>
                  <div className="flex gap-4">
                    {[5, 10, 15].map(num => (
                      <button
                        key={num}
                        onClick={() => setQuestionCount(num)}
                        className={`flex-1 py-4 border-2 font-black text-sm transition-all
                          ${questionCount === num ? 'bg-[#1b3022] text-[#fcfaf2] border-[#1b3022]' : 'border-[#1b3022]/20 hover:border-[#1b3022]'}`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </section>

                <button 
                  disabled={selectedTopics.length === 0}
                  onClick={handleGenerate}
                  className="w-full bg-[#1b3022] text-[#fcfaf2] py-5 font-black uppercase text-xs tracking-[0.3em] hover:bg-[#2d4f39] disabled:opacity-30 transition-all shadow-[8px_8px_0px_#d4d0b8] active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  Generate AI Assessment →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- STEP: LOADING --- */}
        {step === "loading" && (
          <div className="flex flex-col items-center justify-center py-40 animate-pulse">
            <Loader2 className="w-12 h-12 animate-spin text-[#1b3022] mb-6" />
            <h2 className="text-xl font-black rubik-heading">Constructing Matrix...</h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#5a7d64] mt-2">Injecting AI Knowledge base</p>
          </div>
        )}

        {/* --- STEP: QUESTIONS --- */}
        {step === "questions" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigator */}
            <aside className="lg:col-span-1">
              <div className="bg-[#f5f2e6] border-2 border-[#1b3022] p-4 shadow-[4px_4px_0px_#1b3022]">
                <h3 className="text-[10px] font-black uppercase mb-4 opacity-50">Neural Index</h3>
                <div className="grid grid-cols-5 gap-1">
                  {generatedQuestions.map((q, idx) => (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIdx(idx)}
                      className={`h-10 text-[10px] font-black border transition-all
                        ${currentIdx === idx ? 'bg-[#1b3022] text-[#fcfaf2] border-[#1b3022]' : answers[idx] ? 'bg-[#2d4f39] text-[#fcfaf2] border-[#1b3022]' : 'bg-transparent border-[#1b3022]/10'}`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Question Area */}
            <main className="lg:col-span-3 space-y-6">
              <div className="bg-[#1b3022] text-[#fcfaf2] p-8 border-l-8 border-[#2d4f39] relative overflow-hidden">
                <span className="text-[10px] font-black uppercase opacity-40 block mb-4">Question {currentIdx + 1} // Input_Node</span>
                <p className="text-lg font-medium leading-relaxed lowercase rubik-body">
                  {generatedQuestions[currentIdx]?.text}
                </p>
              </div>

              <div className="space-y-4">
                <textarea 
                  className="w-full bg-transparent border-4 border-[#1b3022] p-6 text-sm font-medium outline-none focus:bg-[#f5f2e6] min-h-[300px] placeholder-[#1b3022]/20"
                  placeholder="INPUT RESPONSE DATA..."
                  value={answers[currentIdx] || ""}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                />
                
                <div className="flex justify-between items-center">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-40">
                    Characters: {answers[currentIdx]?.length || 0}
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                      className="px-6 py-2 border-2 border-[#1b3022] text-[10px] font-black uppercase hover:bg-[#1b3022] hover:text-[#fcfaf2] transition-all"
                    >
                      Previous
                    </button>
                    {currentIdx === generatedQuestions.length - 1 ? (
                      <button 
                        onClick={handleFinalSubmit}
                        className="px-8 py-2 bg-[#1b3022] text-[#fcfaf2] text-[10px] font-black uppercase tracking-widest hover:bg-[#2d4f39] transition-all"
                      >
                        Final Submission
                      </button>
                    ) : (
                      <button 
                        onClick={() => setCurrentIdx(prev => Math.min(generatedQuestions.length - 1, prev + 1))}
                        className="px-8 py-2 bg-[#1b3022] text-[#fcfaf2] text-[10px] font-black uppercase tracking-widest hover:bg-[#2d4f39] transition-all flex items-center gap-2"
                      >
                        Next <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}

        {/* --- STEP: SUBMITTED --- */}
        {step === "submitted" && (
          <div className="max-w-2xl mx-auto text-center py-20 animate-in zoom-in duration-500">
            <div className="inline-block p-6 bg-[#2d4f39] text-[#fcfaf2] mb-8 border-4 border-[#1b3022]">
              <CheckCircle2 className="w-16 h-16" />
            </div>
            <h2 className="text-4xl font-black rubik-heading mb-4">Transmission Successful</h2>
            <p className="text-sm font-medium uppercase tracking-tight text-[#5a7d64] mb-12">
              Your neural responses have been buffered for machine evaluation. Result extraction will follow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate("/interviewresultpage")}
                className="bg-[#1b3022] text-[#fcfaf2] px-10 py-4 font-black text-xs uppercase tracking-widest shadow-[6px_6px_0px_#d4d0b8]"
              >
                View Feedback Matrix
              </button>
              <button 
                onClick={() => navigate("/")}
                className="border-2 border-[#1b3022] px-10 py-4 font-black text-xs uppercase tracking-widest hover:bg-[#1b3022] hover:text-[#fcfaf2] transition-all"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CoreCSQuestionnaire;