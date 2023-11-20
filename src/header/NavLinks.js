import { BiLogoMessenger } from 'react-icons/bi'
import { BiBell } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
const NavLinks = () => {
  return (
    <div class="nav-link">
      <FaBars className="navlink-icon" />
      <BiLogoMessenger className="navlink-icon" />
      <BiBell className="navlink-icon" />
      <img src="Penguins.jpg" className="profile" alt="profile" />
    </div>
  )
}
export default NavLinks
