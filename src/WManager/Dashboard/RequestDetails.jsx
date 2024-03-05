import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RequestDetails = ({ isOpen, handleClose, details }) => {
    if (!details) {
        return null; // Render nothing if details are null
    }

    // Destructure details object
    const { user, product,supplier } = details;

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton style={{ fontSize: "1rem" }}>Product-no. - {product && (product.id)}
              
            </Modal.Header>

            <Modal.Body>
                { supplier && user && product && (
                    <div>
                        <h5>Product details</h5>
                        <h6>Product Name: {product.name}</h6>
                        <h6>Product Wholesale price: {product.whole_sale_price}</h6>
                        <h6>Product Tax: {product.tax}%</h6>
                        <h6>Product Profit: {product.profit}%</h6>
                    </div>

                )}
                {supplier && (
                    <div>
                        <h5>supplier Details</h5>
                        <h6>Name: {user.name}</h6>
                        <h6>Address: {supplier.address},{supplier.pincode}</h6>
                        <h6>email: {user.email}</h6>
                        <h6>Phone: {user.phone}</h6>
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

export default RequestDetails;
