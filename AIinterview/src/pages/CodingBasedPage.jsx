import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const CodingBasedPage = ()=>{
  const [selectedCompany, setSelectedCompany] = useState('Google');
  const [difficulty, setDifficulty] = useState('Medium');
  const [numQuestions, setNumQuestions] = useState(10);

  const companies = ['Google', 'Amazon', 'Microsoft', 'Meta', 'Adobe', 'Flipkart'];
  const difficulties = [
    { level: 'Easy', desc: 'Perfect for beginners' },
    { level: 'Medium', desc: 'Intermediate challenges' },
    { level: 'Hard', desc: 'Advanced problems' }
  ];
  const questionOptions = [3, 5, 10];

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

      <div className="max-w-4xl mx-auto pt-12 rubik-body">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 rubik-heading text-[#1b3022]">
            Configure Your Coding Mock
          </h1>
          <p className="text-[#5a7d64] text-xs font-bold uppercase tracking-widest">
            Customize your challenge based on company patterns, topics, and difficulty level.
          </p>
        </header>

        {/* Configuration Card */}
        <div className="bg-[#f5f2e6] border-4 border-[#1b3022] p-8 md:p-12 shadow-[12px_12px_0px_#1b3022] relative overflow-hidden">
          
          {/* Section 1: Company or Topic */}
          <section className="mb-10">
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-xs font-black uppercase tracking-widest text-[#1b3022]">Select Company or Topic</h2>
              <div className="flex bg-[#fcfaf2] border-2 border-[#1b3022] p-1">
                <button className="px-4 py-1 text-[10px] font-black bg-[#1b3022] text-[#fcfaf2] uppercase">Companies</button>
                <button className="px-4 py-1 text-[10px] font-black text-[#1b3022] uppercase opacity-40">Topics</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {companies.map((company) => (
                <button
                  key={company}
                  onClick={() => setSelectedCompany(company)}
                  className={`px-5 py-2 text-[11px] font-bold uppercase border-2 transition-all
                    ${selectedCompany === company 
                      ? 'bg-[#1b3022] border-[#1b3022] text-[#fcfaf2]' 
                      : 'border-[#1b3022]/20 text-[#1b3022] hover:border-[#1b3022]'}`}
                >
                  {company}
                </button>
              ))}
            </div>
          </section>

          {/* Section 2: Difficulty Level */}
          <section className="mb-10">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#1b3022] mb-6">Difficulty Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {difficulties.map((d) => (
                <button
                  key={d.level}
                  onClick={() => setDifficulty(d.level)}
                  className={`relative p-6 border-2 text-left transition-all
                    ${difficulty === d.level 
                      ? 'bg-[#1b3022] border-[#1b3022] text-[#fcfaf2] shadow-[4px_4px_0px_#d4d0b8]' 
                      : 'bg-[#fcfaf2] border-[#1b3022]/20 text-[#1b3022] hover:border-[#1b3022]'}`}
                >
                  {difficulty === d.level && (
                    <div className="absolute top-2 right-2 bg-[#2d4f39] p-1">
                      <Check className="w-3 h-3 text-[#fcfaf2]" />
                    </div>
                  )}
                  <div className={`text-sm font-black mb-1 rubik-heading ${difficulty === d.level ? 'text-[#fcfaf2]' : 'text-[#1b3022]'}`}>
                    {d.level}
                  </div>
                  <div className={`text-[10px] uppercase font-bold tracking-tight ${difficulty === d.level ? 'text-[#fcfaf2]/70' : 'text-[#5a7d64]'}`}>
                    {d.desc}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Section 3: Number of Questions */}
          <section className="mb-12">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#1b3022] mb-6">Number of Questions</h2>
            <div className="flex gap-4">
              {questionOptions.map((num) => (
                <button
                  key={num}
                  onClick={() => setNumQuestions(num)}
                  className={`px-8 py-3 text-xs font-black uppercase border-2 transition-all
                    ${numQuestions === num 
                      ? 'bg-[#1b3022] border-[#1b3022] text-[#fcfaf2]' 
                      : 'bg-[#fcfaf2] border-[#1b3022]/20 text-[#1b3022] hover:border-[#1b3022]'}`}
                >
                  {num} Questions
                </button>
              ))}
            </div>
          </section>

          {/* Action Button */}
          <div className="text-center">
            <button className="bg-[#1b3022] text-[#fcfaf2] px-12 py-4 border-2 border-[#1b3022] font-black text-xs uppercase tracking-[0.2em] shadow-[8px_8px_0px_#d4d0b8] hover:bg-[#2d4f39] hover:shadow-none transition-all active:translate-x-1 active:translate-y-1">
              Start Coding Mock <ArrowRight className="inline ml-2 w-4 h-4" />
            </button>
            <p className="text-[9px] font-bold text-[#5a7d64] uppercase mt-4 tracking-tighter">Please complete all selections to continue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingBasedPage;