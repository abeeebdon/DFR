import { BiLogoFacebookCircle } from 'react-icons/bi'
import { BiSearchAlt2 } from 'react-icons/bi'
const HeaderLogo = () => {
  return (
    <div className="logo">
      <BiLogoFacebookCircle className="facebook-logo" />
      <div className="searchInput">
        <label for="facebook-search">
          <BiSearchAlt2 className="search-icon" />
        </label>

        <input type="text" id="facebook-search" placeholder="Search Facebook" />
      </div>
    </div>
  )
}
export default HeaderLogo
