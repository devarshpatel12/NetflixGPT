import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='px-12 absolute text-white bg-gradient-to-r from-black aspect-video w-screen pt-[20%] '>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-8 text-lg w-1/3'>{overview}</p>
      <div className='flex'>
        <button className='bg-white  rounded-lg flex text-black text-lg p-4 px-12 hover:opacity-80'>
          <svg className="h-8 w-8 text-white-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Play
        </button>
        <button className='bg-gray-800 mx-3 opacity-80 rounded-lg flex text-white text-lg p-4 px-12'>
          More Info
        </button>  
      </div>
    </div>
  );
};

export default VideoTitle;
