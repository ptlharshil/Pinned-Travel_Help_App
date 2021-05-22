import React ,{useState,useRef}from 'react'
import "./register.css"
import {PinDrop,Cancel} from "@material-ui/icons"
const axios=require('axios');

const Register = ({setShowRegister}) => {
    const [success,setSuccess]=useState(false);
    const [error, setError] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const newUser={
            username:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
        };
        try{
            axios.post("/users/register",{data:newUser});
            setError(false);
            setSuccess(true);
            
        }
        catch(err)
        {
            console.log(err.message)
            setError(true);
        }
    };
    return (
        <div className="registerContainer">
            <div className="logo">
                <PinDrop/>
                Pinned
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" ref={nameRef}/>
                <input type="email" placeholder="Email" ref={emailRef}/>
                <input type="password" placeholder="Password" ref={passwordRef}/>
                <button className="signupBtn">Sign Up</button>
                {success &&
                <span className="success">Successfull. You can Sign In now</span>
                }       
                {error && 
                <span className="failure">Something went wrong</span>
                }           
            </form>
            <Cancel className="registerCancel" onClick={()=>setShowRegister(false)}/>
        </div>
    )
}

export default Register
