import React from 'react';
import img1 from "/public/section2-2.jpg"
import img2 from "/public/section2-1.jpg"
import img3 from "/public/section2.jpg"
import img4 from "/public/section2.jpeg"
import img5 from "/public/section2-5.jpg"
import img6 from "/public/section2-6.jpg"
import img7 from "/public/461012491185-1.jpeg"


const SpecialSec2 = () => {
    return (
        <div>
            
            <div className="flex justify-center  ">
                <div className="flex flex-col items-center justify-center">

                    <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                        <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                            <div className="text-3xl md:text-3xl font-bold ">
                                Make Your Childhood more Charming</div>
                        </div>
                        <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">

                            <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                <img src={img1} alt="" className="h-40 "/>
                            </div>
                            <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                    <img src={img2} alt="" className="h-32"/>
                                </div>
                                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                    <img src={img3} alt="" className="h-48"/>
                                </div>
                            </div>
                            <div className="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                                <img src={img4} alt="" className="h-96"/>
                            </div>
                            <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                    <img src={img5} alt="" className="h-48"/>
                                </div>
                                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                    <img src={img6} alt="" className="h-36"/>
                                </div>
                            </div>
                            <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                <img src={img7} alt="" className="h-40"/>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default SpecialSec2;
