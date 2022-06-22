const Footer = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="space-y-4 text-xs text-gray-800">
        <h2 className="font-bold">ABOUT</h2>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5  className="font-bold">HOST</h5>
        <p>Future</p>
        <p>Presents</p>
        <p>Cool designs</p>
        <p>Great Shirts</p>
        <p>Join Now</p>
      </div>

      <div>
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  )
}

export default Footer