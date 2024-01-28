import React from 'react';

const Pagination = ({ currentPage, totalOrderPages, onPageChange }) => {
  const handlePageChange = pageNumber => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination" style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      marginBottom: '20px',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      zIndex: '1',
    }}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        style={{
          margin: '0 5px',
          padding: '8px 12px',
          cursor: 'pointer',
          color: '#fff',
          border: '2px solid black',
          borderRadius: '5px',
          backgroundColor: '#fff  ',
        }}
        disabled={currentPage === 1}
      >
        ⏪
      </button>

      {Array.from({ length: totalOrderPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          style={{
            margin: '0 5px',
            padding: '8px 12px',
            cursor: 'pointer',
            backgroundColor: currentPage === index + 1 ? '#ccc' : '#F5FFFA',
            color: '#000',
            border: '2px solid black',
            borderRadius: '5px',
          }}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        style={{
          margin: '0 5px',
          padding: '8px 12px',
          cursor: 'pointer',
          color: '#fff',
          border: '2px solid black',
          borderRadius: '5px',
          backgroundColor: '#fff',
        }}
        disabled={currentPage === totalOrderPages}
      >
        ⏩
      </button>
    </div>
  );
};

export default Pagination;
