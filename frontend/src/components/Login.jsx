import React ,{useState,useRef}from 'react'
import "./login.css"
import {PinDrop,Cancel} from "@material-ui/icons"
import axios from "axios";
const Login = ({setShowLogin,myStorage,setCurrentUser}) => {
    
    const [error, setError] = useState(false);
    const nameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const user={
            username:nameRef.current.value,
            password:passwordRef.current.value,
        };
        try{
            const res= axios.post("/users/login",user);
            myStorage.setItem("user",res.data.username);
            setCurrentUser(res.data.username);
            setShowLogin(false);

            setError(false);
            
        }
        catch(err)
        {
            setError(true);
        }
    };
    return (
        <div className="loginContainer">
            <div className="llogo">
                <PinDrop/>
                Pinned
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" ref={nameRef}/>
                
                <input type="password" placeholder="Password" ref={passwordRef}/>
                <button className="signinBtn">Sign In</button>
                    
                {error && 
                <span className="failure">Something went wrong</span>
                }           
            </form>
            <Cancel className="loginCancel" onClick={()=>setShowLogin(false)}/>
        </div>
    )
}

export default Login
