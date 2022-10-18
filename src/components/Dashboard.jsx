import React from 'react';
import Details from './Details'

import './Dashboard.css';
import Cards from './Cards';

const Dashboard = ({ products }) => {
    //console.log('products dashboard: ', products);

    return (
        <div className='content'>
            <Cards products={products} />
        </div>
    )
}

export default Dashboard;