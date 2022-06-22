import Image from "next/image"

const SmallCard = ({ img, distance, location}) => {
  return (
    <div>
      <Image 
        src={img}
        width={50}
        height={50}
      />
      <p>{distance}</p>
      <p>{location}</p>
    </div>
  )
}

export default SmallCard