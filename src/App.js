import React from "react";
import { Routes, Route } from "react-router";
import Home from './pages/home/home'
import Maxsulot from "./pages/maxsulot/maxsulot";
import Ishchilar from "./pages/ishchilar/ishchilar";
import Kampaniya from "./pages/kampaniya/kamapiya";
import Proect from "./pages/proect/proect";
import Contact from "./pages/contact/contact";
import './asstes/scss/fonts.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/maxsulot" element={<Maxsulot/>}/>
        <Route path="/ishchilar" element={<Ishchilar/>}/>
        <Route path="/proect" element={<Proect/>}/>
        <Route path="/kampaniya" element={<Kampaniya/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>

  )

}

export default App