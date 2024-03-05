import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RequestDetails = ({ isOpen, handleClose, details }) => {
    if (!details) {
        return null; // Render nothing if details are null
    }

    // Destructure details object
    const { D_user, product,supplyOrder,warehouse,Manager_user } = details;

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton style={{ fontSize: "1rem" }}>supply-Orderno.- {supplyOrder && (supplyOrder.id)}
              
            </Modal.Header>

            <Modal.Body>
                { warehouse && D_user && Manager_user && product && supplyOrder && (
                    <div>
                        <h5>Order Details</h5>
                        <h6>Product Name: {product.name}</h6>
                        <h6>Product Quantity: {supplyOrder.quantity}</h6>
                        <h6>Total Amount: {supplyOrder.total_amount}</h6>
                        <h6>Order status: {supplyOrder.status === 'approved' ? <span style={{fontStyle:"italic",color:"purple"}}>Approved</span> :<>Not avaliable</>}</h6>
                        <h6>Order Request Date and time: {supplyOrder.date_time}</h6>
                        <h6>Order payment method: {supplyOrder.payment_method}</h6>
                        <h6>Delivered Date and time: {supplyOrder.delivered_date_time}</h6>
                        <h6>Product Wholesale price: {product.whole_sale_price}</h6>
                       <h6>Is Delivery_man is Free: <span style={{fontStyle:"italic", color:"green"}}>{supplyOrder.isdelivery_man_Available === true ? "True" : "False"} </span></h6>
                    </div>

                )}
                {warehouse && (
                    <div>
                        <h5>WareHouse Details</h5>
                        <h6>Name: {warehouse.name}</h6>
                        <h6>Address: {warehouse.address},{warehouse.pincode}</h6>
                    </div>
                )}
                {Manager_user && (
                    <div>
                        <h5>WareHouse Manager Details</h5>
                        <h6>Name: {Manager_user.name}</h6>
                        <h6>Email: {Manager_user.email}</h6>
                        <h6>phone: {Manager_user.phone}</h6>
                    </div>
                )}
                 {D_user && (
                    <div>
                        <h5>Delivery man Details</h5>
                        <h6>Name: {D_user.name}</h6>
                        <h6>Email: {D_user.email}</h6>
                        <h6>phone: {D_user.phone}</h6>
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
