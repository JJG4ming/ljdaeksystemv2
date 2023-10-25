import React from "react"
import styles from "../styling/carPage"
import MapCarWheels from "./Car/MapWheels"
import MapMotorcycleWheels from "./Motorcycle/MapWheels"

const WheelSearchBox = ({shownWheels, type}) => {
    
    return (
        <div style={styles.pageSearchBox}>
            {
                type == "Car" ?
            <MapCarWheels shownWheels={shownWheels}/>
            : type == "Motorcycle" ?
            <MapMotorcycleWheels shownWheels={shownWheels}/>
            : <></>
            }
        </div>
    )
}

export default WheelSearchBox;