import React, { useEffect, useState } from "react"
import MapCustomers from "./MapCustomers"
import MapCars from "./MapCars"
import MapOrders from "./MapOrders"
import MapAll from "./MapAll"

const SearchedBox = ({shownCustomers, shownCars, shownOrders, currentFiltered}) => {
    
    return (
        <div style={{
            display: "flex",
            width: "90%",
            aspectRatio: "2.7",
            borderRadius: "8px",
            border: "2px solid black",
            flexDirection: "column"
        }}>
            {currentFiltered == "Customer" ?
                <MapCustomers shownCustomers={shownCustomers}/>
            : currentFiltered == "Reg" ?
                <MapCars shownCars={shownCars}/>
            : currentFiltered == "Order" ?
                <MapOrders shownOrders={shownOrders}/>
            : <MapAll shownCustomers={shownCustomers} shownCars={shownCars} shownOrders={shownOrders}/>
        }
        </div>
    )
}

export default SearchedBox;