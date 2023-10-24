import Car from "./Car"

const MapCars = ({shownCars, customer}) => {
    return (
        <>
            {shownCars?.map((data, i) => {
                return(
                    <Car car={data} key={i} owner={customer}/>
                )
            })}
        </>
    )
}

export default MapCars