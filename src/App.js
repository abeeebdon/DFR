import Header from './header/Index'
import Aside from './Aside'
import Contacts from './Messenger/Contacts'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import Stories from './components/Stories'
import { useEffect, useState } from 'react'
function App() {
  const [scroll, setScroll] = useState(false)
  console.log(scroll)
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Aside />
        <main onScroll={() => setScroll(true)}>
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
