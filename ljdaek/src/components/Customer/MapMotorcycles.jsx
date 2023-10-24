import Motorcycle from "./Motorcycle"

const MapMotorcycles = ({shownMotorcycles, customer}) => {
    return (
        <>
            {shownMotorcycles?.map((data, i) => {
                return(
                    <Motorcycle motorcycle={data} key={i} owner={customer}/>
                )
            })}
        </>
    )
}

export default MapMotorcycles