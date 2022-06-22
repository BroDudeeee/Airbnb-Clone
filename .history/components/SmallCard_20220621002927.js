import Image from "next/image"

const SmallCard = ({ img, distance, location}) => {
  return (
    <div className=''>
      <div className="relative h-16 w-16">
        <Image 
          src={img}
          layout='fill'
          className="rounded-full"
        />
      </div>
      {/* <p>{distance}</p>
      <p>{location}</p> */}
    </div>
  )
}

export default SmallCard