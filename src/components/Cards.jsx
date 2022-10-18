import React from 'react'
import errorimg from '../assets/error-img.jpg';

const Cards = ({products}) => {
    console.log('cards products: ',products);

    return (
        <div className='grid'>
            {products.map((product, index) => (
                <div key={index} className='card' onClick={() => recoverDetails(product)}>
                    <img src={product.image || errorimg} alt='imagen' />
                    <hr />
                    <div className='info-item'>
                        <p><span className='price'>${product.price}</span></p>
                        <p><span className='product-name'>{product.product_name}</span></p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;