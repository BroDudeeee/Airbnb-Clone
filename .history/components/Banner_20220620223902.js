import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative h-64 md:h-80 lg:h-96">
      <Image 
        src='https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg'
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center text-white">
        <p className="text-2xl">Not sure where to go? Perfect</p>
        <button className="font-bold text-lg text-blue-900 bg-white py-4 px-8 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150 mt-2">I'm flexible</button>
      </div>
    </div>
  )
}

export default Banner
