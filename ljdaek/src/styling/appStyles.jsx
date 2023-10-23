const Styles = {
    modal: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "80vw",
        height: "40vw",
        border: "1px solid gray",
        borderRadius: "8px",
        backgroundColor: "#f2892d",
        boxShadow: "0 0 50px 10px rgba(100, 100, 100, 0.7)"
    },
    modalOverlay: {
        backgroundColor: "rgba(150, 150, 150, 0.7)"
    },
    modalCloseButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "4vw",
        height: "4vw",
        border: 0,
        borderRadius: "8px",
        backgroundColor: "#FF605C",
        alignSelf: "flex-end",
        marginTop: "10px",
        marginRight: "10px"
    },
    modalCloseButtonImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "4vw",
        height: "4vw",
        border: 0,
        borderRadius: "8px",
        backgroundColor: "#FF605C",
        alignSelf: "flex-end"
    },
    modalContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(230, 230, 230)",
        borderRadius: "8px",
        boxShadow: "inset 0 0 20px 10px rgba(150, 150, 150, 0.5)"
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        gap: "1vw"
    },
    modalHeader: {
        fontSize: "4vw",
        marginTop: 0,
        marginBottom: "2vw"
    },
    modalInput: {
        height: "3.5vw",
        fontSize: "2vw",
        borderRadius: "8px",
        border: "2px solid #f2892d",
        padding: 0,
        boxShadow: "inset 0 0 5px 0px rgba(150, 150, 150, 0.5)"
    },
    modalSubmit: {
        width: "100%",
        height: "7vw",
        borderRadius: "8px",
        border: "2px solid #f2892d",
        padding: 0,
        backgroundColor: "#f2892d",
        fontSize: "4vw",
        color: "white",
        textShadow: "-2px 0 rgb(239 121 17), 0 2px rgb(239 121 17), 2px 0 rgb(239 121 17), 0 -2px rgb(239 121 17)"
    }
}

export default Styles