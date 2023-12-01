import Modal from 'react-modal';
import Styles from "../../styling/modalStyling"
import CloseSquare from "../../images/closesquare.svg"
import { useCookies } from "react-cookie";
import { useState } from 'react';

const CreateMotorcycle = ({isOpen, setIsOpen, setOriginalMotorcycles, setShownMotorcycles, customer, motorcycleData, setMotorcycleData}) => {

    const [cookies] = useCookies(['token']);
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
        setMotorcycleData({
            reg: "",
            manufacturer: "",
            model: "",
            year: "",
            abbreviation: ""
        })
    }

    const HandleSubmit = (event) => {
        event.preventDefault()
        var tempMotorcycle = {
            customerId: customer.id,
            reg: motorcycleData?.reg,
            manufacturer: motorcycleData?.manufacturer,
            model: motorcycleData?.model,
            year: motorcycleData?.year,
            abbreviation: motorcycleData?.abbreviation
        }
        fetch("http://10.10.60.84:5000/api/motorcycle", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                authorization: cookies?.token 
            },
            body: JSON.stringify(tempMotorcycle),
        })
        .then(res => res.json())
        .then((json) => {
            setOriginalMotorcycles(json)
            setShownMotorcycles(json)
            CloseModal()
            ClearData()
        })
    }

    return (
        <Modal
            isOpen={isOpen.type == "Motorcycle" && isOpen.isOpen}
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
                <h1 style={Styles.modalHeader}>Opret Motorcykel</h1>
                <form 
                    onSubmit={HandleSubmit}
                    style={Styles.formContainer}
                >
                    <input 
                        type="text" 
                        name="reg" 
                        value={motorcycleData?.reg} 
                        onChange={
                            (e) => {
                                let tempMotorcycle = {...motorcycleData}
                                tempMotorcycle.reg = e.target.value
                                setMotorcycleData(tempMotorcycle)
                            }
                        } 
                        placeholder="Nummerplade"
                        style={Styles.modalInput}
                        autoFocus
                    />
                    <input 
                        type="text" 
                        name="manufacturer" 
                        value={motorcycleData?.manufacturer} 
                        onChange={
                            (e) => {
                                let tempMotorcycle = {...motorcycleData}
                                tempMotorcycle.manufacturer = e.target.value
                                setMotorcycleData(tempMotorcycle)
                            }
                        }
                        placeholder="Fabrikant"
                        style={Styles.modalInput}
                    />
                    <input 
                        type="text" 
                        name="model" 
                        value={motorcycleData?.model} 
                        onChange={
                            (e) => {
                                let tempMotorcycle = {...motorcycleData}
                                tempMotorcycle.model = e.target.value
                                setMotorcycleData(tempMotorcycle)
                            }
                        } 
                        placeholder="Model"
                        style={Styles.modalInput}
                    />
                    <input 
                        type="text"
                        name="year" 
                        value={motorcycleData?.year} 
                        onChange={
                            (e) => {
                                let tempMotorcycle = {...motorcycleData}
                                tempMotorcycle.year = e.target.value
                                setMotorcycleData(tempMotorcycle)
                            }
                        } 
                        placeholder="År"
                        style={Styles.modalInput}
                    />
                    <input 
                        type="text"
                        name="abbreviation" 
                        value={motorcycleData?.abbreviation} 
                        onChange={
                            (e) => {
                                let tempMotorcycle = {...motorcycleData}
                                tempMotorcycle.abbreviation = e.target.value
                                setMotorcycleData(tempMotorcycle)
                            }
                        } 
                        placeholder="Forkortelse"
                        style={Styles.modalInput}
                    />
                    <input 
                        type="submit" 
                        value="Opret Motorcykel"
                        style={Styles.modalSubmit}
                    />
                </form>
            </div>
        </Modal>
    )
}

export default CreateMotorcycle;