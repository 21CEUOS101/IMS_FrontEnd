import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const OrderDetailsDialog = ({ isOpen, handleClose, details }) => {
    if (!details) {
        return null; // Render nothing if details are null
    }

    // Destructure details object
    const { r_warehouse,s_warehouse, w2worder, product } = details;

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: "1rem" }}>w2wOrder-no. - {w2worder && (w2worder.id)}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {r_warehouse && s_warehouse && w2worder && product && (
                    <div>
                        <h5>w2wOrder details</h5>
                        <h6>Product Name: {product.name}</h6>
                        <h6>Status:{w2worder.status == "delivered"?<span style={{ color: "green" }}> Delivered</span>:w2worder.status=== 'pending'?<span style={{ color: "red" }}> Pending</span>:<span style={{ color: "blue" }}> shipped</span>}</h6>
                        <h6>Quantity: {w2worder.quantity}</h6>
                        <h6>Total Amount: {w2worder.total_amount}</h6>
                        <h6>Delivery Date Time: {w2worder.delivered_date_time}</h6>
                        <h6>Date Time: {w2worder.date_time}</h6>
                        <h6>Order Id : {w2worder.orderId}</h6>
                    </div>

                )}
                {s_warehouse && (
                    <div>
                        <h5>src warehouse details</h5>
                        <h6>Name: {s_warehouse.name}</h6>
                        <h6>Address: {s_warehouse.address},{s_warehouse.pincode}</h6>
                    </div>
                )}
               {r_warehouse && (
                    <div>
                        <h5>dest. warehouse details</h5>
                        <h6>Name: {r_warehouse.name}</h6>
                        <h6>Address: {r_warehouse.address},{r_warehouse.pincode}</h6>
                    </div>
                )}
               
            </Modal.Body>
            <Modal.Footer>
                <Button variant="info" onClick={handleClose} >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default OrderDetailsDialog;
