import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import OrderDetailsDialog from '../DialogboxCard/OrderDetailsDialog';
import { Label } from 'semantic-ui-react';

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

function HoverCardWithHeaderExample({ data }) {
  const { warehouse, user, order, product, customer } = data;
  const randomBackgroundColor = generateRandomColor();
  const [isHovered1, setIsHovered1] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleOpenDialog = (orderDetails) => {
    setSelectedOrder(orderDetails);
    setIsDialogOpen(true);
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column', // Set flex direction to column
        width: '65rem',
        marginLeft: "10px",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        borderRadius: '10px',
        overflow: 'hidden',
        height: "180px",
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
      <Card.Header style={{ position: 'relative', backgroundColor: randomBackgroundColor, color: '#000', fontSize: "1.2rem", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem',height:"40px" }}>
        <Label as='b' color='green' ribbon style={{ position: 'absolute',marginLeft:"20px", top: '0.5rem', left: '-1.5rem', fontSize: '1rem' }}>
          Customer Order
        </Label>
        <span style={{marginLeft:"700px"}}>Order no. :- {order?.id}</span>
      </Card.Header>
      <Card.Body style={{ display: 'flex', flexDirection: 'row', background: "#FFFAFA" }}>
        <div style={{ flex: 1.4 }}>
        <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Customer name :  {user.name}</span></Card.Text>
         <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Customer phone :{user.phone}</span></Card.Text>
         <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Customer Address :  {customer.address}, {customer.pincode}</span></Card.Text>
        </div>
        <div style={{ flex: 0.7 }}>

          <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Product name : {product.name}</span></Card.Text>
          <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Quantity :{order.quantity}</span></Card.Text>
         <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Total amount : {order.total_amount}</span></Card.Text>
        </div>
        <div style={{ flex: 0.5 }}>
          <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Order Status : </span> <span style={{ color: "green" }}><span style={{fontStyle:"italic"}}>{order.status === "delivered"?"Delivered" :""}</span></span></Card.Text>
          <button
        style={{
          backgroundColor: isHovered1 ? '#000000' : '#FF1493',
          color: 'white',
          fontSize: '16px',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: "10px",
          transition: 'background-color 0.3s ease',


        }}
        onClick={() => handleOpenDialog(data)}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        OrderDetails
      </button>
        </div>
      </Card.Body>
   
      <OrderDetailsDialog isOpen={isDialogOpen} handleClose={handleCloseDialog} details={selectedOrder} />
    </Card>
    
  );
}

export default HoverCardWithHeaderExample;
