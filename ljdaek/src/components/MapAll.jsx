import MapCars from "./MapCars"
import MapCustomers from "./MapCustomers"
import MapMotorcycles from "./MapMotorcycles"
import MapOrders from "./MapOrders"

const MapAll = ({shownCustomers, shownCars, shownOrders, shownMotorcycles}) => {
    return (
        <>
            <MapCustomers shownCustomers={shownCustomers}/>
            <MapCars shownCars={shownCars}  shownCustomers={shownCustomers}/>
            <MapMotorcycles shownMotorcycles={shownMotorcycles}  shownCustomers={shownCustomers}/>
            <MapOrders shownOrders={shownOrders}  shownCustomers={shownCustomers}/>
        </>
    )
}

export default MapAll