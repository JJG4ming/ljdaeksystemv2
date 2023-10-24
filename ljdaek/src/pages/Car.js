import { Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import styles from "../styling/carPage"
import Header from "../components/Header";
import WheelSearchBox from "../components/WheelSearchBox"
import PlusLogo from "../images/plus.svg"
import WheelLogo from "../images/wheel.svg"
import CreateCarWheel from "../components/Modals/CreateCarWheel";

const Car = ({loggedIn}) => {
    
    const navigate = useNavigate()
    const [car, setCar] = useState({})
    const [originalWheels, setOriginalWheels] = useState([])
    const [shownWheels, setShownWheels] = useState([])
    const [currentFiltered, setCurrentFiltered] = useState("")
    const [lastFiltered, setLastFiltered] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [wheelData, setWheelData] = useState(
        {
            name: "",
            frontSize: "",
            rearSize: "",
            alloy: false,
            tpms: false
        }
    )

    const OpenModal = () => {
        setIsOpen(true);
    }

    const GetData = () => {
        const path = window.location.pathname;

        const id = path.split("/").pop();

        fetch("http://192.168.1.232:5000/api/car/" + id)
        .then(res => res.json())
        .then((json) => {
            if (!json) navigate("../../")
            SetData(json)
        })
    }

    const SetData = (json) => {
        console.log(json)
        setCar(json)
        setOriginalWheels(json.wheels)
        setShownWheels(json.wheels)
    }

    useEffect(() => {
        if (!loggedIn) {
            navigate("../login")
        } else {
            GetData()
        }
    }, [])
    
    if (!loggedIn) {
        return <Navigate replace to="../login" />;
    } else {
        return (
            <>
                <Header />
                <div style={styles.carContainer}>
                    <div style={styles.leftContainer}>
                        <div style={styles.carInfoContainer}>
                            <h1 style={styles.carInfoMainHeader}>Biloplysninger</h1>
                            <div style={styles.carInfoInnerContainer}>
                                <div style={styles.carInfoSet}>
                                    <h1 style={styles.carInfoHeader}>Nummerplade</h1>
                                    <h1 style={styles.carInfoData}>{car?.reg}</h1>
                                </div>
                                <div style={styles.carInfoSet}>
                                    <h1 style={styles.carInfoHeader}>Fabrikant</h1>
                                    <h1 style={styles.carInfoData}>{car?.manufacturer}</h1>
                                </div>
                                <div style={styles.carInfoSet}>
                                    <h1 style={styles.carInfoHeader}>Model</h1>
                                    <h1 style={styles.carInfoData}>{car?.model}</h1>
                                </div>
                                <div style={styles.carInfoSet}>
                                    <h1 style={styles.carInfoHeader}>År</h1>
                                    <h1 style={styles.carInfoData}>{car?.year}</h1>
                                </div>
                            </div>
                        </div>
                        <button 
                            style={styles.addButton}
                            onClick={() => OpenModal()}
                        >
                            <img 
                                src={WheelLogo} 
                                alt="Wheel"
                                style={styles.addButtonImage}
                            />
                            <img 
                                src={PlusLogo} 
                                alt="Plus"
                                style={styles.addButtonImage}
                            />
                            <img 
                                src={WheelLogo} 
                                alt="Wheel"
                                style={styles.addButtonImage}
                            />
                        </button>
                    </div>
                    <div style={styles.rightContainer}>
                        <WheelSearchBox shownWheels={shownWheels}/>
                    </div>
                </div>
                <CreateCarWheel isOpen={isOpen} setIsOpen={setIsOpen} setOriginalWheels={setOriginalWheels} setShownWheels={setShownWheels} car={car} wheelData={wheelData} setWheelData={setWheelData}/>
            </>
        )
    }
}

export default Car