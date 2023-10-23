import Motorcycle from "./Motorcycle"

const MapMotorcycles = ({shownMotorcycles}) => {
    return (
        <>
            {shownMotorcycles?.map((data, i) => {
                return(
                    <Motorcycle motorcycle={data} key={i}/>
                )
            })}
        </>
    )
}

export default MapMotorcycles