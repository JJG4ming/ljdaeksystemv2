const MapAll = ({shownCustomers, shownCars, shownOrders}) => {
    return (
        <>
            {shownCustomers?.map((data, i) => {
                return(
                    <div key={i}>
                        <h1>{data?.name}</h1>
                    </div>
                )
            })}
            {shownCars?.map((data, i) => {
                return(
                    <div key={i}>
                        <h1>{data?.reg}</h1>
                    </div>
                )
            })}
            {shownOrders?.map((data, i) => {
                return(
                    <div key={i}>
                        <h1>{data?.number}</h1>
                    </div>
                )
            })}
        </>
    )
}

export default MapAll