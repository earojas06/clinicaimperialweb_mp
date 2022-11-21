import React from "react";
import '../../index.css'
//import styled from "styled-components";



export const Marketplacehome = (props) => {
  const { id, producto1, valor1, producto2, valor2, producto3, valor3 } = props

  const marketPlaceData = [
    {
      image: { producto1 },
      name: { valor1 },
    },
    {
      image: { producto2 },
      name: { valor2 },
    },
    {
      image: { producto3 },
      name: { valor3 },
    }
  ];



  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        <div className="producto">
            <a href="#">
              <div className="producto__img">
                <img src={producto1} alt="" />
              </div>
            </a>
            <div className="producto__footer">
              <h1> Title</h1>
              <p>categoria</p>
              <p className="price">{valor1}</p>
            </div>
            <div className="buttom">
              <button className="btn">
                Añadir al carrito
              </button>
              <div>
                <a href="#" className="btn">vista</a>
              </div>

            </div>
        </div>
        <div className="producto">
            <a href="#">
              <div className="producto__img">
                <img src={producto1} alt="" />
              </div>
            </a>
            <div className="producto__footer">
              <h1> Title</h1>
              <p>categoria</p>
              <p className="price">{valor1}</p>
            </div>
            <div className="buttom">
              <button className="btn">
                Añadir al carrito
              </button>
              <div>
                <a href="#" className="btn">vista</a>
              </div>

            </div>
        </div>
        <div className="producto">
            <a href="#">
              <div className="producto__img">
                <img src={producto1} alt="" />
              </div>
            </a>
            <div className="producto__footer">
              <h1> Title</h1>
              <p>categoria</p>
              <p className="price">{valor1}</p>
            </div>
            <div className="buttom">
              <button className="btn">
                Añadir al carrito
              </button>
              <div>
                <a href="#" className="btn">vista</a>
              </div>

            </div>
        </div>
        <div className="producto">
            <a href="#">
              <div className="producto__img">
                <img src={producto1} alt="" />
              </div>
            </a>
            <div className="producto__footer">
              <h1> Title</h1>
              <p>categoria</p>
              <p className="price">{valor1}</p>
            </div>
            <div className="buttom">
              <button className="btn">
                Añadir al carrito
              </button>
              <div>
                <a href="#" className="btn">vista</a>
              </div>

            </div>
        </div>
        <div className="producto">
            <a href="#">
              <div className="producto__img">
                <img src={producto1} alt="" />
              </div>
            </a>
            <div className="producto__footer">
              <h1> Title</h1>
              <p>categoria</p>
              <p className="price">{valor1}</p>
            </div>
            <div className="buttom">
              <button className="btn">
                Añadir al carrito
              </button>
              <div>
                <a href="#" className="btn">vista</a>
              </div>

            </div>
        </div>
        <div className="producto">
            <a href="#">
              <div className="producto__img">
                <img src={producto1} alt="" />
              </div>
            </a>
            <div className="producto__footer">
              <h1> Title</h1>
              <p>categoria</p>
              <p className="price">{valor1}</p>
            </div>
            <div className="buttom">
              <button className="btn">
                Añadir al carrito
              </button>
              <div>
                <a href="#" className="btn">vista</a>
              </div>

            </div>
        </div>

      </div>

    </>
  );

}
export default Marketplacehome


