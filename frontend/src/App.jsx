import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import AddTrainer from "./pages/AddTrainer"
import ListTrainer from "./pages/ListTrainer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ListTrainer />} />
          <Route path="/add" element={<AddTrainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App