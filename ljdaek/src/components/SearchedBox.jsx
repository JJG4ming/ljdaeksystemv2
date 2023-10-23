import React, { useEffect, useState } from "react"
import MapCustomers from "./MapCustomers"
import MapCars from "./MapCars"
import MapOrders from "./MapOrders"
import MapAll from "./MapAll"
import MapMotorcycles from "./MapMotorcycles"

const SearchedBox = ({shownCustomers, shownCars, shownOrders, shownMotorcycles, currentFiltered}) => {
    
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

export default SearchedBox;