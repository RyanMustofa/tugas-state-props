import React from 'react';
import './button.css';

const Button = ({children,warna}) =>{
    return(
        <div className="btn" style={{background: warna}}>
            {children}
        </div>
    )
}

export default Button;
