import React, { useEffect, useState } from "react";
import axios from 'axios';
import Dashboard from "./Dashboard";

import './Navbar.css';

const Navbar = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [find, setFind] = useState([]);
    const [isSearch, setIsSearch] = useState(false);

    //console.log('navbar: ',products);

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

    const handleFormValue = (event) => {
        setSearch(event.target.value);
        //console.log(event.target.value);
    }

    const submit = () => {
        products.map((product) => {
            let name = product.product_name.trim();
            if (name.toUpperCase() === search.toUpperCase()) {
                setFind(product);
            }
        });
        setIsSearch(true);
        //console.log(find);
    }

    return (
        <>
            <nav className="nav-container">
                <div className="logo-container">
                    <a href="#">
                        <span className="text-nova">NOVA</span>
                        <span className="text-shop">SHOP</span>
                    </a>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">Categorias</a></li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Ayuda</a></li>
                    </ul>
                </div>
                <div className="content-search">
                    <input
                        type="search"
                        className="search"
                        name="product"
                        placeholder="Buscar"
                        value={search}
                        onChange={handleFormValue} />
                    <button onClick={() => submit()}>Buscar</button>
                </div>
                <div className="user">
                    <a href="#"><span className="login-text">Login</span></a>
                </div>
            </nav>
            <Dashboard products={products}/>
        </>
    );
}

export default Navbar;