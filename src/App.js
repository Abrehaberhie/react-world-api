
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import './App.css';
import axios from 'axios';
import CountryTable from './Components/CountryTable';

function App() {
  const [countries, setCountries] = useState([]);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://restcountries.com/v3.1/all');
        const totalItems = result.data.length;

        const numberOfPages = calculatePage(totalItems);
        setNumPages(numberOfPages);
        const startIndex = (currentPage - 1) * itemPerPage;
        const endIndex = Math.min(startIndex + itemPerPage, totalItems);
        const countriesPerPage = result.data.slice(startIndex, endIndex);

        setCountries(countriesPerPage);
      } catch (error) {
        console.error("error is ", error);
      }
    };
    fetchData();
  }, [currentPage]);

  const calculatePage = (totalItems) => {
    return Math.ceil(totalItems / itemPerPage);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <h1>This is a world countries app</h1>
      <CountryTable countries={countries} />
      <div>
        <Pagination
          onChange={handlePageChange}
          size='large'
          count={numPages}
          page={currentPage}
          color='primary'
        />
      </div>
    </div>
  );
}

export default App;
