import React from "react";
import { Route, Routes } from "react-router-dom";

const Routing=()=>{
    return(
        <div>
             <Navlogic/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/Preview' element={<Preview/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Shop' element={<Shop/>} />
      </Routes>
        </div>
    )
}

export default Routing;