import Aside from './Aside/Index'
import Contacts from './Messenger/Contacts'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import Stories from './components/Stories'

const Main = () => {
  return (
    <main className="container">
      <Aside />
      <Stories />
      <AddPost />
      <Posts />
      <Contacts className="contacts" />
    </main>
  )
}
export default Main
