import styles from "../../styling/homePage.jsx"
import OrderLogo from "../../images/invoice.svg"

const Order = ({order}) => {
    return(
        <>
            <div style={styles.main}>
                <div style={styles.typeItem}>
                    <h1 style={styles.header}>Type</h1>
                    <div style={styles.imageContainer}>
                        <img src={OrderLogo} alt="OrderLogo" style={styles.typeImage}/>
                    </div>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Navn</h1>
                    <h1 style={styles.data}>Navn på person</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Nummer</h1>
                    <h1 style={styles.data}>{order.number}</h1>
                </div>
                <div style={styles.customItem1}>
                    <h1 style={styles.header}>Note</h1>
                    <h1 style={styles.data}>{order.description}</h1>
                </div>
            </div>
        </>
    )
}

export default Order;