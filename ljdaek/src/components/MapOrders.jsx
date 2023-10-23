import Order from "./Order"

const MapOrders = ({shownOrders}) => {
    return (
        <>
            {shownOrders?.map((data, i) => {
                return(
                    <Order order={data} key={i}/>
                )
            })}
        </>
    )
}

export default MapOrders