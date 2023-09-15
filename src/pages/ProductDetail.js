import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const apiURL = "mongodb://127.0.0.1:27017/aqua-pet-shop-server";

function ProductDetail (props) {
    const [product, setProduct] = useState(null);
    const { productId } = useParams(); 


    const getProduct = () => {
        axios
      .get(`${apiURL}/api/projects/${productId}`)
      .then((response) => {
        const oneProduct = response.data;
        setProduct(oneProduct);
      })
      .catch((error) => console.log(error));
  };

  useEffect(()=> {                 
    getProduct();
  }, [] );


    return (
        <div className="ProducttDetail">
          {product && (
            <>
              <h1>{product.name}</h1>
              <p>{product.type}</p>
              <p>{product.price}</p>
              <p>{product.stock}</p>
              <p>{product.description}</p>
              <p>{product.imgURL}</p>
              <p>{product.rating}</p>

            </>
          )}
     
         
     
          <Link to="/products">
            <button>Back to products</button>
          </Link>
        </div>
      );
    }
     
    export default ProductDetail;