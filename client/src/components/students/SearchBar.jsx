import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <form action="" className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded-2xl'>
        <img src="" alt="search_icon" className='md:w-auto w-10 px-3'/>
        <input type="text" placeholder='search for courses' className='w-full h-full' />
        <button type='submit' className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1'>search</button>
      </form>
    </div>
  )
}

export default SearchBar