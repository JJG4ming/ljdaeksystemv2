import Wheel from "./Wheel"

const MapWheels = ({shownWheels}) => {
    return (
        <>
            {shownWheels?.map((data, i) => {
                return(
                    <Wheel wheel={data} key={i}/>
                )
            })}
        </>
    )
}

export default MapWheels