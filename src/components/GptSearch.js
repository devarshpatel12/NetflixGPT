import React from 'react';
import GptSearchBar from './GptSearchBar'; 
import GptMovieSuggestion from './GptMovieSuggestion'; // Capitalized component name
import { BG_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
    <div className='absolute -z-10'>
<img src={BG_IMG}
alt="bg">
</img>
</div>
      <GptSearchBar /> {/* Capitalized component name */}
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
