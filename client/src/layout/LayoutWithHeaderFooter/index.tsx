import React from 'react';
import { Outlet } from 'react-router-dom';


// STYLES
import './style.scss';

// COMPONENTS
import Header from '../Header';
import Footer from '../Footer';


function LayoutWithHeaderFooter(): React.ReactElement {
    return (
        <div>
            <Header/>

            <div className="body-content">
                <Outlet/>
            </div>

            <Footer/>
        </div>
    )
}



export default LayoutWithHeaderFooter;