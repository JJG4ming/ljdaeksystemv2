const styles = {
    main: {
        display: "flex",
        width: "98%",
        borderRadius: "8px",
        border: "1px solid black",
        minHeight: "8vw",
        marginTop: "1vw",
        marginBottom: "1vw",
        overflow: "hidden",
        boxShadow: "-0px -0px 10px 3px rgb(160, 160, 160)",
        fontFamily: "monospace"
    },
    shortItem: {
        display: "flex",
        width: "20%",
        flexDirection: "column",
        alignItems: "center"
    },
    longItem: {
        display: "flex",
        width: "30%",
        flexDirection: "column",
        alignItems: "center"
    },
    customItem1:{
        display: "flex",
        width: "60%",
        flexDirection: "column",
        alignItems: "center"
    },
    typeItem: {
        display: "flex",
        width: "8%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f2892d"
    },
    imageContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
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
    data: {
        display: "flex",
        fontSize: "1.8vw",
        margin: 0,
        alignItems: "center",
        height: "100%"
    },
    customerButton: {
        display: "flex",
        border: 0,
        padding: 0,
        width: "100%",
        justifyContent: "center",
        backgroundColor: "white"
    }
}

export default styles