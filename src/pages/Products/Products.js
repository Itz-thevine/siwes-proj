import React from 'react'
import { Input, Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import searchImg from '../../assets/images/search.png';
import ItemBackground from '../../components/Common/ItemBackground';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';

function Products() {
  const products = useSelector(state => state.items.products)

  return (
    <>
    <Navbar/>
    <div className='landing_container'>
      <ItemBackground />
      <div className='landing_serach_container item_serach_container'>
        <Input prefix={<img alt='search' src={searchImg} />} placeholder='Enter Product Keyword' />
        <Button>Find</Button>
      </div>
      <div className='products_container'>
        <Row gutter={[64, 8]} justify='center' align='center'>
          {products.map((product, i) => (
            <Col key={i} xs={12} sm={12} md={8} lg={8}>
              <Link to={`/item_details/${product.id}`}>
                <img className='products_img' src={product.img} alt='products' />
                <p>{product.name}</p>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Products
