import React from "react";
import homeimg from '../../Assets/icons/icon-nav-home.svg'
import movieimg from '../../Assets/icons/icon-nav-movies.svg'
import tvseriesimg from '../../Assets/icons/icon-nav-tv-series.svg'
import bookmarkimg from '../../Assets/icons/icon-nav-bookmark.svg'
import './Sidebar.css'
const SideBar:React.FC=()=>{
    return (
        <>
        <div className="sidebar">
            <h2>Movie App</h2>
            <ul>
                <li onClick={()=>{window.location.href="/"}}>
                    <img src={homeimg} alt="" />
                    <h3>Home</h3>
                </li>
                <li onClick={()=>{window.location.href="/movies"}}>
                    <img src={movieimg} alt="" />
                    <h3>Movies</h3>
                </li>
                <li onClick={()=>{window.location.href="/tvseries"}}>
                    <img src={tvseriesimg} alt="" />
                    <h3>Tv Series</h3>
                </li>
                <li onClick={()=>{window.location.href="/BookMark"}}>
                    <img src={bookmarkimg} alt="" />
                    <h3>BookMarks</h3>
                </li>
            </ul>
        </div>
        </>
    )
}
export default SideBar;