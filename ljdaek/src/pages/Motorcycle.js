import { Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import styles from "../styling/carPage"
import Header from "../components/Header";
import WheelSearchBox from "../components/WheelSearchBox"
import PlusLogo from "../images/plus.svg"
import WheelLogo from "../images/wheel.svg"
import { useCookies } from "react-cookie";
import CreateMotorcycleWheel from "../components/Modals/CreateMotorcycleWheel";

const Motorcycle = ({loggedIn}) => {
    
    const navigate = useNavigate()
    const [motorcycle, setMotorcycle] = useState({})
    const [originalWheels, setOriginalWheels] = useState([])
    const [cookies, setCookie] = useCookies(['token']);
    const [shownWheels, setShownWheels] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [wheelData, setWheelData] = useState(
        {
            name: "",
            frontSize: "",
            rearSize: "",
            tube: false
        }
    )

    const OpenModal = () => {
        setIsOpen(true);
    }

    const GetData = () => {
        const path = window.location.pathname;

        const id = path.split("/").pop();

        fetch("http://10.10.60.84:5000/api/motorcycle/" + id, {
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

    const SetData = (json) => {
        console.log(json)
        setMotorcycle(json)
        setOriginalWheels(json.wheels)
        setShownWheels(json.wheels)
    }

    useEffect(() => {
        if (!loggedIn) {
            navigate("../../")
        } else {
            GetData()
        }
    }, [])
    
    if (!loggedIn) {
        return <Navigate replace to="../../" />;
    } else {
        return (
            <>
                <Header />
                <div style={styles.carContainer}>
                    <div style={styles.leftContainer}>
                        <div style={styles.carInfoContainer}>
                            <h1 style={styles.carInfoMainHeader}>Motorcykel oplysninger</h1>
                            <div style={styles.carInfoInnerContainer}>
                                <div style={styles.carInfoSet}>
                                    <h1 style={styles.carInfoHeader}>Nummerplade</h1>
                                    <h1 style={styles.carInfoData}>{motorcycle?.reg}</h1>
                                </div>
                                <div style={styles.carInfoSet}>
                                    <h1 style={styles.carInfoHeader}>Fabrikant</h1>
                                    <h1 style={styles.carInfoData}>{motorcycle?.manufacturer}</h1>
                                </div>
                                <div style={styles.carInfoSet}>
                                    <h1 style={styles.carInfoHeader}>Model</h1>
                                    <h1 style={styles.carInfoData}>{motorcycle?.model}</h1>
                                </div>
                                <div style={styles.carInfoSet}>
                                    <h1 style={styles.carInfoHeader}>År</h1>
                                    <h1 style={styles.carInfoData}>{motorcycle?.year}</h1>
                                </div>
                                <div style={styles.carInfoSet}>
                                    <h1 style={styles.carInfoHeader}>Forkortelse</h1>
                                    <h1 style={styles.carInfoData}>{motorcycle?.abbreviation ? motorcycle?.abbreviation : "Ingen forkortelse"}</h1>
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
                        <WheelSearchBox shownWheels={shownWheels} type={"Motorcycle"}/>
                    </div>
                </div>
                <CreateMotorcycleWheel isOpen={isOpen} setIsOpen={setIsOpen} setOriginalWheels={setOriginalWheels} setShownWheels={setShownWheels} motorcycle={motorcycle} wheelData={wheelData} setWheelData={setWheelData}/>
            </>
        )
    }
}

export default Motorcycle