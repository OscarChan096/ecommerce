import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Details from './Details'

import './Dashboard.css';

export default function Dashboard() {

    const [products, setProducts] = useState([]);
    const [details, setDetails] = useState({});

    const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/';

    const requests = {
        getAllItems: `${BASE_URL}item`,
    }

    useEffect(() => {
        axios
            .get(requests.getAllItems)
            .then(({ data }) => setProducts(data))
            .catch((error) => console.log('error calling items ', error))
    }, [])

    const recoverDetails = (product) => {
        setDetails(product);
        //console.log(product.product_name);
    }

    return (
        <>
            {
                products.length === 0 ? (
                    <h3>Cargando información... ♨️</h3>
                ) : (
                    <div className='content'>
                        {Object.values(details).length === 0 ? (
                            <div className='grid'>
                                {products.map((product, index) => (
                                    <div key={index} className='card' onClick={() => recoverDetails(product)}>
                                        <img src={product.image} alt='imagen' />
                                        <hr />
                                        <div className='info-item'>
                                            <p><span className='price'>${product.price}</span></p>
                                            <p><span className='product-name'>{product.product_name}</span></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ): (
                            <Details details={details} />
                        ) }
                    </div>
                )
            }
        </>
    )
}
