const SmallCard = ({ img, distance, location}) => {
  return (
    <div>
      <p>{img}</p>
      <p>{distance}</p>
      <p>{location}</p>
    </div>
  )
}

export default SmallCard