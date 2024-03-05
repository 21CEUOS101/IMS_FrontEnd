import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Request from './Request';
import { getCheckWarehouse } from '../../Services/Manager';
import Example from '../../Delivery_man/Loader/SpinningBubbles';
import Pagination from '../../Delivery_man/Pagination';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    const [currentOrderPage, setCurrentOrderPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const orderData = await getCheckWarehouse();
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
            <Dashboard />
            <div className="flex">
                <div className="w-1/3 ml-5 mt-5">
                    <div className='flex flex-col'>
                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
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
                </div>
            </div>
        </>
    );
}

export default Home;
