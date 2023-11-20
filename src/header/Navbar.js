import { BiSolidJoystickAlt } from 'react-icons/bi'
import { BiHome } from 'react-icons/bi'
import { BiVideo } from 'react-icons/bi'
import { CiShop } from 'react-icons/ci'
import { PiUsersThree } from 'react-icons/pi'

const Navbar = () => {
  return (
    <ul className="nav">
      <li>
        <BiHome />
      </li>
      <li>
        <BiVideo />
      </li>
      <li>
        <CiShop />
      </li>
      <li>
        <PiUsersThree />
      </li>
      <li>
        <BiSolidJoystickAlt />
      </li>
    </ul>
  )
}
export default Navbar
