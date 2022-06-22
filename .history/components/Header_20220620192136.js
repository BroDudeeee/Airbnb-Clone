import Image from 'next/image'

const Header = () => {
  return (
    <header className='grid grid-cols-3 shadow-md bg-white sticky top-0 z-50 items-center p-2'> 
      {/* Left */}
      <div className='relative h-16'>
        <Image 
          src='https://png2.cleanpng.com/sh/b025f8b354a052cc07f7b16de0e76ef6/L0KzQYm3VsA2N6pviJH0aYP2gLBuTfFqepNzep91b3fyPbT2lgBwdl51ittBYYTofMq0iPVtbF5oh995YX78PbLwkvJval5xh9l4LUXlQYeAhsBkQWJpeqcCLkC3Q4eCUsU4OWY3UKQ5MEm6QoaCV8QveJ9s/kisspng-airbnb-logo-coupon-privately-held-company-airbnb-logo-5b167f0c91db57.0436925715282009725974.png'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle */}
      <div>Middle</div>

      {/* Right */}
      <div>Right</div>
    </header>
  )
}

export default Header