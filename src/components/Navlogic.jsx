import React from "react";
import NavData from "./NavData.json"
import Nav from "./Nav";

const Navlogic = () => {
    return (
        <div className="grid grid-cols-3 bg-slate-900 justify-center items-center p-1">
            <img src="./logo.png" alt="logo" className="h-10 rounded-full" />

            <div className='flex w-full gap-10 justify-center p-2 items-center h-12'>
                {
                    NavData.map((item) =>
                        <Nav title={item.title} />
                    )
                }

            </div>
            <div className="flex justify-end">
                <img src="./userimg.png" alt="userimg" className="h-10  rounded-full" />
            </div>

        </div>
    )
}

export default Navlogic;