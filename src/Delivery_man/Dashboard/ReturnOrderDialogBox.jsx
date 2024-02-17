import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ReturnOrderDialogBox = ({ isOpen, handleClose, details }) => {
    // Check if details are null or undefined
    if (!details) {
        return null; // Render nothing if details are null
    }

    // Destructure details object
    const { warehouse, user, returnorder, product, customer } = details;

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton style={{ fontSize: "1rem" }}>
                Return order-no. - {returnorder?.id}
                
            </Modal.Header>

            <Modal.Body>
                {warehouse && user && returnorder && product && customer && (
                    <div>
                        <h5>Return order details</h5>
                        <h6>Product Name: {product.name}</h6>
                        <h6>Status: <span style={{ color: returnorder.status === 'delivered' ? "green" : returnorder.status === 'pending' ? "red" : "blue" }}>{returnorder.status}</span></h6>
                        <h6>Quantity: {returnorder.quantity}</h6>
                        <h6>Total Amount: {returnorder.refund_amount}</h6>
                        <h6>Date Time: {returnorder.date_time}</h6>
                        <h6>Return reason: {returnorder.return_reason}</h6>
                      
                    </div>
                )}

                {user && (
                    <div>
                        <h5>Customer details</h5>
                        <h6>Name: {user.name}</h6>
                        <h6>Email: {user.email}</h6>
                        <h6>Phone: {user.phone}</h6>
                        <h6>Address: {customer.address}, {customer.pincode}</h6>
                    </div>
                )}

                {warehouse && (
                    <div>
                        <h5>Warehouse Details</h5>
                        <h6>Name: {warehouse.name}</h6>
                        <h6>Address: {warehouse.address}, {warehouse.pincode}</h6>
                    </div>
                )}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="info" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ReturnOrderDialogBox;
