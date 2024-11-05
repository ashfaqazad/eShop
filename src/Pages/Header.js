import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Header = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className='text-decoration-none d-flex'>
                        <i className='bi bi-shop-window text-warning me-2'></i>
                        <span className="navbar-brand">eShop</span>
                    </Link>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search here..." aria-label="Recipient's username" />
                        <span className="input-group-text bg-warning"><i className='bi bi-search'></i></span>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 ms-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active d-flex flex-column" aria-current="page" href="/">
                                    <small style={{ fontSize: '10px' }}>Hello</small>
                                    <small style={{ fontSize: '10px' }}>Guest</small>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active d-flex flex-column" aria-current="page" href="/">
                                    <small style={{ fontSize: '10px' }}>Your</small>
                                    <strong style={{ fontSize: '11px' }}>Shop</strong>
                                </a>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active d-flex" aria-current="page" to="/checkout">
                                    <i className='bi bi-basket2 text-white me-2'></i>
                                    <span>{basket.length}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
