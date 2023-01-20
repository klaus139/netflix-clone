import React, { useEffect, useState } from 'react';
import './nav.css';

function Nav() {
    const [show, handleShow] = useState(false);


   useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            handleShow(true);

        } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll", handleShow);
    };
   }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo'
         //src="https://logos.textgiraffe.com/logos/logo-name/Klaus-designstyle-summer-m.png"
        src="https://pngimage.net/wp-content/uploads/2018/06/free-logo-png-7.png"
        alt="logo" 
        />

        <img className="nav__avatar"
        src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
        alt="avatar"
        />
    </div>
  )
}

export default Nav