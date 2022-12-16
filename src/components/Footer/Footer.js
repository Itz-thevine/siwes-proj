import React from 'react';
import { Row, Col, Input, Space } from 'antd';
import { WhatsAppOutlined, MailOutlined, PhoneOutlined, CopyrightCircleOutlined } from '@ant-design/icons'
import './Footer.css'
import freshBoy from '../../assets/images/fresh_bon.png'
import clutch from '../../assets/images/clutch_firm.png'
import entrepreneur from '../../assets/images/entrepreneur_seniors.png'
import macClub from '../../assets/images/mac_club_house.png'
import logo from '../../assets/images/logo.svg'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <Row className='footer_image_container' justify='center' align='center'>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img src={freshBoy} alt='promo' />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img src={clutch} alt='promo' />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img src={entrepreneur} alt='promo' />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img src={macClub} alt='promo' />
          </Col>
        </Row>
        <p>FINDERR is proudly sponsored by the business organization above. If you are interested in sponsoring us,
          <span style={{ color: 'red', textDecoration: 'underline' }}> inquire here</span>
        </p>
      </div>
      <div className='bottom_footer'>
        <img src={logo} alt='logo' />
        <Row style={{ width: '100%', }} gutter={[16, 64]}>
          <Col xs={12} sm={12} md={6} lg={5}>
            <div className='footer_div'>
              <h2>Contact Us</h2>
              <p><WhatsAppOutlined />{' '}Whatsapp</p>
              <p><MailOutlined />{' '}Email</p>
              <p><PhoneOutlined />{' '}Telephone</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={5}>
            <div className='footer_div'>
              <h2>Site-Map</h2>
              <p>Home</p>
              <p>Products</p>
              <p>Services</p>
              <p>Register</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={5}>
            <div className='footer_div'>
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipicing</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={9}>
            <div className='footer_div'>
              <h2>Newsletter</h2>
              <Space direction="vertical" style={{ borderRadius: '5px' }}>
                <Input.Search
                  // value=''
                  placeholder="Enter your email to signup"
                  // onChange={onInputChange}
                  size="large"
                  enterButton='Subscribe'
                // onSearch={}
                />
              </Space>
              <p style={{ fontSize: '18px', marginTop: '60px' }}>Privacy Policy . Terms of use</p>
            </div>
          </Col>
        </Row>
        <div style={{ width: '100%' }}>
          <div style={{ width: '85%', height: '0px', border: '1px solid #FFFFFF', margin: 'auto' }} />
          <p className='copyright'><CopyrightCircleOutlined /> Copyright Finderr 2022</p>
        </div>
      </div>
    </div >
  )
}

export default Footer
