import React, { useState, useEffect } from 'react';
import { placeOrder } from '../Services/Customer';
import { ReturnOrder } from '../Services/Customer';
import Swal from 'sweetalert2';

const Home = () => {
  const [mobiles, setMobiles] = useState('');
  const [tabs, setTabs] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [quantities, setQuantities] = useState(['', '']); // Default quantities
  const customerId = localStorage.getItem('id');

  const handleMobilesChange = (event) => {
    setMobiles(event.target.value);
  };

  const handleTabsChange = (event) => {
    setTabs(event.target.value);
  };

  const handlePlaceOrder = async () => {
    console.log('Place Order clicked');
    const formData = {
      product_ids: ["p69659", "p68403"], // Default product IDs
      quantities: quantities,
      warehouse_id: "w480623",
      customer_id: customerId,
      payment_method: "CASH",
      delivery_address: "Santram deri road, nadiad"
    };

    try {
      const response = await placeOrder(formData);
      localStorage.setItem("id1", response[0]?.id);
      localStorage.setItem("id2", response[1]?.id);
      if (response) {
        Swal.fire({
          title: "Order is Created successfully",
          icon: "success"
        }).then(() => {
          window.location.href = "/customer";
        });
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const handleReturnOrder = async () => {
    const formData = {
      order_id: selectedOption,
      customer_id: customerId,
      return_reason: "Defective piece",
      pickup_address: "Santram deri road, nadiad"
    };
    console.log(formData)
    try {
      const response = await ReturnOrder(formData);
      if (response) {
        Swal.fire({
          title: "Return request is generated successfully",
          icon: "success"
        }).then(() => {
          window.location.href = "/customer";
        });
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    document.title = "Customer";
  }, []);

  const handleQuantityChange = (index, event) => {
    const newQuantities = [...quantities];
    newQuantities[index] = event.target.value;
    setQuantities(newQuantities);
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = "/";
      }
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', border: '2px solid #ccc', padding: '20px', borderRadius: '10px', textAlign: 'center', width: '300px' }}>
          <h2 style={{ marginTop: "10px", marginBottom: "20px" }}>Place Order</h2>

          {quantities.map((quantity, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <label htmlFor={`quantity${index + 1}`}>Product {index + 1}:</label>
              <input
                type="text"
                id={`quantity${index + 1}`}
                value={quantity}
                onChange={(event) => handleQuantityChange(index, event)}
                style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
              />
            </div>
          ))}
          <button
            onClick={handlePlaceOrder}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Place Order
          </button>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', border: '2px solid #ccc', padding: '20px', borderRadius: '10px', textAlign: 'center', width: '250px' }}>
            <h2 style={{ marginTop: "10px", marginBottom: "20px" }}>Return Order</h2>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="dropdown">Dropdown:</label>
              <select id="dropdown" onChange={handleDropdownChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}>
  <option value="">Select an order</option>
  {localStorage.getItem("id1") && <option value={localStorage.getItem("id1")}>{localStorage.getItem("id1")}</option>}
  {localStorage.getItem("id2") && <option value={localStorage.getItem("id2")}>{localStorage.getItem("id2")}</option>}
</select>

            </div>
            <button
              onClick={handleReturnOrder}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Return Order
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={handleLogout}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#dc3545',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
