import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product  from '../components/Product'
import Message  from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'



//comunicación frontend-backend con axios, ver proxy en package.json del frontend 
const HomeScreen = () => {
     
    const dispatch = useDispatch() //para ejecutar las acciones

    const productList = useSelector(state => state.productList) //para obtener el estado de la lista de productos
    const { products, loading, error } = productList //para obtener los datos de la lista de productos

    useEffect(() => {
       dispatch(listProducts())
      
    }, [dispatch]) //

     

  return (
    <>
        
        <h1>Ultimos productos</h1>
        {loading ? (<Loader/>) : error ? (<Message variant='danger' >{error}</Message>) :  <Row>
            {products.map(product =>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

                    <Product product={product}/> 
                </Col>
            ))} 
        </Row>} {/*si esta cargando muestra un mensaje*/}
       


    </>
  )
}

export default HomeScreen