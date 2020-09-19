import React from 'react';
import './banner.css'
import { Button } from "@material-ui/core";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__search">
                <Button className="banner__searchbutton" variant='outline'>Serach dates</Button>
            </div>
             
            <div className="banner__info">
                <h1>Go Near</h1>
                <h4>Settle in somwhere new.Discover neraby stays to live,work or just relax</h4>
                <Button variant='outline'>Explore Nearby</Button>
           </div>
        </div>
    )
    
}
export default Banner;