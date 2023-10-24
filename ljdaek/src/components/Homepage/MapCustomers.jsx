import Customer from "./Customer"

const MapCustomers = ({shownCustomers, HandleCustomerClick}) => {
    return (
        <>
            {shownCustomers?.map((data, i) => {
                return(
                    <Customer customer={data} key={i} HandleCustomerClick={HandleCustomerClick}/>
                )
            })}
        </>
    )
}

export default MapCustomers