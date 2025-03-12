import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import MovieComponent from "../../components/MovieComponent/MovieComponent";
import ResposiveSidebar from "../../components/ResposiveSidebar";

const Movies=()=>{
    return (
        <>
        <div className="Movies">
        <div className="sidebarcontainer">
                <SideBar/>
            </div>
            <div className="maincontainer">
                <div className="res-side"><ResposiveSidebar/></div>
            <NavBar/>
            <MovieComponent/>
            </div>
        </div>
        </>
    )
}
export default Movies;