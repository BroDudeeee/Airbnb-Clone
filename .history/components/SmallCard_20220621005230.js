import Image from "next/image"

const SmallCard = ({ img, distance, location}) => {
  return (
    <div className='flex items-center mb-2 mt-4 space-x-4 hover:bg-gray-100 rounded-xl hover:scale-105 cursor-pointer transition transform duration-200 ease-out'>
      <div className="relative h-16 w-16 space-x-4">
        <Image 
          src={img}
          layout='fill'
          className="rounded-lg"
        />
      </div>
      <div>
        <p>{location}</p>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  )
}

export default SmallCard