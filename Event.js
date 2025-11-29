import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Calendar, Clock, Ticket, Shield, ChevronRight, Star, Camera, Lock, CheckCircle, AlertTriangle, X } from 'lucide-react';

export default function App() {
  const [page, setPage] = useState('intro'); // intro, briefing, proposal, success
  const [showError, setShowError] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [confetti, setConfetti] = useState([]);

  // --- Page 1: ZPD Clearance / Intro ---
  const IntroPage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      {/* Blue Police Lights Animation */}
      <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 animate-police-lights"></div>

      <div className="bg-slate-800/90 border border-blue-500/50 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center relative z-10 backdrop-blur-sm">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-900/50 p-4 rounded-full border-2 border-blue-400">
            <Shield className="w-16 h-16 text-blue-400" />
          </div>
        </div>
        
        <h2 className="text-blue-400 tracking-[0.3em] text-xs font-bold mb-2 uppercase">ZPD Secure Network</h2>
        <h1 className="text-3xl font-black mb-4 font-mono">DATE PROPOSAL</h1>
        <p className="text-slate-300 mb-8 font-mono text-sm">
          Recipient: <span className="text-yellow-400 font-bold text-lg">VARSHA</span>
        </p>

        <button 
          onClick={() => setPage('briefing')}
          className="group relative w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
          <Lock className="w-4 h-4" /> UNLOCK PLAN #2025
        </button>
      </div>
    </div>
  );

  // --- Page 2: Date Briefing ---
  const BriefingPage = () => (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center p-6 font-sans">
      <div className="w-full max-w-lg space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => setPage('intro')} className="text-orange-400 text-sm hover:underline">← Back</button>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500 text-sm uppercase tracking-widest font-bold">Date Details</span>
        </div>

        <h1 className="text-4xl font-black text-gray-800 leading-tight">
          New Date Plan <br/>
          <span className="text-orange-500">Proposed</span>
        </h1>

        <div className="bg-white p-6 rounded-3xl shadow-xl border-b-4 border-orange-200 transform transition-all hover:scale-[1.01]">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-orange-100 p-3 rounded-2xl">
              <Camera className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">The Movie</h3>
              <p className="text-gray-500 text-xs uppercase font-bold">Priority Watch</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 text-center mb-2">
            <span className="text-6xl animate-bounce inline-block">🐰🦊</span>
          </div>
          <p className="text-gray-600 text-sm text-center">
            Zootopia 2 is finally here. <br/>Mandatory attendance required.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-3xl shadow-lg border-b-4 border-blue-200">
            <MapPin className="w-6 h-6 text-blue-500 mb-2" />
            <p className="text-xs text-gray-400 font-bold uppercase">Location</p>
            <p className="font-bold text-gray-800">Orion Mall</p>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-lg border-b-4 border-green-200">
            <Clock className="w-6 h-6 text-green-500 mb-2" />
            <p className="text-xs text-gray-400 font-bold uppercase">Time</p>
            <p className="font-bold text-gray-800">4:15 PM</p>
          </div>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-xl">
          <p className="text-yellow-800 text-sm font-medium flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            Bonus Objective: There's food after the movie.
          </p>
        </div>

        <button 
          onClick={() => setPage('proposal')}
          className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mt-4"
        >
          See The Question <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  // --- Page 3: The Proposal (Yes/No) ---
  const ProposalPage = () => {
    const handleNoHover = () => {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      setNoBtnPosition({ x, y });
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="text-center relative z-10 max-w-lg w-full">
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white">
            <h1 className="text-4xl font-black text-gray-800 mb-2">
              Status: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">PENDING APPROVAL</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 mt-4 leading-relaxed">
              Hey Varsha! <br/>
              Will you be my date for Zootopia 2?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center h-32">
              <button
                onClick={() => setPage('success')}
                className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-green-200/50 transform hover:scale-105 transition-all flex items-center justify-center gap-2 z-20"
              >
                <CheckCircle className="w-5 h-5" />
                Yes, let's go!
              </button>

              <div 
                className="relative w-full sm:w-auto"
                style={{
                  transform: `translate(${noBtnPosition.x}px, ${noBtnPosition.y}px)`,
                  transition: 'all 0.2s ease-out'
                }}
                onMouseEnter={handleNoHover}
              >
                <button
                  onClick={() => setShowError(true)}
                  className="w-full sm:w-auto bg-white text-gray-400 font-bold py-4 px-8 rounded-full border-2 border-gray-200 hover:bg-gray-50 transition-colors z-10"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Error Modal */}
        {showError && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl p-6 max-w-sm w-full animate-shake border-4 border-red-100 text-center">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">System Error</h3>
                    <p className="text-gray-600 mb-6">
                        This option is strictly prohibited by the ZPD. Please confirm attendance!
                    </p>
                    <button 
                        onClick={() => setShowError(false)}
                        className="w-full bg-gray-900 text-white font-bold py-3 px-4 rounded-xl"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )}
      </div>
    );
  };

  // --- Page 4: Success ---
  const SuccessPage = () => {
    useEffect(() => {
      // Trigger confetti
      const newConfetti = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        emoji: ['🍩', '🥕', '🐰', '🦊', '💖', '🚔'][Math.floor(Math.random() * 6)]
      }));
      setConfetti(newConfetti);
    }, []);

    return (
      <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
        {confetti.map((c) => (
          <div
            key={c.id}
            className="absolute text-3xl animate-fall"
            style={{
              left: `${c.left}%`,
              top: '-10%',
              animationDelay: `${c.delay}s`,
              animation: `fall 3s linear infinite`
            }}
          >
            {c.emoji}
          </div>
        ))}

        <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-green-500 max-w-md w-full text-center animate-bounce-in relative z-10">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
             <div className="bg-green-500 text-white p-4 rounded-full shadow-lg border-4 border-green-100">
               <Heart className="w-12 h-12 fill-current animate-pulse" />
             </div>
          </div>
          
          <div className="mt-8">
            <h1 className="text-3xl font-black text-gray-800 mb-2">IT'S A DATE!</h1>
            <p className="text-gray-500 mb-8">Get ready for our date, Varsha.</p>

            {/* Ticket UI */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white text-left relative overflow-hidden group">
                {/* Perforated edge circles */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 bg-green-50 rounded-full"></div>
                <div className="absolute top-1/2 -right-3 w-6 h-6 bg-green-50 rounded-full"></div>
                
                <div className="flex justify-between items-start mb-4 border-b border-gray-700 pb-4">
                    <div>
                        <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Movie</p>
                        <p className="text-xl font-bold text-green-400">Zootopia 2</p>
                    </div>
                    <Ticket className="text-gray-600" />
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Guest</span>
                        <span className="font-bold">Varsha</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Venue</span>
                        <span className="font-bold">Orion Mall</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Time</span>
                        <span className="font-bold text-yellow-400">4:15 PM</span>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-dashed border-gray-700 text-center">
                    <p className="font-mono text-xs text-gray-500">ADMIT TWO • NON-REFUNDABLE • ZPD AUTHORIZED</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        @keyframes police-lights {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-police-lights {
          background-size: 200% 200%;
          animation: police-lights 2s ease infinite;
        }
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 1.5s infinite;
        }
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          position: absolute;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        .animate-shake {
            animation: shake 0.2s ease-in-out 0 2;
        }
      `}</style>

      {page === 'intro' && <IntroPage />}
      {page === 'briefing' && <BriefingPage />}
      {page === 'proposal' && <ProposalPage />}
      {page === 'success' && <SuccessPage />}
    </>
  );
}


