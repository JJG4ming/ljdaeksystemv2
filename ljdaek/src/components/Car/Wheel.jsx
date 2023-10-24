import { useEffect } from "react";
import styles from "../../styling/customerPage.jsx"
import WheelLogo from "../../images/wheel.svg"

const Wheel = ({wheel}) => {

    return(
        <>
            <button style={styles.main}>
                <div style={styles.typeItem}>
                    <h1 style={styles.header}>Type</h1>
                    <div style={styles.imageContainer}>
                        <img src={WheelLogo} alt="RegLogo" style={styles.typeImage}/>
                    </div>
                    <h1 style={styles.header}>Navn</h1>
                    <h1 style={styles.dataOrange}>{wheel?.name}</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Størrele for</h1>
                    <h1 style={styles.data}>{wheel?.frontSize}</h1>
                    <h1 style={styles.headerMiddle}>Størrelse bag</h1>
                    <h1 style={styles.data}>{wheel?.rearSize}</h1>
                </div>
                { wheel?.tube ? 
                    <div style={styles.shortItem}>
                        <h1 style={styles.header}>Slange</h1>
                        <h1 style={{...styles.data, ...styles.dataHigh}}>{wheel?.tube ? "Ja" : "Nej"}</h1>
                    </div>
                : 
                    <div style={styles.shortItem}>
                        <h1 style={styles.header}>TPMS</h1>
                        <h1 style={styles.data}>{wheel?.tpms ? "Ja" : "Nej"}</h1>
                        <h1 style={styles.headerMiddle}>Type</h1>
                        <h1 style={styles.data}>{wheel?.alloy ? "Alufælge" : "Stålfælge"}</h1>
                    </div>
                }
            </button>
        </>
    )
}

export default Wheel;