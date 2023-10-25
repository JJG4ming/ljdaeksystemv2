import Modal from 'react-modal';
import Styles from "../../styling/modalStyling"
import CloseSquare from "../../images/closesquare.svg"
import { useCookies } from "react-cookie";
import { useState } from 'react';

const CreateMotorcycleWheel = ({isOpen, setIsOpen, setOriginalWheels, setShownWheels, motorcycle, wheelData, setWheelData}) => {

    const [cookies] = useCookies(['token']);
    const CloseModal = () => {
        setIsOpen(false)
        ClearData()
    }

    const ClearData = () => {
        setWheelData(
            {
                name: "",
                frontSize: "",
                rearSize: "",
                tube: false
            }
        )
    }

    const HandleSubmit = (event) => {
        event.preventDefault()
        var tempWheel = {
            motorcycleId: motorcycle.id,
            name: wheelData.name,
            frontSize: wheelData.frontSize,
            rearSize: wheelData.rearSize,
            tube: wheelData.tube,
        }
        console.log(tempWheel)
        fetch("http://192.168.1.232:5000/api/motorcycleWheel", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                authorization: cookies?.token 
            },
            body: JSON.stringify(tempWheel),
        })
        .then(res => res.json())
        .then((json) => {
            setOriginalWheels(json)
            setShownWheels(json)
            CloseModal()
            ClearData()
        })
    }

    return (
        <Modal
            isOpen={isOpen}
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
                <h1 style={Styles.modalHeader}>Opret Hjulsæt</h1>
                <form 
                    onSubmit={HandleSubmit}
                    style={Styles.formContainer}
                >
                    <input 
                        type="text" 
                        name="name" 
                        value={wheelData.name} 
                        onChange={
                            (e) => {
                                let tempWheel = {...wheelData}
                                tempWheel.name = e.target.value
                                setWheelData(tempWheel)
                            }
                        } 
                        placeholder="Navn"
                        style={Styles.modalInput}
                        autoFocus
                    />
                    <input 
                        type="text" 
                        name="frontSize" 
                        value={wheelData.frontSize} 
                        onChange={
                            (e) => {
                                let tempWheel = {...wheelData}
                                tempWheel.frontSize = e.target.value
                                setWheelData(tempWheel)
                            }
                        } 
                        placeholder="Forhjul"
                        style={Styles.modalInput}
                        autoFocus
                    />
                    <input 
                        type="text" 
                        name="rearSize" 
                        value={wheelData.rearSize} 
                        onChange={
                            (e) => {
                                let tempWheel = {...wheelData}
                                tempWheel.rearSize = e.target.value
                                setWheelData(tempWheel)
                            }
                        } 
                        placeholder="Baghjul"
                        style={Styles.modalInput}
                    />
                    <div
                        style={Styles.modalCheckBoxInput}
                    >
                        <div style={Styles.checkBoxPair}>
                            <label style={Styles.checkBoxLabel}>Slange</label>
                            <input 
                                type="checkbox" 
                                name="tube" 
                                value={wheelData.tube} 
                                style={Styles.checkBox}
                                onChange={
                                    () => {
                                        let tempWheel = {...wheelData}
                                        tempWheel.tube = !tempWheel.tube
                                        setWheelData(tempWheel)
                                    }
                                }
                                checked={wheelData.tube}
                            />
                        </div>
                    </div>
                    <input 
                        type="submit" 
                        value="Opret Hjulsæt"
                        style={Styles.modalSubmit}
                    />
                </form>
            </div>
        </Modal>
    )
}

export default CreateMotorcycleWheel;