import React from 'react';
import Pagination from '@mui/material/Pagination';

const CustomPagination = ({ setPage }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);

  }
  return (
    <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 20,
    }}>
      <Pagination onChange={(e) => handlePageChange(e.target.textContent)} 
      count={10} 
      shape="rounded"
      hideNextButton
      hidePrevButton />
    </div>
  )
}

export default CustomPagination