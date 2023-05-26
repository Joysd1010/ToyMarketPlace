import React from 'react';
import { Link } from 'react-router-dom';
import img from "/public/banner.png"
const Banner = () => {
    return (
        <div className='mx-2 md:mx-20'>
            <img src={img} className='rounded-xl' alt="" />
            <div>
                <Link to={'/all'}>
                <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-delay="2000"
     data-aos-duration="5000">
                    <button className="btn btn-outline text-sm md:text-xl btn-warning absolute text-white hidden md:block  md:bottom-20 md:right-80">All new collections</button>
                    

</div>
            </Link></div>
        </div>
    );
};

export default Banner;