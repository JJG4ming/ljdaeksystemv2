import Customer from "./Customer"

const MapCustomers = ({shownCustomers}) => {
    return (
        <>
            {shownCustomers?.map((data, i) => {
                return(
                    <Customer customer={data} key={i}/>
                )
            })}
        </>
    )
}

export default MapCustomers