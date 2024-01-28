import React, { useState,useEffect } from 'react';
import Sidebar from '../Sidebar';
import OrderCard from './OrderCard';
import W2WOrderCard from './W2WOrderCard';
import Pagination from '../Pagination';
import { getorder_statusCByDId } from '../../Services/DeliveryManService';
import {getw2worder_statusCByDId} from '../../Services/DeliveryManService';

export const Completed = () => {
  const id = 'd800453';
  const [orderData, setOrderData] = useState([]);
  const [w2wOrderData, setw2wOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const order = await getorder_statusCByDId(id);
        const w2worder = await getw2worder_statusCByDId(id);
        setOrderData(order);
        setw2wOrderData(w2worder);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]); // Change this number as per your requirement

  // Dummy data for orders
  if (orderData === null || w2wOrderData === null) {
    return <div>Loading...</div>; // or return a loading indicator
  }


   // const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 3; // Number of items to display per page

   // Calculate the indexes for the current page
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = currentPage * itemsPerPage;
 
   // Combine both order and w2w order data
   const combinedData = [...orderData, ...w2wOrderData];
 
   // Get the data for the current page
   const currentData = combinedData.slice(startIndex, endIndex);
 
   // Calculate total pages
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
               item && <W2WOrderCard data={item} />
              
            ) : (
              item && <OrderCard data={item} />
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

// export default MainComponent;
