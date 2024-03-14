// import React from 'react'
import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import {getallDeliveredordersByMid} from '../../Services/Manager'
import Example from '../../Delivery_man/Loader/SpinningBubbles';
import Pagination from '../../Delivery_man/Pagination';
import CompletedCard from './CompletedCard';

const CompletedOrders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const [currentOrderPage, setCurrentOrderPage] = useState(1);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const orderData = await getallDeliveredordersByMid();
              setOrders(orderData);
              setLoading(false);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);
  const itemsPerPage = 3;
    const totalItems = orders?.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentOrderPage - 1) * itemsPerPage;
    const endIndex = currentOrderPage * itemsPerPage;
    const currentData = orders?.slice(startIndex, endIndex);

    const onPageChange = pageNumber => {
        setCurrentOrderPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <div>

      <Dashboard/>
      <div className="mt-4" style={{marginLeft:"40px"}}>
                    {loading ? (
                        <Example />
                    ) : (
                        currentData?.length === 0 ? (
                            <div>
                                <h1>No items available</h1>
                            </div>
                        ) : (
                            currentData?.map((item, index) => (
                                <div key={index}>
                                    {
                                        item && <CompletedCard data={item} />
                                    }
                                    
                                </div>
                            ))
                        )
                    )}
                    <Pagination currentPage={currentOrderPage} totalOrderPages={totalPages} onPageChange={onPageChange} />
                </div>
            
    </div>
  )
}

export default CompletedOrders