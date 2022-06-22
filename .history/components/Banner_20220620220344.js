import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative h-56 md:h-64 lg:h-80 xl:h-96">
      <Image 
        src='https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg'
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute">
        <p>Not sure where to go? Perfect</p>
        <button>I'm flexible</button>
      </div>
    </div>
  )
}

export default Banner