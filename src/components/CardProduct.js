// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useState, useEffect } from "react";
// import axios from "axios";


// function CardProduct() {
//     const [products, setProducts] = useState([]);
//     console.log(process.env.REACT_APP_API_URL);
    
//       const getAllProducts = () => {
//         axios
//           .get(`${process.env.REACT_APP_API_URL}/api/products`)
//           .then((response) => {
//             console.log('response', response.data)
//             setProducts(response.data);
//           })
//           .catch((err) => console.log(err));
//       };
  
//       useEffect(() => {
//         getAllProducts();
//       }, [] );
  
  
//         <div className="ProductListPage">
        
//           {products.map((product) => {
        
//         return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     );
//         })}     
       
//     </div>
    
//     }
    
          



// export default CardProduct;