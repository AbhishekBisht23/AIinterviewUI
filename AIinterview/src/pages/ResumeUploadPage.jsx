import React, { useState, useRef } from 'react';
import { 
  FileText, 
  Upload, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResumeUploadPage = () => {
    const navigate = useNavigate();
    const startResumebasedInterview= ()=>{
        navigate("/resumebasedinterview")
    }
  const [selectedResume, setSelectedResume] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Triggered when the "browse files" or drag-and-drop area is clicked
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setSelectedResume('new_upload'); // Automatically select the new upload
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white p-8 font-sans">
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-3xl mx-auto pt-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="bg-[#1e2548] border border-blue-500/30 text-blue-400 text-[10px] px-3 py-1 rounded-full flex items-center gap-1 font-bold">
              <Sparkles className="w-3 h-3" /> AI-Personalized
            </span>
            <h1 className="text-4xl font-bold tracking-tight">Resume-Based AI Mock Interview</h1>
          </div>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Select your previously uploaded resume or upload a new one to generate personalized interview questions.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-[#11162d]/60 border border-white/5 rounded-3xl p-8 backdrop-blur-md">
          
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-200">Choose From Existing Resumes</h2>
            <div className="space-y-3">
              
              {/* Individual Resume 1 */}
              <div 
                onClick={() => { setSelectedResume(1); setUploadedFile(null); }}
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-200 group
                  ${selectedResume === 1 ? 'bg-[#1e2548] border-blue-500/50 shadow-lg' : 'bg-[#161b33]/40 border-white/5 hover:border-white/10'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#1c2342] rounded-lg">
                    <FileText className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">Resume_Abhishek_SDE.pdf</span>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${selectedResume === 1 ? 'border-blue-500 bg-blue-500' : 'border-white/20'}`}>
                  {selectedResume === 1 && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>

              {/* Individual Resume 2 */}
              <div 
                onClick={() => { setSelectedResume(2); setUploadedFile(null); }}
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-200 group
                  ${selectedResume === 2 ? 'bg-[#1e2548] border-blue-500/50 shadow-lg' : 'bg-[#161b33]/40 border-white/5 hover:border-white/10'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#1c2342] rounded-lg">
                    <FileText className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">Resume_Internship_2025.pdf</span>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${selectedResume === 2 ? 'border-blue-500 bg-blue-500' : 'border-white/20'}`}>
                  {selectedResume === 2 && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>

              {/* Individual Resume 3 */}
              <div 
                onClick={() => { setSelectedResume(3); setUploadedFile(null); }}
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-200 group
                  ${selectedResume === 3 ? 'bg-[#1e2548] border-blue-500/50 shadow-lg' : 'bg-[#161b33]/40 border-white/5 hover:border-white/10'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#1c2342] rounded-lg">
                    <FileText className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">Resume_Final_Version.pdf</span>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${selectedResume === 3 ? 'border-blue-500 bg-blue-500' : 'border-white/20'}`}>
                  {selectedResume === 3 && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>

            </div>
          </div>

          {/* OR Divider */}
          <div className="relative my-10 flex items-center">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="px-3 text-[10px] font-bold text-gray-500 bg-[#0c0f24] uppercase tracking-widest absolute left-1/2 -translate-x-1/2 rounded-full border border-white/5 py-1">OR</span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>

          {/* Upload Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-200">Upload New Resume</h2>
            
            {/* Hidden Input */}
            <input 
              type="file" 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />

            <div 
              onClick={handleUploadClick}
              className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer group
                ${uploadedFile 
                  ? 'border-green-500/40 bg-green-500/5' 
                  : 'border-blue-500/20 bg-[#161b33]/30 hover:bg-[#161b33]/50'}`}
            >
              {uploadedFile ? (
                <>
                  <CheckCircle2 className="w-10 h-10 text-green-500 mb-3" />
                  <p className="text-green-400 font-medium">{uploadedFile.name}</p>
                  <p className="text-gray-500 text-xs mt-1">Click to change file</p>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6 text-blue-500" />
                  </div>
                  <p className="text-gray-200 font-medium mb-1">Drag & drop your resume here</p>
                  <p className="text-gray-500 text-xs">or <span className="text-blue-500 hover:underline">browse files</span></p>
                  <div className="mt-4 space-y-1">
                    <p className="text-[10px] text-gray-600 uppercase">Supports: PDF, DOC, DOCX</p>
                    <p className="text-[10px] text-gray-600 uppercase">Max file size: 5MB</p>
                  </div>
                </>
              )}
            </div>
          </div>

          <button onClick={startResumebasedInterview}
            disabled={!selectedResume}
            className={`w-full mt-10 py-4 rounded-xl font-semibold transition-all shadow-xl
              ${selectedResume ? 'bg-[#3b4160] hover:bg-[#484f75] text-white active:scale-[0.98]' : 'bg-[#1c2342] text-gray-500 cursor-not-allowed'}`}
          >
            Start Resume-Based Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadPage;