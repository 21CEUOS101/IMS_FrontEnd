import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import OrderCard from './OrderCard';
import W2WOrderCard from './W2WOrderCard';
// import ReturnOrderCard from './ReturnOrderCard';
import ReturnSupplyOrderCard from './ReturnSupplyOrderCard';
import Pagination from '../Pagination';
import { getorder_statusCByDId } from '../../Services/DeliveryManService';
import { getw2worder_statusCByDId } from '../../Services/DeliveryManService';
import { CReturnOrder } from '../../Services/DeliveryManService';
import { CReturnSupplyOrder } from '../../Services/DeliveryManService';
import { getsupplyorderstatusDbyDId } from '../../Services/DeliveryManService';
import Example from '../Loader/Spokes';
import SupplyOrder from './Supplyorder'
import ReturnOrderCard from './ReturnOrderCard'
export const Completed = () => {
  const [orderData, setOrderData] = useState([]);
  const [w2wOrderData, setw2wOrderData] = useState([]);
  const [returnOrderData, setReturnOrderData] = useState([]);
  const [returnSupplyOrderData, setReturnSupplyOrderData] = useState([]);
  const [currentOrderPage, setCurrentOrderPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [supplyOrderData, setSupplyOrderData] = useState([]); 
  
  const [selectedOption, setSelectedOption] = useState('order');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const order = await getorder_statusCByDId();
        const w2worder = await getw2worder_statusCByDId();
        const returnOrd = await CReturnOrder();
        const returnSupplyOrd = await CReturnSupplyOrder();
        const supplyOrd = await getsupplyorderstatusDbyDId();
        setOrderData(order);
        setw2wOrderData(w2worder);
        setReturnOrderData(returnOrd);
        setReturnSupplyOrderData(returnSupplyOrd);
        setLoading(false);
        setSupplyOrderData(supplyOrd);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (orderData === null || w2wOrderData === null) {
    return <div>Loading...</div>;
  }

  let currentData = [];
  let totalPages = 0;
  switch (selectedOption) {
    case 'order':
      currentData = orderData;
      break;
    case 'w2worder':
      currentData = w2wOrderData;
      break;
    case 'returnorder':
      currentData = returnOrderData;
      break;
    case 'returnsupplyorder':
      currentData = returnSupplyOrderData;
      break;
      case 'supplyorder':
        currentData = supplyOrderData;
        break;
    default:
      currentData = orderData;
  }

  const itemsPerPage = 3;
  const startIndex = (currentOrderPage - 1) * itemsPerPage;
  const endIndex = currentOrderPage * itemsPerPage;
  const totalItems = currentData.length;
  totalPages = Math.ceil(totalItems / itemsPerPage);
  currentData = currentData.slice(startIndex, endIndex);

  const onPageChange = pageNumber => {
    setCurrentOrderPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px', textAlign: 'center' }}>
        <div style={{ marginBottom: '10px' }}>
          <button
            onClick={() => { setSelectedOption('order'); setCurrentOrderPage(1); }}
            style={{
              padding: '10px 20px',
              marginRight: '20px',
              backgroundColor: selectedOption === 'order' ? '#4CAF50' : '#ddd',
              color: selectedOption === 'order' ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
           Customer Orders
          </button>
          <button
            onClick={() => { setSelectedOption('w2worder'); setCurrentOrderPage(1); }}
            style={{
              padding: '10px 20px',
              backgroundColor: selectedOption === 'w2worder' ? '#4CAF50' : '#ddd',
              color: selectedOption === 'w2worder' ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              marginRight: '20px',
              cursor: 'pointer',
            }}
          >
            W2W Orders
          </button>
          <button
            onClick={() => { setSelectedOption('returnorder'); setCurrentOrderPage(1); }}
            style={{
              padding: '10px 20px',
              backgroundColor: selectedOption === 'returnorder' ? '#4CAF50' : '#ddd',
              color: selectedOption === 'returnorder' ? '#fff' : '#000',
              border: 'none',
              marginRight: '20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Return Orders
          </button>
          <button
            onClick={() => { setSelectedOption('returnsupplyorder'); setCurrentOrderPage(1); }}
            style={{
              padding: '10px 20px',
              backgroundColor: selectedOption === 'returnsupplyorder' ? '#4CAF50' : '#ddd',
              color: selectedOption === 'returnsupplyorder' ? '#fff' : '#000',
              border: 'none',
              marginRight: '20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Return Supply Orders
          </button>
          <button
            onClick={() => { setSelectedOption('supplyorder'); setCurrentOrderPage(1); }}
            style={{
              padding: '10px 20px',
              backgroundColor: selectedOption === 'supplyorder' ? '#4CAF50' : '#ddd',
              color: selectedOption === 'supplyorder' ? '#fff' : '#000',
              border: 'none',
              marginRight: '20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Supply Orders
          </button>
        </div>
        {loading ? (
          <Example />
        ) : (
          currentData.length === 0 ? (
            <div>
  <h1>No items available for {selectedOption === 'order' ? 'Order' : selectedOption === 'w2worder' ? 'W2W Order' : selectedOption === 'returnorder' ? 'Return Order' : selectedOption === 'returnsupplyorder' ? 'Return Supply Order' : 'Supply Order'}</h1>
</div>

          ) : (
            currentData.map((item, index) => (
              <div key={index}>
                {selectedOption === 'order' && <OrderCard data={item} />}
                {selectedOption === 'w2worder' && <W2WOrderCard data={item} />}
                {selectedOption === 'returnorder' && <ReturnOrderCard data={item} />}
                {selectedOption === 'returnsupplyorder' && <ReturnSupplyOrderCard data={item} />}
                {selectedOption === 'supplyorder' && <SupplyOrder data={item} />}
              </div>
            ))
          )
        )}

        <Pagination currentPage={currentOrderPage} totalOrderPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  );
};
