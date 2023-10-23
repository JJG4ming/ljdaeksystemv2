import styles from "../styling/itemStyling.jsx"
import CustomerLogo from "../images/customer.svg"

const Customer = ({customer}) => {
    return(
        <>
            <div style={styles.main}>
                <div style={styles.typeItem}>
                    <h1 style={styles.header}>Type</h1>
                    <div style={styles.imageContainer}>
                        <img src={CustomerLogo} alt="CustomerLogo" style={styles.typeImage}/>
                    </div>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Navn</h1>
                    <h1 style={styles.data}>{customer.name}</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Tlf</h1>
                    <h1 style={styles.data}>{customer.phone}</h1>
                </div>
                <div style={styles.longItem}>
                    <h1 style={styles.header}>Email</h1>
                    <h1 style={styles.data}>{customer.email.length > 19 ? customer.email.slice(0, 16) + "..." : customer.email}</h1>
                </div>
                <div style={styles.longItem}>
                    <h1 style={styles.header}>Addresse</h1>
                    <h1 style={styles.data}>{customer.address.length > 19 ? customer.address.slice(0, 16) + "..." : customer.address}</h1>
                </div>
            </div>
        </>
    )
}

export default Customer;