import React from 'react'
import { Row, Col, Button } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = useSelector(state => state.items.products)

  return (
    <div className='products_container'>
      <Row gutter={[32, 16]} justify='center' align='center'>
        {products.map((product, i) => (
          <Col key={i} xs={12} sm={12} md={8} lg={8}>
            <Link to={`/item_details/${product.id}`}>
              <img className='products_img' src={product.img} alt='products' />
              <p>{product.name}</p>
            </Link>
          </Col>
        ))}
      </Row>
      <Button className='more_button'>More Products</Button>
    </div>
  )
}

export default Products;
