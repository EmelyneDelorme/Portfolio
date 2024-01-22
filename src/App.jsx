import { Route, Routes } from "react-router-dom"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Experiences from "./pages/Experiences"
import Formations from "./pages/Formations"
import Competences from "./pages/Competences"
import NotFound from "./pages/NotFound"
import Projets from "./pages/Projets"
// import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expériences" element={<Experiences />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/compétences" element={<Competences />} />
        <Route path="/projets" element={<Projets />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
