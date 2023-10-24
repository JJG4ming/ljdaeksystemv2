import styles from "../../styling/customerPage.jsx"
import OrderLogo from "../../images/invoice.svg"
import { useNavigate } from "react-router";

const Order = ({order}) => {

    const navigate = useNavigate()

    return(
        <>
            <button style={styles.main} onClick={() => navigate("orders/" + order.id)}>
                <div style={styles.typeItem}>
                    <h1 style={styles.header}>Type</h1>
                    <div style={styles.imageContainer}>
                        <img src={OrderLogo} alt="OrderLogo" style={styles.typeImage}/>
                    </div>
                    <h1 style={styles.header}>Nummer</h1>
                    <h1 style={styles.dataOrange}>{order?.number}</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Dato</h1>
                    <h1 style={styles.data}>{order?.createdAt}</h1>
                    <h1 style={styles.headerMiddle}>Antal Fakturaer</h1>
                    <h1 style={styles.data}>{order?.invoices?.length}</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Note</h1>
                    <h1 style={{...styles.data, ...styles.dataHigh}}>{order?.description}</h1>
                </div>
            </button>
        </>
    )
}

export default Order;