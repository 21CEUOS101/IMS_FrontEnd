
import Dashboard from './Dashboard';
import React, { useState, useEffect } from 'react';

import Request from './Request'
import { getPendingorders } from '../../Services/Supplier';
import Example from '../../Delivery_man/Loader/SpinningBubbles';
import Pagination from '../../Delivery_man/Pagination';
const Pending = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const [currentOrderPage, setCurrentOrderPage] = useState(1);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const orderData = await getPendingorders();
              setOrders(orderData);
              setLoading(false);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  const itemsPerPage = 2;
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
    <>
      <Dashboard/>
     
                <div className="mt-4 ml-10">
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
                                        item && <Request data={item} />
                                    }
                                    
                                </div>
                            ))
                        )
                    )}
                    <Pagination currentPage={currentOrderPage} totalOrderPages={totalPages} onPageChange={onPageChange} />
                </div>
            {/* </div> */}
    </>
  )
}

export default Pending