import React from "react"
import MapCustomers from "./Homepage/MapCustomers"
import MapCars from "./Homepage/MapCars"
import MapOrders from "./Homepage/MapOrders"
import MapAll from "./Homepage/MapAll"
import MapMotorcycles from "./Homepage/MapMotorcycles"

const MainSearchBox = ({shownCustomers, shownCars, shownOrders, shownMotorcycles, currentFiltered}) => {
    
    return (
        <div style={{
            display: "flex",
            width: "90%",
            borderRadius: "8px",
            border: "2px solid black",
            flexDirection: "column",
            alignItems: "center",
            height: "60vh",
            overflow: "auto",
            backgroundColor: "white"
        }}>
            {currentFiltered == "Customer" ?
                <MapCustomers shownCustomers={shownCustomers}/>
            : currentFiltered == "Reg" ?
            <>
                <MapCars shownCars={shownCars} shownCustomers={shownCustomers}/>
                <MapMotorcycles shownMotorcycles={shownMotorcycles} shownCustomers={shownCustomers}/>
            </>
            : currentFiltered == "Order" ?
                <MapOrders shownOrders={shownOrders}  shownCustomers={shownCustomers}/>
            : <MapAll shownCustomers={shownCustomers} shownCars={shownCars} shownOrders={shownOrders} shownMotorcycles={shownMotorcycles}/>
        }
        </div>
    )
}

export default MainSearchBox;