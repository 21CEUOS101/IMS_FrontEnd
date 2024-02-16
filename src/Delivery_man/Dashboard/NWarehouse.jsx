import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Label } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
const mainColors = [
  '#FADBD8', // Light Coral
  '#F5CBA7', // Light Salmon
  '#F9E79F', // Light Yellow
  '#ABEBC6', // Light Greenish Blue
  '#AED6F1', // Light Blue
  '#D5DBDB', // Light Grayish Blue
  '#F2D7D5', // Light Pink
  '#FDEDEC', // Light Rose
  '#F5EEF8', // Light Lavender
  '#FDEBD0', // Light Orange
];

const generateRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * mainColors.length);
  return mainColors[randomIndex];
};
const NWarehouse = ({ isOpen, handleClose, details }) => {
  const randomBackgroundColor = generateRandomColor();
  // console.log(details)
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton style={{ fontSize: "1rem" }}>
        WareHouses
      </Modal.Header>
      <Modal.Body>
  {
    details && details.map((item) => (
      <Card
        key={item.id} // Make sure to add a unique key prop for each item
        style={{
          display: 'flex',
          flexDirection: 'column', // Set flex direction to column
          width: '20rem',
          marginLeft: "10px",
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          borderRadius: '10px',
          overflow: 'hidden',
          height: "190px",
          marginBottom: "12px",
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
        <Card.Header style={{ position: 'relative', backgroundColor: randomBackgroundColor, color: '#000' }}>
          <span >warehouse no. :- {item && item.id}</span>
        </Card.Header>
        <Card.Body style={{ display: 'flex', flexDirection: 'row', background: "#FFFAFA" }}>
          <div style={{ flex: 0.9 }}>
            <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{ fontStyle: "italic" }}> warehouse name :  {item && item.name}</span></Card.Text>
            <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{ fontStyle: "italic" }}>warehouse Address :  {item && item.address}, {item && item.pincode}</span></Card.Text>
            <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{ fontStyle: "italic" }}>warehouse Status : </span> <span style={{ color: "green" }}><span style={{ fontStyle: "italic" }}>{item && item.status === "active" ? "Active" : ""}</span></span></Card.Text>
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

export default NWarehouse;
