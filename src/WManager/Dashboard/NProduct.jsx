import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Label } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Users } from 'lucide-react';
// import Button from 'react-bootstrap/Button';
const mainColors = [

  '#F9E79F', // Light Yellow
  '#ABEBC6', // Light Greenish Blue
  '#AED6F1', // Light Blue
  
  '#F2D7D5', // Light Pink
  '#FDEDEC', // Light Rose
 
  '#FDEBD0', // Light Orange
];

const generateRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * mainColors.length);
  return mainColors[randomIndex];
};
const NCompleted = ({ isOpen, handleClose, details }) => {
    // const {product,supplier,user} =details;
  const randomBackgroundColor = generateRandomColor();

  console.log(details)
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton style={{ fontSize: "1rem" }}>
        Product Details
      </Modal.Header>
      <Modal.Body>
  {
    details && details.map((item) => (  
        <Card
     
        style={{
          display: 'flex',
          flexDirection: 'column', // Set flex direction to column
          width: '30rem',
          marginLeft: "10px",
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          borderRadius: '10px',
          overflow: 'hidden',
          height: "200px",
          marginBottom: "10px",
          background: 'linear-gradient(45deg, #7FB3D5, #BBE5F3)', // Gradient background
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        }}
      >
        <Card.Header style={{ position: 'relative', backgroundColor: randomBackgroundColor, color: '#000'}}>
         <div style={{display:"flex"}}>
          <span >Product no. :- {item?.product?.id}</span>
          {/* <Card.Text style={{ color: '#000', fontSize: "1rem",marginLeft:"120px" }}><span style={{fontStyle:"italic"}}>Order Status : </span> <span style={{ color: "green" }}><span style={{fontStyle:"italic"}}>{item?.order?.status === "delivered"?"Delivered" :""}</span></span></Card.Text> */}
          </div>
        </Card.Header>
        <Card.Body style={{ display: 'flex', flexDirection: 'row', background: "#FFFAFA" }}>
          <div style={{ flex: 1 }}>
          <Card.Text style={{ color: '#000', fontSize: "0.9rem" }}><span style={{fontStyle:"italic"}}>Product Name :  {item?.product?.name}</span></Card.Text>
           <Card.Text style={{ color: '#000', fontSize: "0.9rem" }}><span style={{fontStyle:"italic"}}>Supplier Name :{item?.user?.name}</span></Card.Text>
           <Card.Text style={{ color: '#000', fontSize: "0.9rem" }}><span style={{fontStyle:"italic"}}>Supplier phone :  {item?.user?.phone}</span></Card.Text>
           <Card.Text style={{ color: '#000', fontSize: "0.9rem" }}><span style={{fontStyle:"italic"}}>Supplier Email :  {item?.user?.email}</span></Card.Text>
           <Card.Text style={{ color: '#000', fontSize: "0.9rem" }}><span style={{fontStyle:"italic"}}> Available Quantity :  {item?.wareQ}</span></Card.Text>
          
          </div>
          <div style={{ flex: 0.5 }}>
          <Card.Text style={{ color: '#000', fontSize: "0.9rem" }}><span style={{fontStyle:"italic"}}>Selling Price :  {item?.product?.price}</span></Card.Text>
           <Card.Text style={{ color: '#000', fontSize: "0.9rem" }}><span style={{fontStyle:"italic"}}>Wholesale Price :{item?.product?.whole_sale_price}</span></Card.Text>
           <Card.Text style={{ color: '#000', fontSize: "0.9rem" }}><span style={{fontStyle:"italic"}}>Profit(in %):  {item?.product?.profit}</span></Card.Text>
           <Card.Text style={{ color: '#000', fontSize: "0.9rem" }}><span style={{fontStyle:"italic"}}>Lower Limits :  {item?.lowlimits}</span></Card.Text>      
           <Card.Text style={{ color: '#000', fontSize: "0.9rem" }}><span style={{fontStyle:"italic"}}>Higher Limits :  {item?.highlimits}</span></Card.Text>        
          </div>
        </Card.Body>
     
        
      </Card>
    ))
  }
</Modal.Body>


      <Modal.Footer>
        <Button variant="info" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NCompleted;
