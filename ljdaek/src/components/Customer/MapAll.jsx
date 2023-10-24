import MapCars from "./MapCars"
import MapMotorcycles from "./MapMotorcycles"
import MapOrders from "./MapOrders"

const MapAll = ({shownCars, shownOrders, shownMotorcycles, customer}) => {
    return (
        <>
            <MapCars shownCars={shownCars} customer={customer}/>
            <MapMotorcycles shownMotorcycles={shownMotorcycles} customer={customer}/>
            <MapOrders shownOrders={shownOrders} customer={customer}/>
        </>
    )
}

export default MapAll