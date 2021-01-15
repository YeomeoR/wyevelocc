import React from 'react';
import { Link } from 'react-router-dom'

const Social = () => {
    return (
    <div className="social">
                <h2>The Alps</h2>
                <div className="line"></div>
                <Link to="/">
                    {/* <img src={hour} alt="60"/> */}
                </Link>
            
                <h2>Races and Sportives</h2>
                <div className="line"></div>
                <Link to="/social">
                    {/* <img src={hour} alt="60"/> */}
                </Link>
            </div>
            

    )

}
export default Social;