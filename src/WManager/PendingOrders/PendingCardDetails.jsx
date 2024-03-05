import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RequestDetails = ({ isOpen, handleClose, details }) => {
    if (!details) {
        return null; // Render nothing if details are null
    }

    // Destructure details object
    const { user, product,suppiler,supplyorder } = details;

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton style={{ fontSize: "1rem" }}>supply-Orderno. - {supplyorder && (supplyorder.id)}
              
            </Modal.Header>

            <Modal.Body>
                { suppiler && user && product && supplyorder && (
                    <div>
                        <h5>Order details</h5>
                        <h6>Product Name: {product.name}</h6>
                        <h6>Product Quantity: {supplyorder.quantity}</h6>
                        <h6>Total Amount: {supplyorder.total_amount}</h6>
                        <h6>Order status: {supplyorder.status === 'pending' ? <span style={{fontFamily:"cursive",color:"red"}}>Pending</span> :<>Not avaliable</>}</h6>
                        <h6>Order Request Date and time :{supplyorder.date_time}</h6>
                        <h6>Order payment method:{supplyorder.payment_method}</h6>
                        <h6>Product Wholesale price: {product.whole_sale_price}</h6>
                        <h6>Product Tax: {product.tax}%</h6>
                        <h6>Product Profit: {product.profit}%</h6>
                    </div>

                )}
                {suppiler && (
                    <div>
                        <h5>suppiler Details</h5>
                        <h6>Name: {user.name}</h6>
                        <h6>Address: {suppiler.address},{suppiler.pincode}</h6>
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
