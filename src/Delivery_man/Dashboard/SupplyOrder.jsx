import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Label } from 'semantic-ui-react';
import MABDFRequestDetails from './SupplyOrderDetails' 
import Swal from 'sweetalert2'; 
import {ChangeStatusDt} from '../../Services/DeliveryManService'
// import {makeSupplierOrderByWId} from '../../Services/DeliveryManService'
// import Swal from 'sweetalert2';
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
  const { supplyorder, user, suppiler,product } = data;
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

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };  
  const HandleCompleted =async(data)=>{
    // const id = 'd800453';
    // console.log(data?.supplyorder?.id)/
    try {
      const order = await ChangeStatusDt(data?.supplyorder?.id,"delivered");
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
          timer:"100000"
        }).then(() => [
          window.location.href = "/Delivery_man/dashboard"
        ]);
      }
  }
  catch (error) {
    console.error('Error updating profile:', error);
  }

  }

 
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
        background: 'linear-gradient(45deg, #7FB3D5, #BBE5F3)', 
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
      <Card.Header style={{ position: 'relative', backgroundColor: randomBackgroundColor, color: '#000', fontSize: "1.2rem", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem', height: "40px" }}>
        <Label as='b' color='pink' ribbon style={{ position: 'absolute', marginLeft: "20px", top: '0.5rem', left: '-1.5rem', fontSize: '1rem' }}>
          Supply-Order
        </Label>
        <span style={{ marginLeft: "650px" }}>Supply orderno. :- {supplyorder?.id}</span>
      </Card.Header>
      <Card.Body style={{ display: 'flex', flexDirection: 'row', background: "#FFFAFA" }}>
     
        <div style={{ flex: 0.5 }}>
          <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{ fontStyle: "italic" }}>Supplier name :  {user.name}</span></Card.Text>
          <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{ fontStyle: "italic" }}>Supplier phone :{user.phone}</span></Card.Text>
          <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{ fontStyle: "italic" }}>Supplier Address :  {suppiler.address}, {suppiler.pincode}</span></Card.Text>
        </div>
        <div style={{ flex: 0.7 }}>
          <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{ fontStyle: "italic" }}>Product name : {product.name}</span></Card.Text>
          <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{ fontStyle: "italic" }}>Product Quantity :{supplyorder.quantity}</span></Card.Text>
          <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{ fontStyle: "italic" }}>Total Amount :{supplyorder.total_amount}</span></Card.Text>
        </div>
        <div style={{ flex: 0.5 }}>
        <Card.Text style={{ color: '#000', fontSize: "1rem" }}><span style={{fontStyle:"italic"}}>Order Status : </span> <span style={{ color: "purple" }}><span style={{fontStyle:"italic"}}>{supplyorder?.status === "approved" ? "Approved" : ""}</span></span></Card.Text>
        
          <Button
            style={{
              backgroundColor: isHovered1 ? '#FF4500' : '#DC143C',
              color: 'white',
              fontSize: '16px',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width:"100px",
              marginRight:"20px",
              transition: 'background-color 0.3s ease',
            }}
            onClick={() => handleOpenDialog(data)}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            Details
          </Button>
          <Button
            style={{
              backgroundColor: "green",
              color: 'white',
              fontSize: '16px',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width:"120px",
              transition: 'background-color 0.3s ease',
            }}
            onClick={() => HandleCompleted(data)}
       
          >
            Completed
          </Button>
          
        </div>
      </Card.Body>
      <MABDFRequestDetails isOpen={isDialogOpen} handleClose={handleCloseDialog} details={selectedOrder} />
    </Card>
  );
}

export default HoverCardWithHeaderExample;
