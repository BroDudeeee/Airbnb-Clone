import Image from "next/image"

const SmallCard = ({ img, distance, location}) => {
  return (
    <div className='flex items-center mb-2 mt-4 space-x-4 hover:bg-gray-100'>
      <div className="relative h-16 w-16">
        <Image 
          src={img}
          layout='fill'
          className="rounded-lg"
        />
      </div>
      <div>
        <p>{location}</p>
        <p>{distance}</p>
      </div>
    </div>
  )
}

export default SmallCard