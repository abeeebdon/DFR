import { FaBars } from 'react-icons/fa'
import { BiBell } from 'react-icons/bi'
import { BiLogoMessenger } from 'react-icons/bi'
const NavLinks = () => {
  return (
    <div class="nav-link">
      <div>
        <FaBars className="navlink-icon" />
      </div>
      <div>
        <BiBell className="navlink-icon" />
      </div>
      <div>
        <BiLogoMessenger className="navlink-icon" />
      </div>
      <img
        src="Penguins.jpg"
        className="profile"
        alt="profile"
        width="40px"
        height="40px"
      />
    </div>
  )
}
export default NavLinks
