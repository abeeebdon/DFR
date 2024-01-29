import Aside from './Aside/Aside'
import Contacts from './Messenger/Contacts'
import Newsfeed from './pages/Newsfeed/Index'

const Main = () => {
  return (
    <main className="container">
      <Aside className="aside" />
      <Newsfeed />
      <Contacts className="contacts" />
    </main>
  )
}
export default Main
