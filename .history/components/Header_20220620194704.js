import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className='grid grid-cols-3 shadow-md bg-white sticky top-0 z-50 items-center py-1 px-2 space-x-2'> 
      {/* Left */}
      <div className='relative h-16 cursor-pointer'>
        <Image 
          src='https://png2.cleanpng.com/sh/b025f8b354a052cc07f7b16de0e76ef6/L0KzQYm3VsA2N6pviJH0aYP2gLBuTfFqepNzep91b3fyPbT2lgBwdl51ittBYYTofMq0iPVtbF5oh995YX78PbLwkvJval5xh9l4LUXlQYeAhsBkQWJpeqcCLkC3Q4eCUsU4OWY3UKQ5MEm6QoaCV8QveJ9s/kisspng-airbnb-logo-coupon-privately-held-company-airbnb-logo-5b167f0c91db57.0436925715282009725974.png'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle */}
      <div className='flex border rounded-full py-1 space-x-2 items-center'>
        <input 
          type="text" 
          placeholder='Search'
          className='flex-grow outline-none bg-transparent px-2'
        />
        <SearchIcon 
          className='h-6 bg-red-400 text-white p-1 rounded-full hidden md:inline-flex px-1'
        />
      </div>

      {/* Right */}
      <div>Right</div>
    </header>
  )
}

export default Header