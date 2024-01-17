import HeaderLogo from './HeaderLogo'
import NavLinks from './NavLinks'
import Navbar from './Navbar'
import './header.css'

const Header = () => {
  return (
    <header>
      <HeaderLogo />
      <Navbar />
      <NavLinks />
    </header>
  )
}
export default Header
