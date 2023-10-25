import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Logo from '../images/logo.png'

const Header = () => {
    const [title, setTitle] = useState()
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);

    const HandleNavClick = function(event, stage, text) {
        event.preventDefault();
        setTitle(event.target.innerHTML)
    }

    const Logout = () => {
        removeCookie("token")
    }

  return (   
    <>
        <nav style={{
            backgroundColor: "#f2892d",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px"
        }}>
            <img src={Logo} alt="Logo" style={{height: "100%", marginLeft: "1vw", marginBottom: "4px"}} />
            <li style={{
                display: "flex",
                fontSize: "2vw"
            }}><Link to="/" style={{
                textDecoration: "none",
                color: "black"
            }}>Home</Link></li>
            <li style={{
                display: "flex",
                fontSize: "2vw"
            }}><Link to="/appointments" style={{
                textDecoration: "none",
                color: "black"
            }}>Appointments</Link></li>
            <li style={{
                fontSize: "calc(6px + 1vw)", 
                cursor: "pointer", 
                background: "#DF4848",  
                paddingLeft: "1vw", 
                paddingRight: "1vw", 
                borderRadius: "12px", 
                marginRight: "4px",  
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "8vw", 
                maxHeight: "60px"
            }} onClick={() => {
                Logout()
            }}><Link to="/login">LOG UD</Link></li>
        </nav>
    </>      

  )
}

export default Header;