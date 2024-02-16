import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar'
import Card from 'react-bootstrap/Card';
import { getorderstatusShipped } from '../../Services/DeliveryManService';
import { getw2worderstatusShipped } from '../../Services/DeliveryManService';
import { NumberofCustomer } from '../../Services/DeliveryManService';
import { totalWarehouse } from '../../Services/DeliveryManService';
import { getorder_statusCByDId } from '../../Services/DeliveryManService';
import { getw2worder_statusCByDId } from '../../Services/DeliveryManService';
import { totalCancelOrder } from '../../Services/DeliveryManService';
import OrderCard from './OrderCard';
import W2WOrderCard from './W2WOrderCard'
import Bars from '../Loader/Bars'
import Button from '@mui/material/Button';

import NWarehouse from './NWarehouse';
import NCustomer from './NCustomer';
import NCancel from './NCancel';
const Dashboard = () => {
  // const id = 'd800453';
  const [orderData, setOrderData] = useState({});
  const [w2wOrderData, setw2wOrderData] = useState({});
  const [loading, setloading] = useState(true);
  const [customers, SetCustomer] = useState([]);
  const [warehouses, SetWarehouse] = useState([]);
  const [Completedorder, SetCompletedOrder] = useState([]);
  const [w2wcompleted, setw2w] = useState([]);
  const [cancelorder, setorders] = useState([]);
  const [ware, setware] = useState(false);
  const [cust, setcust] = useState(false);
  const [ord, setord] = useState(false);
  const handleInfo = () => {
    setware(true);
  };

  const closeInfo = () => {
    setware(false);
  };
  const handlewarning = () => {
    setcust(true);
  };

  const closewarning = () => {
    setcust(false);
  };
  const handleDanger = () => {
    setord(true);
  };

  const closeDanger = () => {
    setord(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const order = await getorderstatusShipped();
        const w2worder = await getw2worderstatusShipped();
        const Ncustomer = await NumberofCustomer();
        const nware = await totalWarehouse();
        const ord = await getorder_statusCByDId();
        const w2word = await getw2worder_statusCByDId();
        const cancel = await totalCancelOrder();
        setOrderData(order);
        setw2wOrderData(w2worder);
        SetCustomer(Ncustomer);
        SetWarehouse(nware);
        setloading(false);
        SetCompletedOrder(ord);
        setw2w(w2word);
        setorders(cancel);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleSuccess = () => {
    window.location.href = '/Delivery_man/Completed'
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px', display: 'flex', flexWrap: 'wrap' }}>

        {[
          { variant: 'Warning', number: customers? customers?.length:"-" },
          { variant: 'Info', number: warehouses ? warehouses.length : "-" },
          { variant: 'Success', number: Completedorder && w2wcompleted ? (Completedorder.length + w2wcompleted.length) : "-" },
          { variant: 'Danger', number: cancelorder ? cancelorder.length : "-" },
        ].map(({ variant, number }) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'dark'}
            style={{ width: '15rem', marginRight: '20px', marginBottom: '0px', height: "220px" }}
            className="mb-2"
          >
            {variant === 'Warning' && <Card.Header>Customers</Card.Header>}
            {variant === 'Info' && <Card.Header> Warehouses</Card.Header>}
            {variant === 'Success' && <Card.Header> Completed Orders</Card.Header>}
            {variant === 'Danger' && <Card.Header> Cancel Orders</Card.Header>}

            <Card.Body >
              <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '10px' }}>{number}</div>
              {variant === 'Warning' && <Card.Title> Customers have received their delivered orders</Card.Title>}
              {variant === 'Info' && <Card.Title>Warehouses have received their delivered orders</Card.Title>}
              {variant === 'Success' && <Card.Title> Total Numbers of Orders which are Delivered</Card.Title>}
              {variant === 'Danger' && <Card.Title>Total Numbers of Orders which are Cancelled</Card.Title>}

              <Card.Body style={{ textAlign: 'center', marginTop: "10px" }}>
                {variant === 'Warning' && <Button variant='contained' color='warning' onClick={handlewarning}>Details</Button>}
                {variant === 'Info' && <Button variant='contained' color='warning' onClick={handleInfo}>Details</Button>}
                {variant === 'Success' && <Button variant='contained' color='warning' onClick={handleSuccess}>Details</Button>}
                {variant === 'Danger' && <Button variant='contained' color='warning' onClick={handleDanger}>Details</Button>}

              </Card.Body>

            </Card.Body>
          </Card>
        ))}

<div className="container-fluid d-none d-lg-block" style={{ background: "#D4E6F1", width: "100%" }}>
  <div className="row align-items-center top-bar" style={{ height: "250px", marginLeft: 20, marginRight: 20, marginBottom: "50px" }}>
    <div className="container-fluid d-none d-lg-block" style={{ background: "white", width: "100%",marginTop:"30px" }}>
      <div className="row align-items-center top-bar" style={{ height: "250px", marginLeft: 20, marginRight: 20, marginBottom: "50px" }}>
        <div className="col-lg-3 col-md-12 text-center text-lg-start">
          {loading ? (
           
            <Bars />
          
          ) : (
            orderData?.order === undefined && w2wOrderData?.w2worder === undefined ? (
              <h1>No order is being to delivered</h1>
            ) : (
              orderData?.order === undefined ? (
                w2wOrderData && <W2WOrderCard data={w2wOrderData} />
              ) : (
                orderData && <OrderCard data={orderData} />
              )
            )
          )}
          <NWarehouse isOpen={ware} handleClose={closeInfo} details={warehouses} />
          <NCustomer isOpen={cust} handleClose={closewarning} details={customers} />
          <NCancel isOpen={ord} handleClose={closeDanger} details={cancelorder} />
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default Dashboard
