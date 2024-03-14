import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RequestDetails = ({ isOpen, handleClose, details }) => {
    if (!details) {
        return null; // Render nothing if details are null
    }

    // Destructure details object
    const { d_user, product,supplyorder,warehouse,user,suppiler } = details;

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton style={{ fontSize: "1rem" }}>supply-Orderno.- {supplyorder && (supplyorder.id)}
              
            </Modal.Header>

            <Modal.Body>
                { warehouse && d_user && user && product && supplyorder && (
                    <div>
                        <h5>Order Details</h5>
                        <h6>Product Name: {product.name}</h6>
                        <h6>Product Quantity: {supplyorder.quantity}</h6>
                        <h6>Total Amount: {supplyorder.total_amount}</h6>
                        <h6>Order status: {supplyorder.status === 'approved' ? <span style={{fontStyle:"italic",color:"purple"}}>Approved</span> :<>Not avaliable</>}</h6>
                        <h6>Order Request Date and time: {supplyorder.date_time}</h6>
                        <h6>Order payment method: {supplyorder.payment_method}</h6>
                        {/* <h6>Delivered Date and time: {supplyorder.delivered_date_time}</h6> */}
                        <h6>Product Wholesale price: {product.whole_sale_price}</h6>
                       
                    </div>

                )}
                  {suppiler && (
                    <div>
                        <h5>Supplier Details</h5>
                        <h6>Name: {user.name}</h6>
                        <h6>Email: {user.email}</h6>
                        <h6>phone: {user.phone}</h6>
                        <h6>Address: {suppiler.address},{suppiler.pincode}</h6>
                    </div>
                )}
             
                 {d_user && (
                    <div>
                        <h5>Delivery man Details</h5>
                        <h6>Name: {d_user.name}</h6>
                        <h6>Email: {d_user.email}</h6>
                        <h6>phone: {d_user.phone}</h6>
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
