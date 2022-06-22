import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative h-48">
      <Image 
        src='https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg'
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}

export default Banner