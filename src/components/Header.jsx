import React from "react";
import Rectangle from "../assets/Rectangle.svg";
import Comp from "../assets/Component 40.svg";

function Header(){
    return(
//          <header style={{display: 'flex', justifyContent:"space-between"}}>
//          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
//             <img  src={Rectangle} />
//             <img src={Comp} />
//          </div>
         
//          <div style={{width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
// <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'flex'}}>
// <div style={{color: '#3A3740', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Home</div>
// <div style={{color: '#3A3740', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Flashcard</div>
// <div style={{color: '#3A3740', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Contact</div>
// </div>
// <div style={{color: '#3A3740', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>FAQ</div>
// <div style={{paddingLeft: 40, paddingRight: 40, paddingTop: 13, paddingBottom: 13, background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)', borderRadius: 32, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
// <div style={{color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Login</div>
// </div>
// </div>
//         </header> 

<header className="flex justify-between mt-2">
  <div className="justify-start items-center gap-2 inline-flex">
    <img src={Rectangle} alt="Rectangle" className="ml-10"/>
    <img src={Comp} alt="Comp" />
  </div>

  <div className="w-[525px] h-12 justify-start items-center gap-10 inline-flex">
<div className="justify-start items-start gap-10 flex">
<div className="text-neutral-700 text-lg font-normal font-['Inter']">Home</div>
<div className="text-neutral-700 text-lg font-normal font-['Inter']">Flashcard</div>
<div className="text-neutral-700 text-lg font-normal font-['Inter']">Contact</div>
</div>
<div className="text-neutral-700 text-lg font-normal font-['Inter']">FAQ</div>
<div className="px-10 py-[13px] bg-gradient-to-b from-blue-950 to-blue-800 rounded-[32px] justify-center items-center gap-2.5 flex">
<div className="text-white text-lg font-medium font-['Inter']">Login</div>
</div>
</div>
 
</header>

    );
}

export default Header;