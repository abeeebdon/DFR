import Aside from './Aside/Aside'
import Contacts from './Messenger/Contacts'
import Newsfeed from './Newsfeed/Newsfeed'

const Main = () => {
  return (
    <main className="container">
      <Aside className="aside" />
      <Newsfeed className="newsfeed" />
      <Contacts className="contacts" />
    </main>
  )
}
export default Main
