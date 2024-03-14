import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Request from './Request';
import { getCheckWarehouse } from '../../Services/Manager';
import Example from '../../Delivery_man/Loader/SpinningBubbles';
import Pagination from '../../Delivery_man/Pagination';
import {getdetailsofwarehouse} from '../../Services/Manager'
import Details from './Details'
import NProduct from './NProduct';
import { getallProducts } from '../../Services/Manager';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [det, setdetails] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [Return, setReturn] = useState(false);
    const [currentOrderPage, setCurrentOrderPage] = useState(1);
    const [Ret , setRet ] =useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const orderData = await getCheckWarehouse();
                const details = await getdetailsofwarehouse();
                const r = await getallProducts();
                setdetails(details);
                setOrders(orderData);
                setLoading(false);
                setRet(r);
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
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleOpenDialog = (  ) => {
        setSelectedOrder(det);
        setIsDialogOpen(true);
      };
    
      const handleCloseDialog = () => {
        setIsDialogOpen(false);
      };
      const handleopen = () => {
        setReturn(true);
      };
    
      const closeopen = () => {
        setReturn(false);
      };
    
    return (
        <>
            <Dashboard />
            <div className="flex">
                <div className="w-1/3 ml-5 mt-20">
                    <div className='flex flex-col'>
                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{height:"200px"}}>
                           
                                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">WareHouse Details</h5>
                         
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl" style={{marginTop:"20px"}}>Basic Details of Warehouse</p>
                            <button  onClick={handleOpenDialog} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"  style={{marginTop:"20px",backgroundColor:"red"}}>
                                details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-14 "  style={{height:"200px"}}>
                           
                                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Product Details</h5>
                           
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl "style={{marginTop:"20px"}}>Product are available in WareHouse</p>
                            <button onClick={handleopen}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "  style={{marginTop:"20px"}}>
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
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
                    <Details isOpen={isDialogOpen} handleClose={handleCloseDialog} details={selectedOrder} />
                    <NProduct isOpen={Return} handleClose={closeopen} details={Ret} />
                </div>
            </div>
        </>
    );
}

export default Home;
