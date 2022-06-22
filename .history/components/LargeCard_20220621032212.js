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
        <div className="w-4">
          <p className="absolute top-10 pl-8 font-semibold text-3xl">{title}</p>
          <p className="absolute top-20 pl-9">{description}</p>
          <p className="absolute top-32">{buttonText}</p>
        </div>
      </div>
    </div>
  )
}

export default LargeCard