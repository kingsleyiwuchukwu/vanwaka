
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from'./pages/Home'
import About from'./pages/About'
import VanPages from './pages/VanPages'
import MainLayout from './layouts/MainLayout'
import VanDetailPage from './pages/VanDetailPage'
// import VanDetails from './components/VanDetails'

import "./server"

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<MainLayout />}>
          <Route path="/" element ={<Home />}/>
          <Route path='/About' element ={<About />}/>
          <Route path='/van' element ={<VanPages />}/>
          <Route path='/van/:id' element ={<VanDetailPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App