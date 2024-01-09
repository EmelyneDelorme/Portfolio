import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Housing from "./pages/Housing"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
