import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import OrderCard from './OrderCard';
import W2WOrderCard from './W2WOrderCard';
import Pagination from '../Pagination';
import { getorder_statusCByDId } from '../../Services/DeliveryManService';
import { getw2worder_statusCByDId } from '../../Services/DeliveryManService';
import Example from '../Loader/Spokes';

export const Completed = () => {
  const [orderData, setOrderData] = useState([]);
  const [w2wOrderData, setw2wOrderData] = useState([]);
  const [currentOrderPage, setCurrentOrderPage] = useState(1);
  const [currentW2WOrderPage, setCurrentW2WOrderPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showOrders, setShowOrders] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const order = await getorder_statusCByDId();
        const w2worder = await getw2worder_statusCByDId();
        setOrderData(order);
        setw2wOrderData(w2worder);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [showOrders]); // Fetch data when showOrders changes

  // Dummy data for orders
  if (orderData === null || w2wOrderData === null) {
    return <div>Loading...</div>; // or return a loading indicator
  }

  // Combine both order and W2W order data based on showOrders state
  const combinedData = showOrders ? orderData : w2wOrderData;
  const currentPage = showOrders ? currentOrderPage : currentW2WOrderPage;
  const setCurrentPage = showOrders ? setCurrentOrderPage : setCurrentW2WOrderPage;

  // Paginate data
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = combinedData.slice(startIndex, endIndex);
  const totalItems = combinedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Change page
  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px', textAlign: 'center' }}>
        <div style={{ marginBottom: '10px' }}>
          <button
            onClick={() => { setShowOrders(true); setCurrentOrderPage(1); }}
            style={{
              padding: '10px 20px',
              marginRight: '20px',
              backgroundColor: showOrders ? '#4CAF50' : '#ddd',
              color: showOrders ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Orders
          </button>
          <button
            onClick={() => { setShowOrders(false); setCurrentW2WOrderPage(1); }}
            style={{
              padding: '10px 20px',
              backgroundColor: showOrders ? '#ddd' : '#4CAF50',
              color: showOrders ? '#000' : '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            W2W Orders
          </button>
        </div>
        {loading ? (
          <Example /> // Render loading spinner while data is being fetched
        ) : (
          currentData.map((item, index) => (
            <div key={index}>
              {showOrders ? (
                <OrderCard data={item} />
              ) : (
                <W2WOrderCard data={item} />
              )}
            </div>
          ))
        )}
        <Pagination currentPage={currentPage} totalOrderPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

// export default MainComponent;
