import React, { useState,useEffect } from 'react';
import Sidebar from '../Sidebar'
import Card from 'react-bootstrap/Card';
import {getorderstatusShipped} from '../../Services/DeliveryManService';
import {getw2worderstatusShipped} from '../../Services/DeliveryManService';
import OrderCard from './OrderCard';
import W2WOrderCard from './W2WOrderCard'


const Dashboard = () => {
  const id = 'd800453';
  const [orderData, setOrderData] = useState({});
  const [w2wOrderData, setw2wOrderData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const order = await getorderstatusShipped(id);
        const w2worder = await getw2worderstatusShipped(id);
        setOrderData(order);
        setw2wOrderData(w2worder);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px', display: 'flex', flexWrap: 'wrap' }}>
        {[
          { variant: 'Primary', number: 1 },
          { variant: 'Secondary', number: 2 },
          { variant: 'Success', number: 3 },
          { variant: 'Danger', number: 4 },
        ].map(({ variant, number }) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '15rem', marginRight: '20px', marginBottom: '20px', height: "220px" }}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '10px' }}>{number}</div>
              <Card.Title>{variant} Card Title</Card.Title>
              <Card.Text>
                Information
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
  {
    (orderData.order === undefined && w2wOrderData.w2worder === undefined)?(
      <h1>no order is being to delivered</h1>
    ):
    (orderData.order === undefined)?(
      w2wOrderData && <W2WOrderCard data={w2wOrderData} />
    ):
    orderData && <OrderCard data={orderData} />
  } 
      </div>
    </div>
  )
}

export default Dashboard
