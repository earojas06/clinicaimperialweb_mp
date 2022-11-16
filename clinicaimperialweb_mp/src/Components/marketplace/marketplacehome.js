import React from "react";
import '../../index.css'
import styled from "styled-components";
export default function Marketplacehome (){

    return(
        <Section>
      <div className="title">
        <h2>NFT Marketplace</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>
      {/**
      <div className="marketPlaces">
        {marketPlaceData.map(({ image, name }) => {
          return (
            <div className="marketplace">
              <div className="image">
                <img src={image} alt="marketplace" />
              </div>
              <div className="name">
                <h4>{name}</h4>
                <BsThreeDots />
              </div>
              <h6 className="username">@koolkishansheth</h6>
              <div className="price-container">
                <h5 className="price">5.5ETH</h5>
                <FaEthereum />
              </div>
            </div>
          );
        })}
      </div> */}
    </Section>

    );
   
}

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