const MapCars = ({shownCars}) => {
    return (
        <>
            {shownCars?.map((data, i) => {
                return(
                    <div key={i}>
                        <h1>{data?.reg}</h1>
                    </div>
                )
            })}
        </>
    )
}

export default MapCars