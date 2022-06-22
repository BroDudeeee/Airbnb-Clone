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
          <p className="absolute top-10 ml-8 font-semibold text-3xl w-xs">{title}</p>
          <p className="absolute top-32 ml-9">{description}</p>
          <p className="absolute top-40 ml-9 bg-black text-white">{buttonText}</p>
      </div>
    </div>
  )
}

export default LargeCard