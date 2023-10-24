import { useEffect } from "react";
import styles from "../../styling/customerPage.jsx"
import CarLogo from "../../images/car.svg"
import { useNavigate } from "react-router";

const Car = ({car}) => {

    const navigate = useNavigate()

    return(
        <>
            <button style={styles.main} onClick={() => navigate("cars/" + car.id)}>
                <div style={styles.typeItem}>
                    <h1 style={styles.header}>Type</h1>
                    <div style={styles.imageContainer}>
                        <img src={CarLogo} alt="RegLogo" style={styles.typeImage}/>
                    </div>
                    <h1 style={styles.header}>Nummerplade</h1>
                    <h1 style={styles.dataOrange}>{car?.reg}</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Fabrikant</h1>
                    <h1 style={styles.data}>{car?.manufacturer}</h1>
                    <h1 style={styles.headerMiddle}>År</h1>
                    <h1 style={styles.data}>{car?.year}</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Model</h1>
                    <h1 style={styles.data}>{car?.model}</h1>
                    <h1 style={styles.headerMiddle}>Hjulsæt</h1>
                    <h1 style={styles.data}>{car?.wheels?.length}</h1>
                </div>
            </button>
        </>
    )
}

export default Car;