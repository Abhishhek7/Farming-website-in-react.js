import React from "react"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import About from "./pages/About"
import Services from "./components/Services"
import Clients from "./components/Clients"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsAndConditions from "./components/TermsAndConditions"
import Popularfruits from "./components/Popularfruits"


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar />
     
     <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path = '/about' element={<About/>}/>
      <Route path = '/gallery' element={<Gallery/>}/>
      <Route path = '/contact' element={<Contact/>}/>
      <Route path = '/product'    element={<Product/>} />
      <Route path = '/services' element={<Services/>} />
      <Route path = '/clients' element= {<Clients/>} />
      <Route path= '/popularfruits' element={<Popularfruits/>} />
      <Route path = '/privacypolicy' element={<PrivacyPolicy/>} />
      <Route path = '/termsandconditions' element={<TermsAndConditions/>} />
      
     </Routes>
     
     <Footer/>
     </BrowserRouter>

     
     
     
    </>
  )
}

export default App
