import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating' 
import Loader from '../components/Loader'
import Message from '../components/Message' 
import { listProductsDetails } from '../actions/productActions'




//mostrar el producto que se esta buscando


const ProductScreen = (match) => {
  
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const { product, loading, error } = productDetails

  useEffect(() => {
    dispatch(listProductsDetails(match.params.id)) 
  }, [ dispatch, match ]) // eslint-disable-line 

 
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
      Go back
      </Link>
      {loading ? <Loader/> : error ? <Message variant='danger' >{error}</Message> :  (
        <Row>
        <Col md={6}> 
          <Image src={product.image} alt={product.name} fluid /> 
        </Col> 
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <strong>{product.name}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>                  
                  </Col>
                </Row> 
              </ListGroup.Item> 
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}                 
                  </Col>
                </Row> 
              </ListGroup.Item> 
              <ListGroup.Item>
                <Button className='btn-block' 
                type='button' 
                disabled={product.countInStock === 0} > 
                  Add to cart
                </Button>
              </ListGroup.Item>
              
            </ListGroup>
          </Card>
        </Col>

      </Row>
      )}

      
    </>
  );
}

export default ProductScreen