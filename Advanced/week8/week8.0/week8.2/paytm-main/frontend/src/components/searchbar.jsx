import React, { useState } from 'react';
import SearchRes from './searcRes';
export default function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    /* 
      w-full: takes 100% width of the screen / container
      px-4 sm:px-8: 16px side padding on mobile, 32px on larger screens
      mt-4: optional top margin
    */
    <div className="w-full px-4 sm:px-8 mt-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)
        }
        placeholder="Search users..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
    <SearchRes query={query}></SearchRes>
    </div>
    
    
  );

}