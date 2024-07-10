import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { MyProvider, MyContext } from './context/Context'

function App() {

  return (
    <>
      <MyProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </MyProvider>
    </>
  )
}

export default App
