import React, { useState} from "react";
function FAQ(){
    
        const [expanded0, setExpanded0] = useState(false);
      
        const toggleExpansion0 = () => {
          setExpanded0(!expanded0); }

          const [expanded1, setExpanded1] = useState(false);
      
        const toggleExpansion1 = () => {
          setExpanded1(!expanded1); }
    

          const [expanded2, setExpanded2] = useState(false);
      
        const toggleExpansion2 = () => {
          setExpanded2(!expanded2); }
    
    
return (
    <div className="mb-72"> 
    <div className="ml-12 mt-48 text-5xl font-bold font-['Inter'] text-transparent bg-clip-text bg-gradient-to-b from-blue-900 from-50% to-blue-600 text-blue-950  ">FAQ</div>
        <div className={`w-[848px]  px-6 py-[17px] ml-12 mt-12 rounded-xl border border-blue-600 overflow-hidden transition-all duration-700 ${expanded0 ? 'max-h-[150px]' : 'h-[58px]'}`}onClick={toggleExpansion0}>
                <div className="flex justify-between items-center">
                <div className="text-zinc-800 text-base font-semibold font-['Inter']  ">
                    Can education flashcards be used for all age groups?
                </div>
                <div className={`-6 h-6 relative justify-start items-end flex ${expanded0 ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.855 7.49599C4.91074 7.44006 4.97698 7.39567 5.04991 7.36539C5.12284 7.33511 5.20103 7.31952 5.28 7.31952C5.35897 7.31952 5.43716 7.33511 5.51009 7.36539C5.58302 7.39567 5.64926 7.44006 5.705 7.49599L12.48 14.272L19.255 7.49599C19.3677 7.38328 19.5206 7.31995 19.68 7.31995C19.8394 7.31995 19.9923 7.38328 20.105 7.49599C20.2177 7.60871 20.281 7.76159 20.281 7.92099C20.281 8.0804 20.2177 8.23328 20.105 8.34599L12.905 15.546C12.8493 15.6019 12.783 15.6463 12.7101 15.6766C12.6372 15.7069 12.559 15.7225 12.48 15.7225C12.401 15.7225 12.3228 15.7069 12.2499 15.6766C12.177 15.6463 12.1107 15.6019 12.055 15.546L4.855 8.34599C4.79907 8.29025 4.75468 8.22401 4.7244 8.15108C4.69412 8.07815 4.67853 7.99996 4.67853 7.92099C4.67853 7.84202 4.69412 7.76383 4.7244 7.6909C4.75468 7.61797 4.79907 7.55173 4.855 7.49599Z" fill="#28262C"/>
                    </svg>
                </div>
                </div>
                {expanded0 && (
                    <p className="text-zinc-800 mt-4 text-base font-['Inter']  ">
                    Yes, education flashcards can be tailored to different age groups and learning levels. There are
                    flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.
                </p>
                )}
        </div>

        <div className={`w-[848px]  px-6 py-[17px] ml-12 mt-12 rounded-xl border border-blue-600 overflow-hidden transition-all duration-700 ${expanded1 ? 'max-h-[150px]' : 'h-[58px]'}`}onClick={toggleExpansion1}>
                <div className="flex justify-between items-center">
                <div className="text-zinc-800 text-base font-semibold font-['Inter']  ">
                How do education flashcards work?
                </div>
                <div className={`-6 h-6 relative justify-start items-end flex ${expanded1 ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.855 7.49599C4.91074 7.44006 4.97698 7.39567 5.04991 7.36539C5.12284 7.33511 5.20103 7.31952 5.28 7.31952C5.35897 7.31952 5.43716 7.33511 5.51009 7.36539C5.58302 7.39567 5.64926 7.44006 5.705 7.49599L12.48 14.272L19.255 7.49599C19.3677 7.38328 19.5206 7.31995 19.68 7.31995C19.8394 7.31995 19.9923 7.38328 20.105 7.49599C20.2177 7.60871 20.281 7.76159 20.281 7.92099C20.281 8.0804 20.2177 8.23328 20.105 8.34599L12.905 15.546C12.8493 15.6019 12.783 15.6463 12.7101 15.6766C12.6372 15.7069 12.559 15.7225 12.48 15.7225C12.401 15.7225 12.3228 15.7069 12.2499 15.6766C12.177 15.6463 12.1107 15.6019 12.055 15.546L4.855 8.34599C4.79907 8.29025 4.75468 8.22401 4.7244 8.15108C4.69412 8.07815 4.67853 7.99996 4.67853 7.92099C4.67853 7.84202 4.69412 7.76383 4.7244 7.6909C4.75468 7.61797 4.79907 7.55173 4.855 7.49599Z" fill="#28262C"/>
                    </svg>
                </div>
                </div>
                {expanded1 && (
                    <p className="text-zinc-800 mt-4 text-base font-['Inter']  ">
                    Education flashcards work by presenting a question or prompt on one side anad the corresponding answer or information on the other.
                    Users can review the cards repeatedly, reinforcing their memory and enhancing learnaing through repetition.
                </p>
                )}
        </div>


        <div className={`w-[848px]  px-6 py-[17px] ml-12 mt-12 rounded-xl border border-blue-600 overflow-hidden transition-all duration-700 ${expanded2 ? 'max-h-[150px]' : 'h-[58px]'}`}onClick={toggleExpansion2}>
                <div className="flex justify-between items-center">
                <div className="text-zinc-800 text-base font-semibold font-['Inter']  ">
                Can education flashcards be used for test preparation?
                </div>
                <div className={`-6 h-6 relative justify-start items-end flex ${expanded2 ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.855 7.49599C4.91074 7.44006 4.97698 7.39567 5.04991 7.36539C5.12284 7.33511 5.20103 7.31952 5.28 7.31952C5.35897 7.31952 5.43716 7.33511 5.51009 7.36539C5.58302 7.39567 5.64926 7.44006 5.705 7.49599L12.48 14.272L19.255 7.49599C19.3677 7.38328 19.5206 7.31995 19.68 7.31995C19.8394 7.31995 19.9923 7.38328 20.105 7.49599C20.2177 7.60871 20.281 7.76159 20.281 7.92099C20.281 8.0804 20.2177 8.23328 20.105 8.34599L12.905 15.546C12.8493 15.6019 12.783 15.6463 12.7101 15.6766C12.6372 15.7069 12.559 15.7225 12.48 15.7225C12.401 15.7225 12.3228 15.7069 12.2499 15.6766C12.177 15.6463 12.1107 15.6019 12.055 15.546L4.855 8.34599C4.79907 8.29025 4.75468 8.22401 4.7244 8.15108C4.69412 8.07815 4.67853 7.99996 4.67853 7.92099C4.67853 7.84202 4.69412 7.76383 4.7244 7.6909C4.75468 7.61797 4.79907 7.55173 4.855 7.49599Z" fill="#28262C"/>
                    </svg>
                </div>
                </div>
                {expanded2 && (
                    <p className="text-zinc-800 mt-4 text-base font-['Inter']  ">
                    Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts.
                    terms, and facts. They Provide a quick and focused way to reinforce knowledge before exams.
                </p>
                )}
        </div>
    </div>
);
}

export default FAQ;