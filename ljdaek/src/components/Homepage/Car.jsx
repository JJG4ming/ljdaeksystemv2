import { useEffect } from "react";
import styles from "../../styling/homePage.jsx"
import RegLogo from "../../images/regnumber.svg"

const Car = ({car, owner}) => {

    return(
        <>
            <div style={styles.main}>
                <div style={styles.typeItem}>
                    <h1 style={styles.header}>Type</h1>
                    <div style={styles.imageContainer}>
                        <img src={RegLogo} alt="RegLogo" style={styles.typeImage}/>
                    </div>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Navn</h1>
                    <h1 style={styles.data}>{owner?.name ? owner.name : "Navn"}</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Nummerplade</h1>
                    <h1 style={styles.data}>{car?.reg}</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Fabrikant</h1>
                    <h1 style={styles.data}>{car?.manufacturer}</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Model</h1>
                    <h1 style={styles.data}>{car?.model}</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>År</h1>
                    <h1 style={styles.data}>{car?.year}</h1>
                </div>
            </div>
        </>
    )
}

export default Car;