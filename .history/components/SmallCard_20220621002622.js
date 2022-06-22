import Image from "next/image"

const SmallCard = ({ img, distance, location}) => {
  return (
    <div className=''>
      <div className="relative h-8 w-8">
        <Image 
          src={img}
          layout='fill'
        />
      </div>
      <p>{distance}</p>
      <p>{location}</p>
    </div>
  )
}

export default SmallCard