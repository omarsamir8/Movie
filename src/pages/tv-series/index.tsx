import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import TVComponent from "../../components/TV/TV";
import ResposiveSidebar from "../../components/ResposiveSidebar";

const TvSeries=()=>{
    return (
        <>
        <div className="Movies">
        <div className="sidebarcontainer">
                <SideBar/>
            </div>
            <div className="maincontainer">
                <div className="res-side"><ResposiveSidebar/></div>
            <NavBar/>
            <TVComponent/>
            </div>
        </div>
        </>
    )
}
export default TvSeries;