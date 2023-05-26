import React from 'react';
import { FaFacebook,FaTwitter,FaInstagram,FaTiktok,FaYoutube,FaPhone,  } from 'react-icons/fa';
import { HiMail ,HiLocationMarker} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import img from "/public/logo.png"

const Footer = () => {
    return (
        <div className='bg-gray-600 '>
            <footer className="text-blue-200 body-font ">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Link to={'/'}> <img className='w-10 md:w-20' src={img} alt="" /> </Link>
      <p className="mt-2 text-sm text-blue-50">Discover endless fun at Playtime Toy Store!</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
     
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-blue-100 tracking-widest text-sm mb-3">QuickLinks</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-blue-200 hover:text-gray-800">Help Center </a>
          </li>
          <li>
            <a className="text-blue-200 hover:text-gray-800">Contact us </a>
          </li>
          <li>
            <a className="text-blue-200 hover:text-gray-800">Redeem vouchers</a>
          </li>
         
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-blue-100 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-blue-200 hover:text-gray-800">Marvel </a>
          </li>
          <li>
            <a className="text-blue-200 hover:text-gray-800">Transformer </a>
          </li>
          <li>
            <a className="text-blue-200 hover:text-gray-800">Dc</a>
          </li>
          <li>
            <a className="text-blue-200 hover:text-gray-800">Star Wars</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-blue-100 tracking-widest text-sm mb-3">Address</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-blue-200 hover:text-gray-800 flex items-center gap-1"><HiLocationMarker/> Faridpur,bangladesh</a>
          </li>
          <li>
            <a className="text-blue-200 hover:text-gray-800 flex items-center gap-1"><HiMail/> joysutradharaj@gmail.com </a>
          </li>
          <li>
            <a className="text-blue-200 hover:text-gray-800 flex items-center gap-1"><FaPhone/> +8801816940781</a>
          </li>
         
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-500">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-blue-50 text-sm text-center sm:text-left">© 2023 PlayTime —
       
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
     


        <a className="text-blue-50 px-2"  href='https://www.facebook.com/groups/phwebdevelopmentbatch7'>
          <FaInstagram/>
          </a>
        <a className="text-blue-50" href='https://www.facebook.com/groups/phwebdevelopmentbatch7'>
          <FaFacebook/>
          </a>
       
        <a className="ml-3 text-blue-50" href='https://www.facebook.com/groups/phwebdevelopmentbatch7'>
         <FaYoutube/>
        </a>
        <a className="ml-3 text-blue-50" href='https://www.facebook.com/groups/phwebdevelopmentbatch7'>
          <FaTwitter/>
        </a>
        <a className="ml-3 text-blue-50" href='https://www.facebook.com/groups/phwebdevelopmentbatch7'>
         <FaTiktok/>
        </a>
      </span>
    </div>
  </div>
</footer>
        </div>
    );
};


export default Footer;


