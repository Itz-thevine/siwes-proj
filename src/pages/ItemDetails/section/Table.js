import React, { useState } from 'react'
import { Table, Row, Col, Modal } from 'antd'
import { WhatsAppOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons'
import MapImg from '../../../assets/images/map.png'
import BusinessImg from '../../../assets/images/business.png'
import star from '../../../assets/images/star.png'

function TableComp() {
  const [visible, setVisible] = useState(false)

  const dataSource = [
    {
      key: '1',
      business: {
        name: 'REVAX FITNESS HOUSE',
        image: BusinessImg,
        star: 4
      },
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      address: 'Mayfair, behind okuro waters.',
      contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
      map: <img src={MapImg} alt='map' />
    },
    {
      key: '2',
      business: {
        name: 'REVAX FITNESS HOUSE',
        image: BusinessImg,
        star: 4
      },
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      address: 'Mayfair, behind okuro waters.',
      contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
      map: <img src={MapImg} alt='map' />
    },
    {
      key: '3',
      business: {
        name: 'REVAX FITNESS HOUSE',
        image: BusinessImg,
        star: 4
      },
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      address: 'Mayfair, behind okuro waters.',
      contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
      map: <img src={MapImg} alt='map' />
    },
    {
      key: '4',
      business: {
        name: 'REVAX FITNESS HOUSE',
        image: BusinessImg,
        star: 4
      },
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      address: 'Mayfair, behind okuro waters.',
      contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
      map: <img src={MapImg} alt='map' />
    },
    {
      key: '4',
      business: {
        name: 'REVAX FITNESS HOUSE',
        image: BusinessImg,
        star: 4
      },
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      address: 'Mayfair, behind okuro waters.',
      contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
      map: <img src={MapImg} alt='map' />
    },
    {
      key: '4',
      business: {
        name: 'REVAX FITNESS HOUSE',
        image: BusinessImg,
        star: 4
      },
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      address: 'Mayfair, behind okuro waters.',
      contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
      map: <img src={MapImg} alt='map' />
    },
    {
      key: '4',
      business: {
        name: 'REVAX FITNESS HOUSE',
        image: BusinessImg,
        star: 4
      },
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      address: 'Mayfair, behind okuro waters.',
      contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
      map: <img src={MapImg} alt='map' />
    },
    {
      key: '4',
      business: {
        name: 'REVAX FITNESS HOUSE',
        image: BusinessImg,
        star: 4
      },
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      address: 'Mayfair, behind okuro waters.',
      contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
      map: <img src={MapImg} alt='map' />
    }
  ]

  const columns = [
    {
      title: 'BUSINESS',
      dataIndex: 'business',
      key: 'business',
      render: business => (
        <div className='business_title' >
          <img src={business.image} alt='business' />
          <div style={{ marginLeft: 10 }}>
            <h3 onClick={() => setVisible(true)}>{business.name}</h3>
            <p>
              {[1, 2, 3, 4, 5].map(() => (
                <img width={15} height={15} src={star} alt='star' />
              ))}
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'DETAILS',
      dataIndex: 'details',
      key: 'details'
    },
    {
      title: 'ADDRESS',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'CONTACT',
      dataIndex: 'contact',
      key: 'contact'
    },
    {
      title: 'MAP',
      dataIndex: 'map',
      key: 'map'
    }
  ]


  return (
    <div style={{ width: '85%', margin: 'auto' }}>
      <Table dataSource={dataSource} columns={columns} />
      <Modal visible={visible} onCancel={() => setVisible(false)}>
        <div className='business_modal'></div>
        <Row>
          <Col xs={8} sm={8} md={8} lg={8}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
              <img src={BusinessImg} alt='business' />
              <p>Mayfair, behind okuro waters, opposite Rainbow college.</p>
              <img src={MapImg} alt='map' />
              <a href=''><WhatsAppOutlined />  +2348108745769</a>
              <a href=''><PhoneOutlined />  +2348108745769</a>
              <a href='https://waris-portfolio.herokuapp.com'><GlobalOutlined />  https://waris-portfolio.herokuapp.com</a>
            </div>
          </Col>
          <Col xs={16} sm={16} md={16} lg={16}>
            <h2>REVAX FITNESS HOUSE</h2>
            <p>
              {[1, 2, 3, 4, 5].map(() => (
                <img width={15} height={15} src={star} alt='star' />
              ))}
            </p>
            <p style={{ maxWidth: '50vw' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in adipiscing cursus malesuada massa
              aenean eu magna. Gravida et turpis felis, ut nulla sit consequat volutpat integer. Ac tempor, ante
              proin morbi a condimentum ultrices egestas ante. Tortor arcu a odio vestibulum. Imperdiet mi sapien,
              amet dapibus curabitur ut semper pellentesque. Vivamus iaculis viverra tempus amet, tristique
              pellentesque tincidunt urna.
              Facilisi enim aliquam ipsum dui in curabitur sit aliquam eget. Elit netus sed.</p>
          </Col>
        </Row>
      </Modal>
    </div>
  )
}

export default TableComp;
