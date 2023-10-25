import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Appointment from './pages/Appointment';
import Customer from './pages/Customer';
import Home from './pages/Home'
import Car from "./pages/Car"
import Motorcycle from "./pages/Motorcycle";
import Order from "./pages/Order";

export default function App() {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    const CheckLogin = () => {
        var token = cookies.token
        if (token) {
            fetch("http://192.168.1.232:5000/api/auth", {
                headers: {
                    authorization: token
                }
            })
            .then((res) => {
                if(!res.ok) {
                    removeCookie("token")
                }
                else {
                    setLoggedIn(true)
                    setLoading(!loading)
                }
            })
            
        } else {
            setLoading(!loading)
        }
    }

    useEffect(() => {
        CheckLogin()
    }, [])

    if (loading) return
    return (
        <Routes>
            <Route index element={<Home loggedIn={loggedIn}/>} />
            <Route path="customers">
                <Route path=":id/motorcycles/:id" element={<Motorcycle loggedIn={loggedIn}/>}/>
                <Route path=":id/orders/:id" element={<Order loggedIn={loggedIn}/>}/>
                <Route path=":id/cars/:id" element={<Car loggedIn={loggedIn}/>}/>
                <Route path=":id" element={<Customer loggedIn={loggedIn}/>} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="appointments" element={<Appointment loggedIn={loggedIn}/>}/>
            <Route path="*" element={<NoPage loggedIn={loggedIn}/>} />
        </Routes>
    );
}