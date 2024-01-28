import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import W2WorderDetailsDialog from '../DialogboxCard/W2WorderDetailsDialog';
import { Label } from 'semantic-ui-react';
import Button1 from '@mui/material/Button';
import {Shippedw2wOrder} from '../../Services/DeliveryManService'
import Swal from 'sweetalert2';
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
  const id = 'd800453';
  const { r_warehouse, s_warehouse, w2worder, product } = data;
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
  const handleShipped = async (data) =>{
    try {
      const order = await Shippedw2wOrder(id,data.id);
      if (order) {
        console.log("order started successfully");
        Swal.fire({
          title: "shipped process start....",
          icon: "success",
          timer:"4000"
        }).then(() => [
          window.location.href = "/Delivery_man/dashboard"
        ]);
      } else {
        console.log("Failed to update profile");
        Swal.fire({
          title: " Something went wrong!",
          icon: "question",
          timer:"2000"
        }).then(() => [
          window.location.href = "/Delivery_man/dashboard"
        ]);
      }
  }
  catch (error) {
    console.error('Error updating profile:', error);
  }}

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
        height: "190px",
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
        <Label as='b' color='red' ribbon style={{ position: 'absolute',marginLeft:"20px", top: '0.5rem', left: '-1.5rem', fontSize: '1rem' }}>
          Warehouse Order
        </Label>
        <span style={{marginLeft:"670px"}}>Order no. :- {w2worder.id}</span>
      </Card.Header>
      <Card.Body style={{ display: 'flex', flexDirection: 'row', background: "#FFFAFA" }}>
        <div style={{ flex: 0.9 }}>
        <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Src warehouse name :  {s_warehouse.name}</span></Card.Text>
         <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Src warehouse Address :  {s_warehouse.address}, {s_warehouse.pincode}</span></Card.Text>
        </div>
        <div style={{ flex: 0.9 }}>
        <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Dest. warehouse name :  {r_warehouse.name}</span></Card.Text>
         <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Dest. warehouse Address :  {r_warehouse.address}, {r_warehouse.pincode}</span></Card.Text>
        </div>
        <div style={{ flex: 0.7 }}>

          <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Product name : {product.name}</span></Card.Text>
          <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Quantity :{w2worder.quantity}</span></Card.Text>
         <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Total amount : {w2worder.total_amount}</span></Card.Text>
        </div>
        <div style={{ flex: 0.5 }}>
          <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Order Status : </span> <span style={{ color: "red" }}><span style={{fontStyle:"italic"}}>{w2worder.status === "delivered"?"Delivered" :"Pending"}</span></span></Card.Text>
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
          marginBottom:"12px"
        }}
        onClick={() => handleOpenDialog(data)}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        OrderDetails
      </button>
      <Button1 variant="contained" color="info" onClick={()=>handleShipped(w2worder)}>
  Shipped
</Button1>
        </div>
      </Card.Body>
   
      <W2WorderDetailsDialog isOpen={isDialogOpen} handleClose={handleCloseDialog} details={selectedOrder} />
    </Card>
    
  );
}

export default HoverCardWithHeaderExample;
