const MapOrders = ({shownOrders}) => {
    return (
        <>
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

export default MapOrders