import React from 'react';
import { useState } from "react";



function Searchbar ({onSearch}) {
    const [searchProduct, setSearchProduct] = useState('');

    const handleChange = (e) => {
      setSearchProduct(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(searchProduct);
    };

    return (

        <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search product..."
        value={searchProduct}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
    );
};

export default Searchbar;