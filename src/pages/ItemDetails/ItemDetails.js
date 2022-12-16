import React from 'react'
import { Space, Input, Button, Dropdown, Collapse } from 'antd'
import { DownOutlined, FilterOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Spin } from 'antd'
import './ItemDetails.css'
import searchImg from '../../assets/images/search.png';
import Table from './section/Table'

function ItemDetails() {
  const [item, setItem] = React.useState(null)
  const products = useSelector(state => state.items.products)
  const services = useSelector(state => state.items.services)
  const itemId = useParams().id

  React.useEffect(() => {
    const allItems = [...products, ...services]
    const foundItem = allItems.find(item => item.id.toString() === itemId)
    setItem(foundItem)
  }, [itemId, products, services])

  const menu = (
    <div className='dropdown_card'>
      <h2>Filter</h2>
      <Collapse>
        <Collapse.Panel header="Location" key="1">
          <div className='landing_serach_container'>
            <Input surfix={<img height={20} width={20} alt='search' src={searchImg} />} placeholder='Search Locations' />
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="Ratings" key="2">
        </Collapse.Panel>
        <Collapse.Panel header="Working hour" key="3">
        </Collapse.Panel>
      </Collapse>
    </div>
  )


  return (
    <div>
      <div className='item_container'>
        {item ?
          <div className='item_image_background' style={{ backgroundImage: `url(${item.img.toString()})` }}>
            <h1>{item.name}</h1>
          </div> :
          <Spin />}
      </div>
      <div className='item_filter_container'>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button><FilterOutlined /> Filters<DownOutlined /></Button>
        </Dropdown>
        <Space className='space_con' direction="vertical" style={{ borderRadius: '5px' }}>
          <Input.Search
            // value=''
            placeholder="Enter Business Name"
            // onChange={onInputChange}
            size="large"
            enterButton='Go'
          // onSearch={}
          />
        </Space>
      </div>
      <div>
        <Table />
      </div>
    </div>
  )
}

export default ItemDetails;
