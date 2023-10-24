import { Navigate } from "react-router-dom";
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

    const [cookies, setCookie] = useCookies(['pwd']);
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    const CheckLogin = () => {
        var check = cookies.pwd
        if (check) {
            fetch("http://192.168.1.232:5000/api/user")
            .then(res => res.json())
            .then((json) => {
                for (var i in json) {
                    if (json[i].password == check) {
                        setLoggedIn(true)
                    } else {
                        setLoggedIn(false)
                    }
                }
            })
            setLoggedIn(true)
            setLoading(!loading)
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
                <Route path="appointments" element={<Appointment loggedIn={loggedIn}/>} />
                <Route path="*" element={<NoPage loggedIn={loggedIn}/>} />
            </Routes>
        );
}