import Image from "next/image"

const MediumCard = ({img, title}) => {
  return (
    <div>
      <div className="relative">
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