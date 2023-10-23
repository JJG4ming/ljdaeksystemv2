import Car from "./Car"

const MapCars = ({shownCars, shownCustomers}) => {
    return (
        <>
            {shownCars?.map((data, i) => {
                return(
                    <Car car={data} key={i} owner={shownCustomers.find(x => x.id == data.customerId)}/>
                )
            })}
        </>
    )
}

export default MapCars