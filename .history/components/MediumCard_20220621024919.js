import Image from "next/image"

const MediumCard = ({img, title}) => {
  return (
    <div>
      <div className="relative h-80 w-80 cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
        <Image 
          src={img}
          layout='fill'
          className="rounded-lg"
        />
      </div>
      <p>{title}</p>
    </div>
  )
}

export default MediumCard