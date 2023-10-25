import { useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import CustomerLogo from '../images/customer.svg'
import CustomerAddLogo from '../images/customerAdd.svg'
import RegNumberLogo from '../images/regnumber.svg'
import InvoiceLogo from '../images/invoice.svg'
import MainSearchBox from "../components/MainSearchedBox";
import Modal from 'react-modal';
import Styles from "../styling/modalStyling"
import { useCookies } from "react-cookie";
import CloseSquare from "../images/closesquare.svg"

const Homepage = ({loggedIn}) => {
    const [name, setName] = useState("")
    const [cookies, setCookie] = useCookies(['token']);
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [originalCars, setOriginalCars] = useState([])
    const [originalCustomers, setOriginalCustomers] = useState([])
    const [originalOrders, setOriginalOrders] = useState([])
    const [originalMotorcycles, setOriginalMotorcycles] = useState([])
    const [shownCustomers, setShownCustomers] = useState([])
    const [shownMotorcycles, setShownMotorcycles] = useState([])
    const [shownCars, setShownCars] = useState([])
    const [shownOrders, setShownOrders] = useState([])
    const [currentFiltered, setCurrentFiltered] = useState("")
    const [lastFiltered, setLastFiltered] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const buttons = [
        {value: "Customer", image: CustomerLogo}, {value: "Reg", image: RegNumberLogo}, {value: "Order", image: InvoiceLogo}
    ]
    const navigate = useNavigate()

    const OpenModal = () => {
        setIsOpen(true);
    }

    const CloseModal = () => {
        setIsOpen(false)
        ClearData()
    }

    const getCustomers = () => {
        fetch("http://192.168.1.232:5000/api/customer", {
            headers: {
                authorization: cookies?.token
            }
        })
        .then(res => {
            if (res.status == 401) {
                navigate("../../login")
                window.location.href = ""
            } else {
                res.json()
                .then((json) => {
                    setOriginalCustomers(json)
                    setShownCustomers(json)
                })
            }
        })
    }

    const getCars = () => {
        fetch("http://192.168.1.232:5000/api/car", {
            headers: {
                authorization: cookies?.token
            }
        })
        .then(res => {
            if (res.status == 401) {
                navigate("../../login")
                window.location.href = ""
            } else {
                res.json()
                .then((json) => {
                    setOriginalCars(json)
                    setShownCars(json)
                })
            }
        })
    }

    const getMotorcycles = () => {
        fetch("http://192.168.1.232:5000/api/motorcycle", {
            headers: {
                authorization: cookies?.token
            }
        })
        .then(res => {
            if (res.status == 401) {
                navigate("../../login")
                window.location.href = ""
            } else {
                res.json()
                .then((json) => {
                    setOriginalMotorcycles(json)
                    setShownMotorcycles(json)
                })
            }
        })
    }

    const getOrders = () => {
        fetch("http://192.168.1.232:5000/api/order", {
            headers: {
                authorization: cookies?.token
            }
        })
        .then(res => {
            if (res.status == 401) {
                navigate("../../login")
                window.location.href = ""
            } else {
                res.json()
                .then((json) => {
                    setOriginalOrders(json)
                    setShownOrders(json)
                })
            }
        })
    }

    const getData = () => {
        getCustomers()
        getCars()
        getMotorcycles()
        getOrders()
    }

    const Search = (event) => {
        var text = event.target.value
        var tempCars = [...originalCars]
        var tempMotorcycles = [...originalMotorcycles]
        var tempCustomers = [...originalCustomers]
        var tempOrders = [...originalOrders]
        if(text && text.length > 0) {
            setShownCars(tempCars.filter((x) => {
                let reg = x?.reg?.toLowerCase()
                let model = x?.model?.toLowerCase()
                let owner = x?.customerId
                return reg?.includes(text.toLowerCase()) || model?.includes(text.toLowerCase()) || owner == tempCustomers.filter(x => x?.id == owner && x?.name.toLowerCase()?.includes(text?.toLowerCase()))[0]?.id
            }))
            setShownMotorcycles(tempMotorcycles.filter((x) => {
                let reg = x?.reg?.toLowerCase()
                let model = x?.model?.toLowerCase()
                let owner = x?.customerId
                return reg?.includes(text.toLowerCase()) || model?.includes(text.toLowerCase()) || owner == tempCustomers.filter(x => x?.id == owner && x?.name.toLowerCase()?.includes(text?.toLowerCase()))[0]?.id
            }))
            setShownCustomers(tempCustomers.filter((x) => {
                let name = x?.name?.toLowerCase()
                let phone = x?.phone?.toLowerCase()
                return name?.includes(text.toLowerCase()) || phone?.includes(text.toLowerCase())
            }))
            setShownOrders(tempOrders.filter((x) => {
                let number = x?.number?.toLowerCase()
                let owner = x?.customerId
                return number?.includes(text.toLowerCase()) ||  owner == tempCustomers.filter(x => x?.id == owner && x?.name.toLowerCase()?.includes(text?.toLowerCase()))[0]?.id
            }))
        } else {
            setShownCars([...originalCars])
            setShownMotorcycles([...originalMotorcycles])
            setShownCustomers([...originalCustomers])
            setShownOrders([...originalOrders])
        }
    }

    const FilterClick = (buttonClicked) => {
        if (currentFiltered == "") {
            if(lastFiltered == buttonClicked) {
                setCurrentFiltered(buttonClicked)
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

    const ClearData = () => {
        setName("")
        setPhone("")
        setEmail("")
        setAddress("")
    }

    const HandleSubmit = (event) => {
        event.preventDefault()
        if (name.length <= 0 || phone.length <= 0) {
            alert("Du skal indtaste navn og telefonnummer")
            return
        }
        var tempCustomer = {
            name: name,
            phone: phone,
            email: email,
            address: address
        }
        console.log(tempCustomer)
        fetch("http://192.168.1.232:5000/api/customer", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                authorization: cookies?.token
            },
            body: JSON.stringify(tempCustomer)
        })
        .then(res => res.json())
        .then((json) => {
            setOriginalCustomers(json)
            setShownCustomers(json)
            CloseModal()
            ClearData()
        })
    }

    const NumberCheck = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
           setPhone(e.target.value)
        } else {
            alert("Du kan kun indtaste tal")
        }
     }

    useEffect(() => {
        if (!loggedIn) {
            navigate("login")
        }
        getData()
    }, [])

    if (!loggedIn) {
        return <Navigate replace to="login" />;
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
                            <button style={{
                                display: "flex",
                                background: "#f2892d",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "7vw",
                                aspectRatio: "1",
                                borderRadius: "8px",
                                border: 0
                            }} onClick={OpenModal}>
                                <img
                                    src={CustomerAddLogo}
                                    alt="Logo"
                                    style={{
                                        display: "flex",
                                        height: "100%"
                                    }}
                                />
                            </button>
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
                                fontSize: "2.8vw",
                                margin: 0,
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
                    <MainSearchBox shownCustomers={shownCustomers} shownCars={shownCars} shownOrders={shownOrders} currentFiltered={currentFiltered} shownMotorcycles={shownMotorcycles}/>
                </div>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={CloseModal}
                    style={{
                        overlay: {...Styles.modalOverlay},
                        content: {...Styles.modal}
                    }}
                    ariaHideApp={false}
                >
                    <div style={Styles.modalContainer}>
                        <button 
                            style={Styles.modalCloseButton}
                        >
                            <img 
                                src={CloseSquare} 
                                alt="Close" 
                                style={Styles.modalCloseButtonImage} 
                                onClick={CloseModal}
                            />
                        </button>
                        <h1 style={Styles.modalHeader}>Opret Kunde</h1>
                        <form 
                            onSubmit={HandleSubmit}
                            style={Styles.formContainer}
                        >
                            <input 
                                type="text" 
                                name="name" 
                                value={name} 
                                onChange={
                                    e => setName(e.target.value)
                                } 
                                placeholder="Navn"
                                style={Styles.modalInput}
                                autoFocus
                            />
                            <input 
                                type="text" 
                                name="tlf" 
                                value={phone} 
                                onChange={
                                    e => (NumberCheck(e))
                                } 
                                maxLength={8} 
                                placeholder="Telefonnummer"
                                style={Styles.modalInput}
                            />
                            <input 
                                type="text" 
                                name="email" 
                                value={email} 
                                onChange={
                                    e => setEmail(e.target.value)
                                } 
                                placeholder="Email"
                                style={Styles.modalInput}
                            />
                            <input 
                                type="text"
                                name="address" 
                                value={address} 
                                onChange={
                                    e => setAddress(e.target.value)
                                } 
                                placeholder="Addresse"
                                style={Styles.modalInput}
                            />
                            <input 
                                type="submit" 
                                value="Opret Kunde"
                                style={Styles.modalSubmit}
                            />
                        </form>
                    </div>
                </Modal>
            </>
        );
    }
}

export default Homepage;