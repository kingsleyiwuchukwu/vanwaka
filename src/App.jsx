
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from'./pages/Home'
import About from'./pages/About'
import VanPages from './pages/VanPages'
import MainLayout from './layouts/MainLayout'
import VanDetailPage from './pages/VanDetailPage'
import HostLayout from './layouts/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'


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

          {/* Host route */}
          <Route path='/host' element= {< HostLayout />}>
            <Route path='/host/dashboard' element = {<Dashboard />}/>
            <Route path='/host/income' element = {<Income />}/>
            <Route path='/host/reviews' element = {<Reviews />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App