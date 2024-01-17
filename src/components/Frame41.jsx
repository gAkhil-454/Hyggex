import React from "react";

import Rectangle from "../assets/Rectangle.svg";
import Comp from "../assets/Component 40.svg";
import Plus from "../assets/plus.svg";

function Frame41(){

    return(
    <div className="mt-32 flex justify-between"> 
        <div className="w-[217px] h-[80.60px] ml-10 justify-start items-start gap-[21.26px] inline-flex">
            <div className="w-[80.60px] h-[80.60px] relative">
                <div className="w-[80.60px] h-[80.60px] left-0 top-0 absolute bg-slate-50 rounded-full logo" > 
                        <div className="w-[98.80px] h-[100.66px] left-[20%] top-[25%] absolute">
                            <img src={Rectangle} />
                        </div>
                </div>
                
            </div>
            <div className="flex-col justify-center items-start gap-[10.63px] inline-flex">
                <div className="text-zinc-500 text-xs font-bold font-['Inter']">Published by</div>
                <div className="w-[115.14px] h-[34.54px] relative" > <img src={Comp} /> </div>
            </div>
        </div>


        <div className="w-[299px] h-[60px] justify-start items-center gap-2 inline-flex">
        <div className="w-[60px] h-[60px] relative" > <img src={Plus} /></div>
        <div className="text-blue-950 text-[28px] font-semibold font-['Inter']">Create Flashcard</div>
        </div>

    </div>
    );
}

export default Frame41;