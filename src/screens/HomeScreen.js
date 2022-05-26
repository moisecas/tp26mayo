import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product  from '../components/Product'
import axios from 'axios'


//comunicación frontend-backend con axios, ver proxy en package.json del frontend 
const HomeScreen = () => {
    const [products, setProducts] = useState([]); 
    useEffect(() => {
      const fetchProducts = async () => {
        const {data} = await axios.get('/api/products');
        setProducts(data);
       } 
      fetchProducts();  
      
    }, []) //
  return (
    <>
        <h1>Ultimos productos</h1>
        <Row>
            {products.map(product =>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

                    <Product product={product}/> 
                </Col>
            ))} 
        </Row>


    </>
  )
}

export default HomeScreen