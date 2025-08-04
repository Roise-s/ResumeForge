import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './App.css'
import Create from './pages/Create'
import Home from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/Home" element={<Home />} />
          {/* Add other routes here as needed */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
