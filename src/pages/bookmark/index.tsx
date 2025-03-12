import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Bookmarkcontainer from "../../components/Bookmarkcontainer";
import ResposiveSidebar from "../../components/ResposiveSidebar";
const BookMark=()=>{
    return(
        <div className="bookmark">
            <div className="sidebarcontainer">
                <SideBar/>
            </div>
            <div className="maincontainer">
                <div className="res-side"><ResposiveSidebar/></div>
            <NavBar/>
            <Bookmarkcontainer/>
            </div>
        </div>
    )
}
export default BookMark;