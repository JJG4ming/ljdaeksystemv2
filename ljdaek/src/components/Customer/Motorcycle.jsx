import styles from "../../styling/customerPage.jsx"
import motorcycleLogo from "../../images/motorcycle.svg"
import { useNavigate } from "react-router";

const Motorcycle = ({motorcycle}) => {

    const navigate = useNavigate()

    return(
        <>
            <button style={styles.main} onClick={() => navigate("motorcycles/" + motorcycle.id)}>
                <div style={styles.typeItem}>
                    <h1 style={styles.header}>Type</h1>
                    <div style={styles.imageContainer}>
                        <img src={motorcycleLogo} alt="RegLogo" style={styles.typeImage}/>
                    </div>
                    <h1 style={styles.header}>Nummerplade</h1>
                    <h1 style={styles.dataOrange}>{motorcycle?.reg}</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Fabrikant</h1>
                    <h1 style={styles.data}>{motorcycle?.manufacturer}</h1>
                    <h1 style={styles.headerMiddle}>År</h1>
                    <h1 style={styles.data}>{motorcycle?.year}</h1>
                </div>
                <div style={styles.shortItem}>
                    <h1 style={styles.header}>Model</h1>
                    <h1 style={styles.data}>{motorcycle?.model}</h1>
                    <h1 style={styles.headerMiddle}>Hjulsæt</h1>
                    <h1 style={styles.data}>{motorcycle?.wheels?.length}</h1>
                </div>
            </button>
        </>
    )
}

export default Motorcycle;