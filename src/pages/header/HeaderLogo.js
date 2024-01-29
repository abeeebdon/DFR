import { FaBars } from 'react-icons/fa'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { BiSearchAlt2 } from 'react-icons/bi'
const FacebookLogo = () => {
  return (
    <div className="logo">
      <div className="facebook-icon">
        <BiLogoFacebookCircle className="facebook-logo" />
      </div>
      <div className="search-input">
        <BiSearchAlt2 className="search-icon" />
        <input type="text" id="facebook-search" placeholder="Search Facebook" />
      </div>
    </div>
  )
}
export default FacebookLogo
