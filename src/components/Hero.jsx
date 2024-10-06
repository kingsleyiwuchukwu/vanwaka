
import {Link} from 'react-router-dom'

const Hero = () => {

  return (
    <div className="hero-container">
      <div className='hero-info'>
        <h1 >What to travel, We got the Van for it.</h1>
        <p >Share great road adventure by joining the Vanwaka movement. Rent the perfect van to make your perfect road trip. </p>
        <Link to="vans" className="link-button">Pick your Van</Link>
      </div>
    </div>
  )
}

export default Hero