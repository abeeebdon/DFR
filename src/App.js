import Header from './header/Index'
import Aside from './Aside'
import Contacts from './Messenger/Contacts'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import Stories from './components/Stories'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Aside />
        <main>
          <Stories />
          <AddPost />
          <Posts />
        </main>
        <Contacts className="contacts" />
      </div>
    </div>
  )
}

export default App
