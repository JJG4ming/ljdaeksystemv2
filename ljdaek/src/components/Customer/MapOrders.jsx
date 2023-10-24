import Order from "./Order"

const MapOrders = ({shownOrders, customer}) => {
    return (
        <>
            {shownOrders?.map((data, i) => {
                return(
                    <Order order={data} key={i} owner={customer}/>
                )
            })}
        </>
    )
}

export default MapOrders