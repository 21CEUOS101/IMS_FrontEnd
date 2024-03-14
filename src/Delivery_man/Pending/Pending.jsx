import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import OrderPendingCard from './OrderPendingCard';
import W2WOrderPendingCard from './W2WOrderPendingCard';
import ReturnOrderPendingCard from './ReturnOrderPendingCard';
import Pagination from '../Pagination';
import { getorder_statusPByDId } from '../../Services/DeliveryManService';
import { getw2worder_statusPByDId } from '../../Services/DeliveryManService';
import { ReturnOrderpending } from '../../Services/DeliveryManService';
import {getsupplyorderstatusABDFbyDId} from '../../Services/DeliveryManService'
import Spin from '../Loader/Spinner';
import SupplyOrder from './SupplyOrder';

const Pending = () => {
  const [orderData, setOrderData] = useState([]);
  const [w2wOrderData, setw2wOrderData] = useState([]);
  const [returnOrderData, setReturnOrderData] = useState([]);
  const [supplyOrderData, setsupplyorder] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentOrderType, setCurrentOrderType] = useState('order'); 
  
  // Default order type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const order = await getorder_statusPByDId();
        const w2worder = await getw2worder_statusPByDId();
        const returnOrders = await ReturnOrderpending();
        const supp = await getsupplyorderstatusABDFbyDId();
        setOrderData(order);
        setw2wOrderData(w2worder);
        setReturnOrderData(returnOrders);
        setsupplyorder(supp);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (orderData === null || w2wOrderData === null || returnOrderData === null || supplyOrderData === null) {
    return <div>Loading...</div>; // or return a loading indicator
  }

  const combinedData = currentOrderType === 'order' ? orderData : currentOrderType === 'w2worder' ? w2wOrderData : currentOrderType === 'returnorder' ? returnOrderData : supplyOrderData; // Include supply orders in combined data
 const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = combinedData.slice(startIndex, endIndex);
  const totalItems = combinedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px', textAlign: 'center' }}>
        <div style={{ marginBottom: '10px' }}>
          <button
            onClick={() => { setCurrentOrderType('order'); setCurrentPage(1); }}
            style={{
              padding: '10px 20px',
              marginRight: '20px',
              backgroundColor: currentOrderType === 'order' ? '#4CAF50' : '#ddd',
              color: currentOrderType === 'order' ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            CustomerOrder 
          </button>
          <button
            onClick={() => { setCurrentOrderType('w2worder'); setCurrentPage(1); }}
            style={{
              padding: '10px 20px',
              marginRight: '20px',
              backgroundColor: currentOrderType === 'w2worder' ? '#4CAF50' : '#ddd',
              color: currentOrderType === 'w2worder' ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            W2W Order 
          </button>
          <button
            onClick={() => { setCurrentOrderType('returnorder'); setCurrentPage(1); }}
            style={{
              padding: '10px 20px',
              marginRight: '20px',
              backgroundColor: currentOrderType === 'returnorder' ? '#4CAF50' : '#ddd',
              color: currentOrderType === 'returnorder' ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Return Order 
          </button>
          <button
            onClick={() => { setCurrentOrderType('supplyorder'); setCurrentPage(1); }}
            style={{
              padding: '10px 20px',
              backgroundColor: currentOrderType === 'supplyorder' ? '#4CAF50' : '#ddd',
              color: currentOrderType === 'supplyorder' ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Supply Order 
          </button>
        </div>
        {loading ? (
  <Spin />
) : (
  currentData.length === 0 ? (
    <h1>No items available for {currentOrderType === 'order' ? 'Customer Order' : currentOrderType === 'w2worder' ? 'W2W Order' : currentOrderType === 'returnorder' ? 'Return Order' : 'Supply Order'}</h1>
  ) : (
    currentData.map((item, index) => (
      <div key={index}>
        {currentOrderType === 'order' && <OrderPendingCard data={item} />}
        {currentOrderType === 'w2worder' && <W2WOrderPendingCard data={item} />}
        {currentOrderType === 'returnorder' && <ReturnOrderPendingCard data={item} />}
        {currentOrderType === 'supplyorder' && <SupplyOrder data={item} />}
     </div>
    ))
  )
)}
        <Pagination currentPage={currentPage} totalOrderPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default Pending;
