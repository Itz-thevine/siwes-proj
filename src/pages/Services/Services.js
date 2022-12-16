import React from 'react'
import { Input, Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import searchImg from '../../assets/images/search.png';
import ItemBackground from '../../components/Common/ItemBackground';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

function Services() {
  const services = useSelector(state => state.items.services)

  return (
  <>
  <Navbar/>
    <div className='landing_container'>
      <ItemBackground />
      <div className='landing_serach_container item_serach_container'>
        <Input prefix={<img alt='search' src={searchImg} />} placeholder='Enter Service Keyword' />
        <Button>Find</Button>
      </div>
      <div className='services_container'>
        <Row gutter={[64, 8]} justify='center' align='center'>
          {services.map((service, i) => (
            <Col key={i} xs={24} sm={12} md={12} lg={8}>
              <Link to={`/item_details/${service.id}`}>
                <img className='services_img' src={service.img} alt='services' />
                <p>{service.name}</p>
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

export default Services
