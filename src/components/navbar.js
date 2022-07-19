import React from 'react';
import '../styles/navbar.css';

const navbar = ({setShow}) => {
    return (
        <div>
            <nav>
                <div className="nav_box">
                    <span className="my_shop" onClick={() => setShow(true)} >My Shopping </span>
                    <div className="cart" onClick={() => setShow(false)} >
                        <span>
                            <i class="fa fa-cart-plus"></i>
                        </span>
                        <span>0</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default navbar;