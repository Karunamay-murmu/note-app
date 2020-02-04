import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

export default function landingPage() {
    return (
        <div className='create-note-container'>
            <div className='flex-coloumn create-note-button'>
                <Link to="/create-notes"><i className='fa fa-plus fa-3x'></i></Link>    
                <p>click add icon to create your first note</p>
            </div>
        </div>
    )
}
