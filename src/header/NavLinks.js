import { FaBars } from 'react-icons/fa'
import { BiLogoMessenger } from 'react-icons/bi'
import { BiBell } from 'react-icons/bi'
const NavLinks = () => {
  return (
    <div class="nav-link">
      <div>
        <FaBars />
      </div>
      <div>
        <BiBell className="navlink-icon" />
      </div>
      <div>
        <BiLogoMessenger className="navlink-icon" />
      </div>
      <img src="Penguins.jpg" className="profile" alt="profile" />
    </div>
  )
}
export default NavLinks
