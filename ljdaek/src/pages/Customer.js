import { Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import styles from "../styling/customerPage"
import { useCookies } from "react-cookie";
import Header from "../components/Header";
import CustomerSearchBox from "../components/CustomerSearchBox"
import OrderLogo from "../images/invoice.svg"
import CarLogo from "../images/car.svg"
import MotorcycleLogo from "../images/motorcycle.svg"
import AddButton from "../components/Customer/AddButton";
import CreateCar from "../components/Modals/CreateCar";
import CreateMotorcycle from "../components/Modals/CreateMotorcycle";
import CreateOrder from "../components/Modals/CreateOrder";

const Customer = ({loggedIn}) => {
    
    const [customer, setCustomer] = useState({})
    const [cookies] = useCookies(['token']);
    const [carData, setCarData] = useState(
        {
            reg: "",
            manufacturer: "",
            model: "",
            year: ""
        }
    )
    const [motorcycleData, setMotorcycleData] = useState(
        {
            reg: "",
            manufacturer: "",
            model: "",
            year: "",
            abbreviation: ""
        }
    )
    const [orderData, setOrderData] = useState(
        {
            number: "",
            description: "",
        }
    )
    const navigate = useNavigate()
    const [originalCars, setOriginalCars] = useState([])
    const [shownCars, setShownCars] = useState([])
    const [originalOrders, setOriginalOrders] = useState([])
    const [shownOrders, setShownOrders] = useState([])
    const [originalMotorcycles, setOriginalMotorcycles] = useState([])
    const [shownMotorcycles, setShownMotorcycles] = useState([])
    const [currentFiltered, setCurrentFiltered] = useState("")
    const [lastFiltered, setLastFiltered] = useState("")
    const [isOpen, setIsOpen] = useState(
        {
            isOpen: false,
            type: ""
        }
    )
    const [buttons, setButtons ] = useState([
        {
            value: "Car", 
            src:CarLogo, 
            originalSrc:CarLogo
        }, 
        {
            value: "Motorcycle", 
            src:MotorcycleLogo, 
            originalSrc:MotorcycleLogo}, 
        {
            value: "Order", 
            src:OrderLogo, 
            originalSrc:OrderLogo
        }
    ])
    const filterButtons = [{src: CarLogo, value:"Car"}, {src: MotorcycleLogo, value:"Motorcycle"}, {src: OrderLogo, value:"Order"}]


    const OpenModal = (type) => {
        let tempData = {...isOpen}
        tempData.type = type
        tempData.isOpen = true
        setIsOpen(tempData);
    }

    const GetData = () => {
        const path = window.location.pathname;

        const id = path.split("/").pop();

        fetch("http://10.10.60.84:5000/api/customer/" + id, {
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
                    SetData(json)
                })
            }
        })
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

    const SetData = (json) => {
        setCustomer(json)
        setOriginalCars(json.cars)
        setShownCars(json.cars)
        setOriginalMotorcycles(json.motorcycles)
        setShownMotorcycles(json.motorcycles)
        setOriginalOrders(json.orders)
        setShownOrders(json.orders)
    }

    const Search = (event) => {
        var text = event.target.value
        var tempCars = [...originalCars]
        var tempMotorcycles = [...originalMotorcycles]
        var tempOrders = [...originalOrders]
        if(text && text.length > 0) {
            setShownCars(tempCars.filter((x) => {
                let reg = x?.reg?.toLowerCase()
                let model = x?.model?.toLowerCase()
                return reg?.includes(text.toLowerCase()) || model?.includes(text.toLowerCase())
            }))
            setShownMotorcycles(tempMotorcycles.filter((x) => {
                let reg = x?.reg?.toLowerCase()
                let model = x?.model?.toLowerCase()
                return reg?.includes(text.toLowerCase()) || model?.includes(text.toLowerCase())
            }))
            setShownOrders(tempOrders.filter((x) => {
                let number = x?.number?.toLowerCase()
                return number?.includes(text.toLowerCase())
            }))
        } else {
            setShownCars([...originalCars])
            setShownMotorcycles([...originalMotorcycles])
            setShownOrders([...originalOrders])
        }
    }

    useEffect(() => {
        if (!loggedIn) {
            navigate("../../login")
        } else {
            GetData()
        }
    }, [])

    const [state, setState] = useState({img: MotorcycleLogo})
    
    if (!loggedIn) {
        return <Navigate replace to="../../login" />;
    } else {
        return (
            <>
                <Header />
                <div style={styles.customerContainer}>
                    <div style={styles.leftContainer}>
                        <div style={styles.customerInfoContainer}>
                            <h1 style={styles.customerInfoMainHeader}>Kundeoplysninger</h1>
                            <div style={styles.customerInfoInnerContainer}>
                                <div style={styles.customerInfoSet}>
                                    <h1 style={styles.customerInfoHeader}>Navn</h1>
                                    <h1 style={styles.customerInfoData}>{customer?.name}</h1>
                                </div>
                                <div style={styles.customerInfoSet}>
                                    <h1 style={styles.customerInfoHeader}>Telefonnummer</h1>
                                    <h1 style={styles.customerInfoData}>{customer?.phone}</h1>
                                </div>
                                <div style={styles.customerInfoSet}>
                                    <h1 style={styles.customerInfoHeader}>Email</h1>
                                    <h1 style={styles.customerInfoData}>{customer?.email ? customer?.email : "Ingen email"}</h1>
                                </div>
                                <div style={styles.customerInfoSet}>
                                    <h1 style={styles.customerInfoHeader}>Addresse</h1>
                                    <h1 style={styles.customerInfoData}>{customer?.address ? customer?.address : "Ingen addresse"}</h1>
                                </div>
                            </div>
                        </div>
                        <div style={styles.addButtons}>
                            {buttons?.map((button, i) => {
                                return(
                                    <AddButton button={button} i={i} key={i} buttons={buttons} setButtons={setButtons} OpenModal={OpenModal}/>
                                )
                            })}
                        </div>
                    </div>
                    <div style={styles.rightContainer}>
                        <div style={styles.rightTopContainer}>
                            <div style={styles.searchContainer}>
                                <h1 style={styles.searchH1}>Søg i Database</h1>
                                <input style={styles.searchInput} onChange={Search}/>
                            </div>
                            <div style={styles.filterContainer}>
                                {filterButtons?.map((button, i) => {
                                    return(
                                        <button 
                                            style={styles.filterButton}
                                            onClick={() => FilterClick(button.value)}
                                        >
                                            <img 
                                                style={styles.filterImage} 
                                                src={button.src}
                                            />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <CustomerSearchBox shownCars={shownCars} shownMotorcycles={shownMotorcycles} shownOrders={shownOrders} customer={customer} currentFiltered={currentFiltered}/>
                    </div>
                </div>
                <CreateCar isOpen={isOpen} setIsOpen={setIsOpen} setOriginalCars={setOriginalCars} setShownCars={setShownCars} customer={customer} carData={carData} setCarData={setCarData}/>
                <CreateMotorcycle isOpen={isOpen} setIsOpen={setIsOpen} setOriginalMotorcycles={setOriginalMotorcycles} setShownMotorcycles={setShownMotorcycles} customer={customer} motorcycleData={motorcycleData} setMotorcycleData={setMotorcycleData}/>
                <CreateOrder isOpen={isOpen} setIsOpen={setIsOpen} setOriginalOrders={setOriginalOrders} setShownOrders={setShownOrders} customer={customer} orderData={orderData} setOrderData={setOrderData}/>
            </>
        )
    }
}

export default Customer