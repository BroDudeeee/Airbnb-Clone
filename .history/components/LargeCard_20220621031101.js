import Image from "next/image"

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div>
      <div className="relative h-80">
        <Image 
          src={img}
          layout='fill'
        />
      </div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{buttonText}</p>
    </div>
  )
}

export default LargeCard