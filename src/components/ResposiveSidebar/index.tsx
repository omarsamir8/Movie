import React from "react";
import homeimg from '../../Assets/icons/icon-nav-home.svg'
import movieimg from '../../Assets/icons/icon-nav-movies.svg'
import tvseriesimg from '../../Assets/icons/icon-nav-tv-series.svg'
import bookmarkimg from '../../Assets/icons/icon-nav-bookmark.svg'
import './resside.css'
const ResposiveSidebar:React.FC=()=>{
    return (
    <>
    <div className="res-sidebar">
    <ul>
                <li onClick={()=>{window.location.href="/"}}>
                    <img src={homeimg} alt="" />
                </li>
                <li onClick={()=>{window.location.href="/movies"}}>
                    <img src={movieimg} alt="" />
                    
                </li>
                <li onClick={()=>{window.location.href="/tvseries"}}>
                    <img src={tvseriesimg} alt="" />
                    
                </li>
                <li onClick={()=>{window.location.href="/BookMark"}}>
                    <img src={bookmarkimg} alt="" />
                    
                </li>
            </ul>
    </div>
    </>
    )
}
export default ResposiveSidebar;