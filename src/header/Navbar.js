import { BiSolidJoystickAlt } from 'react-icons/bi'
import { BiHome } from 'react-icons/bi'
import { BiVideo } from 'react-icons/bi'
import { CiShop } from 'react-icons/ci'
import { PiUsersThree } from 'react-icons/pi'
const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <BiHome className="navbar-icon" />
      </div>
      <div>
        <BiSolidJoystickAlt className="navbar-icon" />
      </div>
      <div>
        <BiVideo className="navbar-icon" />
      </div>
      <div>
        <CiShop className="navbar-icon" />
      </div>
      <div>
        <PiUsersThree className="navbar-icon" />
      </div>
    </nav>
  )
}
export default Navbar
