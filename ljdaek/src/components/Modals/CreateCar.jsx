import Modal from 'react-modal';
import Styles from "../../styling/modalStyling"
import CloseSquare from "../../images/closesquare.svg"
import { useState } from 'react';

const CreateCar = ({isOpen, setIsOpen, setOriginalCars, setShownCars, customer, carData, setCarData}) => {

    const CloseModal = () => {
        setIsOpen(
            {
                type: "",
                isOpen: false
            }
        )
        ClearData()
    }

    const ClearData = () => {
        setCarData({
            reg: "",
            manufacturer: "",
            model: "",
            year: ""
        })
    }

    const HandleSubmit = (event) => {
        event.preventDefault()
        var tempCar = {
            customerId: customer.id,
            reg: carData.reg,
            manufacturer: carData.manufacturer,
            model: carData.model,
            year: carData.year
        }
        fetch("http://192.168.1.232:5000/api/car", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tempCar)
        })
        .then(res => res.json())
        .then((json) => {
            setOriginalCars(json)
            setShownCars(json)
            CloseModal()
            ClearData()
        })
    }

    return (
        <Modal
            isOpen={isOpen.type == "Car" && isOpen.isOpen}
            onRequestClose={CloseModal}
            style={{
                overlay: {...Styles.modalOverlay},
                content: {...Styles.modal}
            }}
            ariaHideApp={false}
        >
            <div style={Styles.modalContainer}>
                <button 
                    style={Styles.modalCloseButton}
                >
                    <img 
                        src={CloseSquare} 
                        alt="Close" 
                        style={Styles.modalCloseButtonImage} 
                        onClick={CloseModal}
                    />
                </button>
                <h1 style={Styles.modalHeader}>Opret Bil</h1>
                <form 
                    onSubmit={HandleSubmit}
                    style={Styles.formContainer}
                >
                    <input 
                        type="text" 
                        name="reg" 
                        value={carData.reg} 
                        onChange={
                            (e) => {
                                let tempCar = {...carData}
                                tempCar.reg = e.target.value
                                setCarData(tempCar)
                            }
                        } 
                        placeholder="Nummerplade"
                        style={Styles.modalInput}
                        autoFocus
                    />
                    <input 
                        type="text" 
                        name="manufacturer" 
                        value={carData.manufacturer} 
                        onChange={
                            (e) => {
                                let tempCar = {...carData}
                                tempCar.manufacturer = e.target.value
                                setCarData(tempCar)
                            }
                        } 
                        maxLength={8} 
                        placeholder="Fabrikant"
                        style={Styles.modalInput}
                    />
                    <input 
                        type="text" 
                        name="model" 
                        value={carData.model} 
                        onChange={
                            (e) => {
                                let tempCar = {...carData}
                                tempCar.model = e.target.value
                                setCarData(tempCar)
                            }
                        } 
                        placeholder="Model"
                        style={Styles.modalInput}
                    />
                    <input 
                        type="text"
                        name="year" 
                        value={carData.year} 
                        onChange={
                            (e) => {
                                let tempCar = {...carData}
                                tempCar.year = e.target.value
                                setCarData(tempCar)
                            }
                        } 
                        placeholder="År"
                        style={Styles.modalInput}
                    />
                    <input 
                        type="submit" 
                        value="Opret Bil"
                        style={Styles.modalSubmit}
                    />
                </form>
            </div>
        </Modal>
    )
}

export default CreateCar;