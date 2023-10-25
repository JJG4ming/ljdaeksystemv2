import React, { useState, useEffect } from 'react'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs'

export default function Login() {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const ChangeHandler = (event) => {
        setInput(event.target.value)
    }

    const CheckValidPassword = () => {
        fetch("http://192.168.1.232:5000/api/auth", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({pwd: input})
        })
            .then(res => res.json())
            .then((json) => {
                setCookie("token", json)
                window.location.href = ""
            })
    }

    useEffect(() => {
        var token = cookies.token
        if (token) {
            fetch("http://192.168.1.232:5000/api/auth", {
                headers: {
                    authorization: token
                }
            })
            .then((res) => {
                if(!res.ok) throw new Error(res.status);
                else {
                    navigate("/")
                    setLoading(!loading)
                }
            })
            
        } else {
            setLoading(!loading)
        }
      }, [])

    if (loading) return
    return(
        <>
            <form onSubmit={(event) => {
                event.preventDefault()
                CheckValidPassword()
            }} style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                width: "50%",
                height: "50%",
                top: "25%",
                left: "25%",
                justifyContent: "center",
                alignItems: "center",
                gap: "1vw"
            }}>
                <input placeholder='Password' type="password" onChange={ChangeHandler} defaultValue={input} style={{width: "50%", height: "3vw", borderRadius: "12px", border: "1px solid black"}}/>
                <button type='submit' style={{width: "25%", height: "3vw", borderRadius: "12px", border: 0, background: "#f2892d", color: "white", fontSize: "1vw"}}>Log Ind</button>
            </form>
        </>
    )
}