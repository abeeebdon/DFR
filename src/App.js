import Header from './pages/header/Index'
import Aside from './Aside/Index'
import Contacts from './Messenger/Contacts'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import Stories from './components/Stories'
function App() {
  return (
    <div className="container">
      <Header />
      <Aside />
      <Stories />
      <AddPost />
      <Posts />
      <Contacts className="contacts" />
    </div>
  )
}

export default App
