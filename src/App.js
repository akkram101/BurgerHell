import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'




function App() {

  return(

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  

  )
}

export default App;
