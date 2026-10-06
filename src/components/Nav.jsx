import React from "react";

const Nav = ({title}) => {
    return(
    
    <div className="text-white">
      <button className='hover:border hover:border-white px-3 p-1 duration-300 rounded-lg cursor-pointer'>{title}</button>
    </div>
    
    )
}

export default Nav;