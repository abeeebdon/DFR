import Profile from '../components/Profile'
import { aside } from '../data/Data'
import { FaBell } from 'react-icons/fa'
const Index = () => {
  return (
    <aside>
      <div className="aside-profile">
        <img src="Penguins.jpg" className="img" alt="profile" />
        <p className="username">Abeeb Maroof</p>
      </div>
      <>
        {aside.map((side) => {
          return (
            <div key={side.id} className="aside-icons">
              <FaBell />
              <p>{side.name}</p>
            </div>
          )
        })}
      </>
    </aside>
  )
}
export default Index
