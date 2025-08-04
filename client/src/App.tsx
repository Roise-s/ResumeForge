import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './App.css'
import Create from './pages/Create'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
