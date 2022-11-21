import React from "react";
import '../../index.css'
import styled from "styled-components";



const Marketplacehome= (props) =>{
  const {id,producto1,valor1,producto2,valor2,producto3,valor3}=props

  const marketPlaceData = [
    {
      image: {producto1},
      name: {valor1},
    },
    {
      image: {producto2},
      name: {valor2},
    },
    {
      image: {producto3},
      name: {valor3},
    }
  ];



    return(
        <Section>
      <div className="title">
        <h2>Marketplace</h2>
        <p>
          <img src={producto1}  />
         
        Valor: {valor1}
        </p>
      </div>
      

     {/* <div className="marketPlaces">
        {marketPlaceData.map(({ image, name }) => {
          return (
            <div className="marketplace">
              <div className="image">
                <img src={image} alt="marketplace" />
              </div>
              <div className="name">
                <h4>{name}</h4>
                {/*<BsThreeDots />
              </div>

              </div>  
          );
        })}
      </div> */}
    </Section>

    );
   
}
export default Marketplacehome


const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 0 6rem;
  margin-bottom: 5rem;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-direction: column;
    h2 {
      font-size: 3rem;
    }
    p {
      color: #7b7e86;
    }
  }

  `;