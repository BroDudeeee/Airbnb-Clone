import Image from "next/image"

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div>
      <div className="mt-8">
        <div className="relative h-80">
          <Image 
            src={img}
            layout='fill'
            className="rounded-lg"
          />
        </div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{buttonText}</p>
      </div>
    </div>
  )
}

export default LargeCard