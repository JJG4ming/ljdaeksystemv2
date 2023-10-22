import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import Header from "./components/Header"
import CustomerLogo from './images/customer.svg'
import CustomerAddLogo from './images/customerAdd.svg'
import RegNumberLogo from './images/regnumber.svg'
import InvoiceLogo from './images/invoice.svg'
import SearchedBox from "./components/SearchedBox";

export default function App() {

    const [cookies, setCookie] = useCookies(['pwd']);
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    const [originalCars, setOriginalCars] = useState([])
    const [originalCustomers, setOriginalCustomers] = useState([])
    const [originalOrders, setOriginalOrders] = useState([])
    const [shownCustomers, setShownCustomers] = useState([])
    const [shownCars, setShownCars] = useState([])
    const [shownOrders, setShownOrders] = useState([])
    const [currentFiltered, setCurrentFiltered] = useState("")
    const [lastFiltered, setLastFiltered] = useState("")
    const [buttons, setButtons] = useState([
        {value: "Customer", image: CustomerLogo}, {value: "Reg", image: RegNumberLogo}, {value: "Order", image: InvoiceLogo}
    ])

    const getCustomers = () => {
        fetch("http://192.168.1.232:5000/api/customer")
        .then(res => res.json())
        .then((json) => {
            setOriginalCustomers(json)
            setShownCustomers(json)
        })
    }

    const getCars = () => {
        fetch("http://192.168.1.232:5000/api/car")
        .then(res => res.json())
        .then((json) => {
            setOriginalCars(json)
            setShownCars(json)
        })
    }

    const getOrders = () => {
        fetch("http://192.168.1.232:5000/api/order")
        .then(res => res.json())
        .then((json) => {
            setOriginalOrders(json)
            setShownOrders(json)
        })
    }

    const getData = () => {
        getCustomers()
        getCars()
        getOrders()
    }

    const Search = (event) => {
        var text = event.target.value
        var tempCars = [...originalCars]
        var tempCustomers = [...originalCustomers]
        var tempOrders = [...originalOrders]
        if(text && text.length > 0) {
            setShownCars(tempCars.filter((x) => {
                let reg = x?.reg?.toLowerCase()
                return reg?.includes(text.toLowerCase())
            }))
            setShownCustomers(tempCustomers.filter((x) => {
                let name = x?.name?.toLowerCase()
                return name?.includes(text.toLowerCase())
            }))
            setShownOrders(tempOrders.filter((x) => {
                let number = x?.number?.toLowerCase()
                return number?.includes(text.toLowerCase())
            }))
        } else {
            setShownCars([...originalCars])
            setShownCustomers([...originalCustomers])
            setShownOrders([...originalOrders])
        }
    }

    const FilterClick = (buttonClicked) => {
        if (currentFiltered === "") {
            if(lastFiltered === buttonClicked) {
                setCurrentFiltered("")
            } else {
                setCurrentFiltered(buttonClicked)
            }
        } else {
            if (lastFiltered == buttonClicked) {
                setCurrentFiltered("")
            } else {
                setCurrentFiltered(buttonClicked)
            }
        }
        setLastFiltered(buttonClicked)
    }

    useEffect(() => {
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
            getData()
            setLoading(!loading)
        } else {
            setLoading(!loading)
        }
    }, [])

    if (loading) return
    if (!loggedIn) {
        return <Navigate replace to="/login" />;
    } else {
        return (
            <>
                <Header />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2vw"
                }}>
                    <div style={{
                        display: "flex",
                        width: "90%",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        marginTop: "2vw"
                    }}>
                        <div style={{
                            display: "flex",
                            width: "25%"
                        }}>
                            <div style={{
                                display: "flex",
                                background: "#f2892d",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "7vw",
                                aspectRatio: "1",
                                borderRadius: "8px"
                            }}>
                                <img
                                    src={CustomerAddLogo}
                                    alt="Logo"
                                    style={{
                                        display: "flex",
                                        height: "100%"
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            width: "40%",
                            height: "7vw",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <h1 style={{
                                display: "flex",
                                fontSize: "2.5vw",
                                margin: 0,
                                fontFamily: "Arial Black",
                                fontWeight: "bolder"
                            }}>Søg i Database</h1>
                            <input style={{
                                display: "flex",
                                width: "99%",
                                height: "3vw",
                                border: "2px solid black",
                                fontSize: "2vw",
                                textAlign: "center",
                                borderRadius: "8px"
                            }} onChange={Search}/>
                        </div>
                        <div style={{
                            display: "flex",
                            width: "25%",
                            justifyContent: "space-between"
                        }}>
                            {buttons.map((button, index) => {
                                return(
                                    <button style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        background: "#f2892d",
                                        height: "7vw",
                                        aspectRatio: "1",
                                        borderRadius: "8px",
                                        border: 0
                                    }} key={index} onClick={() => FilterClick(button.value)}>
                                        <img
                                            src={button.image}
                                            alt="Logo"
                                            style={{
                                                display: "flex",
                                                height: "100%"
                                            }}
                                        />
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <SearchedBox shownCustomers={shownCustomers} shownCars={shownCars} shownOrders={shownOrders} currentFiltered={currentFiltered}/>
                </div>
            </>
        );
    }
}