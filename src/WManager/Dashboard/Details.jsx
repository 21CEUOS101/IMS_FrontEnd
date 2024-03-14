import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RequestDetails = ({ isOpen, handleClose, details }) => {
    if (!details) {
        return null; // Render nothing if details are null
    }

    // Destructure details object
   

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton style={{ fontSize: "1rem" }}>WareHouse Details
              
            </Modal.Header>

            <Modal.Body>
                
             
                 {details && (
                    <div>
                        
                        <strong style={{fontStyle:"italic",}}>WareHouse Name :</strong> <span style={{fontStyle:"italic"}}>{details?.name}</span>  <br></br><br></br>

                        <strong style={{fontStyle:"italic",}}>WareHouse Address  :</strong> <span style={{fontStyle:"italic"}}>{details?.address},{details?.pincode}</span> <br></br><br></br>
                        <strong style={{fontStyle:"italic",}}>WareHouse Status  :</strong> {details?.status === "active" ? <span style={{fontStyle:"italic",color:"green"}}>Active</span>:<></>}
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
