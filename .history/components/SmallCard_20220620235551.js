import Image from "next/image"

const SmallCard = ({ img, distance, location}) => {
  return (
    <div>
      <Image 
        src={img}
        width={12}
        height={12}
      />
      <p>{distance}</p>
      <p>{location}</p>
    </div>
  )
}

export default SmallCard