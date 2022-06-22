import Image from "next/image"

const MediumCard = ({img, title}) => {
  return (
    <div>
      <div className="relative h-40 w-40">
        <Image 
          src={img}
          layout='fill'
        />
      </div>
      <p>{title}</p>
    </div>
  )
}

export default MediumCard