const styles = {
    customerContainer: {
        display: "flex",
        height: "90vh",
        width: "100vw",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    customerInfoContainer: {
        display: "flex",
        flexDirection: "column",
        border: "10px solid #f2892d",
        height: "70%",
        borderRadius: "8px",
        boxShadow: "0 0 10px 0px rgba(100, 100, 100, 0.7)",
        background: "rgb(240, 240, 240)",
        alignItems: "center"
    },
    customerInfoInnerContainer: {
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "100%",
        justifyContent: "space-evenly"
    },
    customerInfoSet: {
        display: "flex",
        flexDirection: "column",
        background: "white",
        border: "1px solid black",
        boxShadow: "0 0 10px -2px rgba(100, 100, 100, 0.7) inset",
        borderRadius: "8px"
    },
    customerInfoMainHeader: {
        display: "flex",
        margin: 0,
        marginTop: "1vw",
        fontSize: "2vw"
    },
    addButtons: {
        display: "flex",
        justifyContent: "space-between"
    },
    addButton: {
        display: "flex",
        height : "9vw",
        width: "9vw",
        backgroundColor: "#f2892d",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "8px",
        border: 0,
        boxShadow: "0 0 10px 0px rgba(100, 100, 100, 0.7)",
    },
    addButtonImage: {
        display: "flex",
        position: "absolute",
        width: "8vw",
        height: "8vw",
    },
    pageSearchBox: {
        display: "flex",
        width: "100%",
        borderRadius: "8px",
        border: "2px solid black",
        flexDirection: "column",
        alignItems: "center",
        height: "65vh",
        overflow: "auto",
        backgroundColor: "white"
    },
    rightContainer: {
        display: "flex",
        flexDirection: "column",
        width: "55%",
        height: "90%",
        justifyContent: "space-between"
    },
    leftContainer: {
        display: "flex",
        flexDirection: "column",
        width: "30%",
        height: "90%",
        justifyContent: "space-between"
    },
    customerInfoHeader: {
        fontSize: "1.2vw",
        margin: "0.3vw",
        color: "rgb(100, 100, 100)"
    },
    customerInfoData: {
        fontSize: "1.4vw",
        margin: "0.3vw"
    },
    filterContainer: {
        display: "flex",
        width: "20vw",
        justifyContent: "space-between"
    },
    filterButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f2892d",
        height: "6vw",
        width: "6vw",
        borderRadius: "8px",
        border: 0
    },
    rightTopContainer: {
        display: "flex",
        height: "6vw",
        justifyContent: "space-between"
    },
    filterImage: {
        display: "flex",
        width: "5vw",
        height: "5vw"
    },
    searchContainer: {
        display: "flex",
        width: "50%",
        height: "6vw",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    searchInput:{
        display: "flex",
        width: "98%",
        height: "3vw",
        border: "2px solid black",
        fontSize: "2vw",
        textAlign: "center",
        borderRadius: "8px"
    },
    searchH1: {
        display: "flex",
        fontSize: "2vw",
        margin: 0,
        fontWeight: "bolder"
    },
    main: {
        display: "flex",
        width: "98%",
        borderRadius: "8px",
        border: "1px solid black",
        minHeight: "14vw",
        marginTop: "1vw",
        marginBottom: "1vw",
        overflow: "hidden",
        boxShadow: "-0px -0px 10px 3px rgb(160, 160, 160)",
        padding: 0,
        fontFamily: "monospace"
    },
    shortItem: {
        display: "flex",
        width: "33.33%",
        flexDirection: "column",
        alignItems: "center",
        height: "100%"
    },
    longItem: {
        display: "flex",
        width: "33.33%",
        flexDirection: "column",
        alignItems: "center",
        height: "100%"
    },
    typeItem: {
        display: "flex",
        width: "33.33%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f2892d",
        height: "100%"
    },
    imageContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        borderRight: "1px solid black",
        borderBottom: "1px solid black"
    },
    typeImage: {
        width: "5vw",
        height: "5vw"
    },
    header: {
        display: "flex",
        justifyContent: "center",
        fontSize: "1.4vw",
        margin: "0",
        padding: "0",
        borderBottom: "1px solid black",
        width: "100%",
        backgroundColor: "#f2892d"
    },
    headerMiddle: {
        display: "flex",
        justifyContent: "center",
        fontSize: "1.4vw",
        margin: "0",
        padding: "0",
        borderBottom: "1px solid black",
        borderTop: "1px solid black",
        width: "100%",
        backgroundColor: "#f2892d"
    },
    data: {
        display: "flex",
        fontSize: "1.8vw",
        margin: 0,
        alignItems: "center",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        textAlign: "center"
    },
    dataHigh: {
        borderLeft: "1px solid black"
    },
    dataOrange: {
        display: "flex",
        fontSize: "1.8vw",
        margin: 0,
        alignItems: "center",
        height: "100%",
        borderRight: "1px solid black",
        width: "100%",
        justifyContent: "center"
    }

}

export default styles;