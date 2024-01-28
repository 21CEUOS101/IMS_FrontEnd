import React, { useState,useEffect } from 'react';
import Sidebar from '../Sidebar';
import OrderPendingCard from './OrderPendingCard';
import W2WOrderPendingCard from './W2WOrderPendingCard';
import Pagination from '../Pagination';
import { getorder_statusPByDId } from '../../Services/DeliveryManService';
import {getw2worder_statusPByDId} from '../../Services/DeliveryManService';

 const Pending = () => {
  const id = 'd800453';
  const [orderData, setOrderData] = useState([]);
  const [w2wOrderData, setw2wOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 3;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const order = await getorder_statusPByDId(id);
        const w2worder = await getw2worder_statusPByDId(id);
        setOrderData(order);
        setw2wOrderData(w2worder);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  if (orderData === null || w2wOrderData === null) {
    return <div>Loading...</div>;
  } 
  const itemsPerPage = 3; 

  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;


  const combinedData = [...orderData, ...w2wOrderData];
  const currentData = combinedData.slice(startIndex, endIndex);
  const totalItems = combinedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  // Change page
  const onPageChange = pageNumber => setCurrentPage(pageNumber);
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px' }}>
      {currentData.map((item, index) => (
          <div key={index}>
            {item?.order === undefined ? (
               item && <W2WOrderPendingCard data={item} />
              
            ) : (
              item && <OrderPendingCard data={item} />
            )}
          </div>
        ))}
        <Pagination 
          currentPage={currentPage} 
          totalOrderPages={totalPages} 
          onPageChange={onPageChange} 
        />
      </div>
    </div>
  );
};

export default Pending;
