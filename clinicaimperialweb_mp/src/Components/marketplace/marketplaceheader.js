import React from 'react'


export const Header = (props) => {
    const {id,logo}=props


  return (
    <header>
            <div className="menu">
                <a href="#">
                    <div className="logo">
                        <img src={logo} alt="logo" width="150" />
                    </div>
                </a>
            </div>
            <ul>
                <li><a href="#">INICIO</a></li>
                <li><a href="#">PRODUCTOS</a></li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className='item__total'>0</span>
            </div>

    </header>
  )
}
