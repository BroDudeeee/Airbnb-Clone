import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative h-32 w-full">
      <Image 
        src='https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg'
        layout="fill"
        objectFit="contain"
        width={full}
      />
    </div>
  )
}

export default Banner