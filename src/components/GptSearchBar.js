import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstant';
import { useRef } from 'react';
import openai from '../utils/openai';
const GptSearchBar = () => {
  const searchText=useRef(null);
  const handleGPTSearchClick=async ()=>{
      console.log(searchText.current.value);
      const gptQuery="Act as a Movie Recommadation system and suggest some movies for the query"+searchText.current.value+" only give name of 5 movie,comma separated like the example reult given ahead.Example Result: Gadar,Sholay,Don,Main Hu na,Golmaal"
      const gptResults=await openai.chat.completions.create({
        messages: [{ role: 'user', content:gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResults.choices);
  };
    const langKey =useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%]'>
      <form onSubmit={(e=>e.preventDefault())} className='grid grid-cols-12 gap-4 w-full max-w-md mx-auto bg-black rounded-lg p-4'>
        <input
        ref={searchText}
          type="text"
          className='p-4 col-span-8 bg-transparent border text-white border-gray-600 rounded-lg focus:outline-none'
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button onClick={handleGPTSearchClick} className='col-span-4 mx-2 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
