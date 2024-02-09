import Profile from '../components/Profile'
import { aside } from '../data/Data'
import { FaBell } from 'react-icons/fa'
const Index = () => {
  return (
    <aside>
      <Profile />
      {aside.map((side) => {
        return (
          <div key={side.id}>
            <FaBell className="aside-icon" />
            <p>{side.name}</p>
          </div>
        )
      })}
    </aside>
  )
}
export default Index
