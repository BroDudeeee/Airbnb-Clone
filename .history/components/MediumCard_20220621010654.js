import Image from "next/image"

const MediumCard = ({img, title}) => {
  return (
    <div>
      <div className="relative h-24 w-24">
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