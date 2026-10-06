import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({title,url}) => {
  const Navigate = useNavigate()
    return(
    
    <div className="text-white">
      <button onClick={()=>Navigate(url)} className='hover:border hover:border-white px-3 p-1 duration-300 rounded-lg cursor-pointer'>{title}</button>
    </div>
    
    )
}

export default Nav;