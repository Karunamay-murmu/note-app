import React from 'react';
import {Link} from 'react-router-dom'

import '../Header/Header.css';

export default function Header() {
    return (
        <nav>
            <div className='nav-bar flex-row'>
                <div>
                    <i className='fa fa-bars fa-2x'></i>
                </div>
                <div className='brand'>
                    <Link to='/'><h1 className='brand-title'>Write It</h1></Link>
                </div>
            </div>
        </nav>
    )
}