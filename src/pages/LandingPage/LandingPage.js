import React from 'react'
import { Input, Button, Row, Col, Tabs } from 'antd';
import './LandingPage.css'
import logo from '../../assets/images/logo.svg';
import furnitures from '../../assets/images/furnitures.png';
import gadgets from '../../assets/images/gadgets.png';
import books from '../../assets/images/books.png';
import wears from '../../assets/images/wears.png';
import decorationItems from '../../assets/images/decoration items.png';
import foodItems from '../../assets/images/food items.png';
import searchImg from '../../assets/images/search.png';

import Products from './sections/Products.js';
import Services from './sections/Services';

function LandingPage() {
  const searches = [
    { img: furnitures, name: 'Furniture' },
    { img: wears, name: 'Wears' },
    { img: gadgets, name: 'Gadgets' },
    { img: books, name: 'Books' },
    { img: foodItems, name: 'Food Items' },
    { img: decorationItems, name: 'Decoration Items' }
  ]

  return (
    <div className='landing_container'>
      <div className='landing_image_background'>
        <img alt='app_logo' src={logo} />
        <p>where the findings happen...</p>
      </div>
      <div className='landing_serach_container'>
        <Input prefix={<img alt='search' src={searchImg} />} placeholder='Enter Product or Service' />
        <Button>Find</Button>
      </div>
      <h2 style={{ fontFamily: 'Playfair Display' }}>Popular Searches</h2>
      <div className='search_items_con'>
        <Row gutter={[16, 16]} justify='center' align='center'>
          {searches.map((item, i) => {
            return (
              <Col key={i} xs={12} sm={12} md={8} lg={8}>
                <div className='search_items'>
                  <img src={item.img} alt='search items' />
                  <p>{item.name}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
      <div className='action_tab_container'>
        <Tabs >
          <Tabs.TabPane tab='Products' key='products'>
            <Products />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Services' key='services'>
            <Services />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default LandingPage
