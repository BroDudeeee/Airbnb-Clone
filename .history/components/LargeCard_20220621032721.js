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
          <p className="absolute top-10 pl-8 font-semibold text-3xl max-w-xs">{title}</p>
          <p className="absolute top-32 pl-9">{description}</p>
          <button className="outline-none"><p className="absolute top-40 ml-9 bg-black text-white px-3 py-1 rounded-md cursor-pointer">{buttonText}</p></button>
      </div>
    </div>
  )
}

export default LargeCard