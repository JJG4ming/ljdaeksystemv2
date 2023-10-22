const MapCustomers = ({shownCustomers}) => {
    return (
        <>
            {shownCustomers?.map((data, i) => {
                return(
                    <div key={i}>
                        <h1>{data?.name}</h1>
                    </div>
                )
            })}
        </>
    )
}

export default MapCustomers