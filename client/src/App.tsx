import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './App.css'
import Create from './pages/Create'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import LearnMore from './pages/LearnMore'

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/create" element={<Home />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
