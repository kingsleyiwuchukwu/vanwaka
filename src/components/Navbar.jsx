import { Link } from "react-router-dom"
import logo from "../assets/images/fave_icon_1.jpg"


const Navbar = () => {

  return (

    <div className="head">
        <img src={logo} alt="logo" className="site-logo" />
        <nav>
            <Link to='About'>About </Link>
            <Link to='Van'>Van </Link>
        </nav>
        
    </div>
  )
}

export default Navbar