import React from "react"
import MapCars from "./Customer/MapCars"
import MapOrders from "./Customer/MapOrders"
import MapAll from "./Customer/MapAll"
import MapMotorcycles from "./Customer/MapMotorcycles"
import styles from "../styling/customerPage"

const CustomerSearchBox = ({shownCars, shownOrders, shownMotorcycles, currentFiltered, customer}) => {
    
    return (
        <div style={styles.pageSearchBox}>
            {currentFiltered == "Car" ?
            <>
                <MapCars shownCars={shownCars} shownCustomers={[customer]}/>
            </>
            : currentFiltered == "Motorcycle" ? 
                <MapMotorcycles shownMotorcycles={shownMotorcycles} shownCustomers={[customer]}/>
            : currentFiltered == "Order" ?
                <MapOrders shownOrders={shownOrders} shownCustomers={[customer]}/>
            : <MapAll shownCars={shownCars} shownOrders={shownOrders} shownCustomers={[customer]} shownMotorcycles={shownMotorcycles}/>
        }
        </div>
    )
}

export default CustomerSearchBox;