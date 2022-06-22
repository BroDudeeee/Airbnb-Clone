import Image from "next/image"

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div className="mt-8">
      <div className="relative">
        <div className="relative h-80">
          <Image 
            src={img}
            layout='fill'
            className="rounded-lg"
          />
        </div>
        <p className="absolute top-10 pl-8 font-semibold text-3xl">{title}</p>
        <p className="absolute">{description}</p>
        <p className="absolute">{buttonText}</p>
      </div>
    </div>
  )
}

export default LargeCard