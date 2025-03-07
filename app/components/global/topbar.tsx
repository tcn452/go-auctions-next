// components/Header.js
import React from 'react';
import Image from 'next/image';
import { MdLocationOn, MdPhone, MdAccessTime } from 'react-icons/md';
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="lg:h-28 h-full py-4 bg-white flex lg:flex-row flex-col w-screen md:px-10 px-4 lg:justify-between items-center">
      <div className="w-fit">
        <Image
          src="/logo_full.png"
          alt="Logo"
          width={176} // 11rem at 16px base font size
          height={96} // h-24
          className="h-24 w-[11rem]"
        />
      </div>
      <div className="lg:flex flex-row hidden items-center gap-10">
        <div className="text-main-500 flex flex-row gap-3 justify-center items-center">
          <MdLocationOn size={45} />
          <div>
            <p className="font-bold">
              2 Lincoln Road
            </p>
            <p>
              Benoni, South Africa
            </p>
          </div>
        </div>
        <div className="text-main-500 flex flex-row gap-3 justify-center items-center">
          <MdPhone size={45} />
          <div>
            <p className="font-bold">
              +27 11 421 0133
            </p>
            <p>
              info@gopropertysolutions.co.za
            </p>
          </div>
        </div>
        <div className="text-main-500 flex flex-row gap-3 justify-center items-center">
          <MdAccessTime size={45} />
          <div>
            <p className="font-bold">
              9:00 - 17:00
            </p>
            <p>
              Monday to Saturday
            </p>
          </div>
        </div>
      </div>
      <div className="text-white hidden md:flex flex-row gap-2">
        <a href="#" className="hover:bg-main-300 bg-main-500 h-10 w-10 flex justify-center items-center rounded-full">
          <FaFacebook size={26} />
        </a>
        <a href="#" className="hover:bg-main-300 bg-main-500 h-10 w-10 flex justify-center items-center rounded-full">
          <FaWhatsapp size={26} />
        </a>
        <a href="#" className="hover:bg-main-300 bg-main-500 h-10 w-10 flex justify-center items-center rounded-full">
          <FaLinkedin size={26} />
        </a>
        <a href="#" className="hover:bg-main-300 bg-main-500 h-10 w-10 flex justify-center items-center rounded-full">
          <FaInstagram size={26} />
        </a>
        <a href="#" className="hover:bg-main-300 bg-main-500 h-10 w-10 flex justify-center items-center rounded-full">
          <FaYoutube size={26} />
        </a>
      </div>
    </div>
  );
};

export default Topbar;