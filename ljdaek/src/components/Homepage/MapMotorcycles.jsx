import Motorcycle from "./Motorcycle"

const MapMotorcycles = ({shownMotorcycles, shownCustomers}) => {
    return (
        <>
            {shownMotorcycles?.map((data, i) => {
                return(
                    <Motorcycle motorcycle={data} key={i} owner={shownCustomers.find(x => x.id == data.customerId)}/>
                )
            })}
        </>
    )
}

export default MapMotorcycles