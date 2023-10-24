import PlusLogo from "../../images/plus.svg"
import styles from "../../styling/customerPage"

const AddButton = ({button, i, buttons, setButtons, OpenModal}) => {
    return(
        <button style={styles.addButton} onMouseEnter={
            () => {
                var tempState = [...buttons]
                tempState[i].src = PlusLogo
                setButtons(tempState)
            }
        }
        onMouseLeave={
            () => {
                var tempState = [...buttons]
                tempState[i].src = button.originalSrc
                setButtons(tempState)
            }
        }
        onClick={() => OpenModal(button.value)}
        >
            <img src={button.src} alt="Image" style={styles.addButtonImage} />
        </button>
    )
}

export default AddButton;