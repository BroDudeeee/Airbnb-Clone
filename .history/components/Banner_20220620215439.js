import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative h-10">
      <Image 
        src='https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg'
        layout="fill"
      />
    </div>
  )
}

export default Banner