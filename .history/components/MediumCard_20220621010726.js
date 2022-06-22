import Image from "next/image"

const MediumCard = ({img, title}) => {
  return (
    <div>
      <div className="relative h-40 w-40">
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