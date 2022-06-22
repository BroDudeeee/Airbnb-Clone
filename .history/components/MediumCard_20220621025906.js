import Image from "next/image"

const MediumCard = ({img, title}) => {
  return (
    <div>
      <div className="relative h-60 w-60 cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
        <Image 
          src={img}
          layout='fill'
          className="rounded-xl"
        />
      </div>
      <p className="pt-4">{title}</p>
    </div>
  )
}

export default MediumCard