import { Route, Routes } from 'react-router-dom'
import Header from './header/Header'
import Main from './Main'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
