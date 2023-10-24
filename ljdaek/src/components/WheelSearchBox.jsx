import React from "react"
import styles from "../styling/carPage"
import MapWheels from "./Car/MapWheels"

const WheelSearchBox = ({shownWheels}) => {
    
    return (
        <div style={styles.pageSearchBox}>
            <MapWheels shownWheels={shownWheels}/>
        </div>
    )
}

export default WheelSearchBox;