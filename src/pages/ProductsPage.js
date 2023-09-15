
import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetail from '../pages/ProductDetail';
import NewProduct from "../components/NewProduct";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from '../components/Navbar';



function ProductsPage () {
    const [products, setProducts] = useState([]);
    
  console.log(process.env.REACT_APP_API_URL);
  
    const getAllProducts = () => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/products`)
        .then((response) => {
          console.log('response', response.data)
          setProducts(response.data);
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
      getAllProducts();
    }, [] );

    return(
      <div className="ProductListPage">
      
        {products.map((product) => {
          return (
            <div className="ProductCard card" key={product._id} style={{ display: 'inline-block' }}  >
              <Link to={`/projects/${product._id}`}>
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imgURL} />
      <Card.Body style={{ display: 'inline-block' }} >
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
          {product.price}
        </Card.Text>
        <Button variant="primary">Add to Cart </Button>
      </Card.Body>
    </Card>
              </Link>
            </div>
          );
        })}     
       
    </div>
    

  )
}



export default ProductsPage;

