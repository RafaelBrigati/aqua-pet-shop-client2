import React, { useState } from "react";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ProductsPage from "./ProductsPage";






function HomePage() {
  const initialData = [];
  const [data, setData] = useState(initialData);
  const [searchResults, setSearchResults] = useState([]);


   
 
    

  

  const handleSearch = (searchTerm) => {

    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };


  
    return (
      <div>

        <Navbar /> 
         <Header />
        <ProductsPage />
        <Footer />
        
      </div>
    );

};
  
  export default HomePage;
  