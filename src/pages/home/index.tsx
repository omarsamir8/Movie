import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import './home.css'
import Trending from "../../components/trending";
import RecomenedForYou from "../../components/RecomenedForYou";
import ResposiveSidebar from "../../components/ResposiveSidebar";

const Home:React.FC=()=>{
    return (
        <>
        <div className="home">
            <div className="sidebarcontainer">
                <SideBar/>
            </div>
            <div className="maincontainer">
            <div className="res-side"><ResposiveSidebar/></div>
            <NavBar/>
            <Trending/>
            <RecomenedForYou/>
            </div>
        </div>
        </>
    )
}
export default Home;