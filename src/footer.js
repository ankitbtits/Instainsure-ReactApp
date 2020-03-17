import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <footer>
            <div className="container _footer_inner">
                Copyright 2019 CompareBuySave.ca - All rights reserved.
                <Link to="#" className="_submit_btn">Get Quote</Link>
            </div>
        </footer>
    );
}
export default Footer;