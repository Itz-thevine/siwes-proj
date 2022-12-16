import React from './product_image.css'

function Product_image(props) {
    const {height, imgSrc, imgAlt} = props
    const border = height/15;

    console.log(border);
    console.log(height);
    return (    
        <div className='product_image' >
            <img src={imgSrc} alt={imgAlt} style={{height: height, width:height, borderRadius:border}}/>
        </div>
    )
}

export default Product_image
