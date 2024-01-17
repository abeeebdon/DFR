import { FaBars } from 'react-icons/fa'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { BiSearchAlt2 } from 'react-icons/bi'
const FacebookLogo = () => {
  return (
    <div className="logo">
      <div>
        <BiLogoFacebookCircle className="facebook-logo" />
      </div>
      <div className="searchInput">
        <label for="facebook-search">
          <BiSearchAlt2 className="search-icon" />
        </label>

        <input
          type="text"
          id="facebook-search"
          placeholder="Search Facebook"
          className="search"
        />
      </div>
      <div className="toggle">
        <BiSearchAlt2 className="search-icon" />
      </div>
      <div className="toggle">
        <FaBars id="toggle" />
      </div>
    </div>
  )
}
export default FacebookLogo
