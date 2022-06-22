import Image from "next/image"

const SmallCard = ({ img, distance, location}) => {
  return (
    <div className=''>
      <div className="relative h-8">
        <Image 
          src={img}
          layout='fill'
          objectFit="contain"
          className="justify-start"
        />
      </div>
      <p>{distance}</p>
      <p>{location}</p>
    </div>
  )
}

export default SmallCard