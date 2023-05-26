import React from 'react';
import img1 from "/public/carousal.jpg"
import img2 from "/public/Superman-Patina-GL-17051-AVAILABLE-NOW-BANNER.jpg"
import img3 from "/public/Flash-Movie-Variant-GL-15496-BANNER.jpg.jpg"
import img4 from "/public/SP_Group_PREORDER.jpg"

const Carusal = () => {
    return (<div data-aos="zoom-in">
        <div className='py-5'>
            <div className="carousel w-3/4 h-2/3 mx-auto">
  <div id="slide1" className="carousel-item relative w-full ">
    
    <img src={img1} className="w-full  " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div></div>
    );
};

export default Carusal;