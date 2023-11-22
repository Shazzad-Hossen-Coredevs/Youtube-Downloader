"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from './assets/logo.png';
import yeii from './assets/excited.png';

const page = () => {
  const [inputVal, setInputVal]= useState('');
  const handleDownload = () => {
    console.log(inputVal);
  }
  return (
    <div>
      <div className='bg-sky-100 border-b border-sky-200'>
        <div className='p-5 max-w-[1200px] w-full mx-auto text-white flex justify-between items-center'>
          <div className='flex items-center gap-3 text-sky-800 text-3xl font-[600]'><Image src={logo} className='w-[50px]' alt='logo' /> YT DOWNLOADER</div>
          <div>
            {/* Other Nav Options */}
          </div>
        </div>
      </div>
      <main className='max-w-[1200px] w-full mx-auto'>

        <div className='max-w-[500px] w-full mx-auto mt-20'>
          <input type='text' className='border border-sky-300 rounded-lg p-6 w-full outline-sky-600 text-lg text-sky-800' placeholder='Youtube video url' value={inputVal} onChange={(e)=> setInputVal(e.target.value)}/>
          <div className='flex items-center gap-2 justify-center p-5 rounded-lg bg-sky-300 mt-5 text-sky-800 font-[600] drop-shadow text-xl cursor-pointer active:scale-95 select-none shadow-md' onClick={handleDownload}><Image src={yeii} alt='Yeii Icon' className='w-[30px]'/> Yeii. I am feeling lucky</div>
        </div>

      </main>
    </div>
  );
};

export default page;