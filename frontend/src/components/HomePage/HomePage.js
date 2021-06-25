import { Button } from '@material-ui/core'
import { Room } from '@material-ui/icons'
import React from 'react'
import "./Home.css"
import {Link} from "react-scroll"

const HomePage = () => {
    return (
        <>
        
        <div className="home" style={{ height: "100vh", width: "100%"}}>
           
            <h1 className="title"><Room className="loc"/><b>Pinned</b></h1>
            <h3>
                Your Travel Reviews App
            </h3>
            <h3>
                Find your ideal vacation
            </h3>
            
            <div className="buttonExplore">
            <Link
            activeClass="active"
            to="Map"
            spy={true}
            smooth={true}
            duration={500}
             ><b>Explore</b>   
            </Link>
            </div>
        </div>    
            
            <div id="earth" className="slideglobe"></div>
        
        

        
        </>
    )
}

export default HomePage
