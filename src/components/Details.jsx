import React from 'react'
import './Details.css'

const Details = ({ details }) => {
    return (
        <div className='container'>
            <div className='grid'>
                <div className='img-product'><img src={details.image} /></div>
                <div className='details'>
                    <p className='product-name'>{details.product_name}</p>
                    <p className='price'>${details.price}</p>
                    <div className='description'>
                        <h3>Descripcion</h3>
                        <p>
                            {details.description}
                        </p>
                    </div>
                    <button>Comprar ahora</button>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Details;
