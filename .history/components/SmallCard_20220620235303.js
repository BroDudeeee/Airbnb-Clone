import Image from "next/image"

const SmallCard = ({ img, distance, location}) => {
  return (
    <div>
      <Image 
        src={img}
        layout='fill'
      />
      <p>{distance}</p>
      <p>{location}</p>
    </div>
  )
}

export default SmallCard