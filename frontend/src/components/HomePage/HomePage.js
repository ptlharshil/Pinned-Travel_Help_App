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
            <p>
                Your Travel Reviews App
            </p>
            <p>
                Find your ideal vacation
            </p>
            
            <Link
            activeClass="active"
            to="Map"
            spy={true}
            smooth={true}
            duration={500}
            className="buttonExplore" ><b>Explore</b>   
            </Link>
            <div id="earth"></div>
        </div>
        

        
        </>
    )
}

export default HomePage
