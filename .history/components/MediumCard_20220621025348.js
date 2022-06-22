import Image from "next/image"

const MediumCard = ({img, title}) => {
  return (
    <div>
      <div className="relative h-80 w-80 cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
        <Image 
          src={img}
          layout='fill'
          className="rounded-xl mb-3"
        />
      </div>
      <p>{title}</p>
    </div>
  )
}

export default MediumCard