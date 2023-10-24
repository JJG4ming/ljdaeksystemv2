import Modal from 'react-modal';
import Styles from "../../styling/modalStyling"
import CloseSquare from "../../images/closesquare.svg"
import { useState } from 'react';

const CreateOrder = ({isOpen, setIsOpen, setOriginalOrders, setShownOrders, customer, orderData, setOrderData}) => {

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
        setOrderData({
            number: "",
            description: ""
        })
    }

    const HandleSubmit = (event) => {
        event.preventDefault()
        var tempOrder = {
            customerId: customer.id,
            number: orderData.number,
            description: orderData.description,
        }
        fetch("http://192.168.1.232:5000/api/order", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tempOrder)
        })
        .then(res => res.json())
        .then((json) => {
            setOriginalOrders(json)
            setShownOrders(json)
            CloseModal()
            ClearData()
        })
    }

    return (
        <Modal
            isOpen={isOpen.type == "Order" && isOpen.isOpen}
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
                <h1 style={Styles.modalHeader}>Opret Ordre</h1>
                <form 
                    onSubmit={HandleSubmit}
                    style={Styles.formContainer}
                >
                    <input 
                        type="text" 
                        name="number" 
                        value={orderData.number} 
                        onChange={
                            (e) => {
                                let tempOrder = {...orderData}
                                tempOrder.number = e.target.value
                                setOrderData(tempOrder)
                            }
                        } 
                        placeholder="Nummer"
                        style={Styles.modalInput}
                        autoFocus
                    />
                    <input 
                        type="text" 
                        name="description" 
                        value={orderData.description} 
                        onChange={
                            (e) => {
                                let tempOrder = {...orderData}
                                tempOrder.description = e.target.value
                                setOrderData(tempOrder)
                            }
                        }
                        placeholder="Note"
                        style={Styles.modalInput}
                    />
                    <input 
                        type="submit" 
                        value="Opret Ordre"
                        style={Styles.modalSubmit}
                    />
                </form>
            </div>
        </Modal>
    )
}

export default CreateOrder;