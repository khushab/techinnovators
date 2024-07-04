import React from 'react';
import styled from 'styled-components';
//importing data
import productsData from '../../data/productsData';
import Product from './Product';

function ProductsSection() {
    let products = productsData();
    console.log(products)
    return (
        <Products id="products">
            <Title>
                <h2>You can take advantage of our various features</h2>
                <p>Tech Innovators provides state-of-the-art software solutions designed to
        streamline your business processes, enhance productivity, and drive
        innovation. Our products are tailored to meet the unique needs of modern
        enterprises, offering unparalleled performance and reliability.</p>
            </Title>
            <div className="products__items">
                {products.map((product) => (
                    <Product
                        product={product}
                    />
                ))}
            </div>
            <div className="products__button">
                <a to="/#">Find Out More..</a>
            </div>
        </Products>
    )
}

export default ProductsSection


const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 0rem;
    p{
      color: #e21f36;
      font-weight: 600;
      font-size: 1.2rem;
      
      /* background-color: yellow; */
    }
    h2{
      color: #000219;
      font-weight: 800;
      font-size: 2rem;
      text-transform: capitalize;
      padding: 0rem 0.5rem;
      /* background-color: yellow; */
    }
`

const Products = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  color: #000219;
  background-color: #fff;
  h2 {
    font-size: 2rem;
    padding: 1rem 0rem;
    text-align: center;
  }
  .product {
    display: flex;
    margin: 2rem 5rem;
    p {
      font-size: 1.5rem;
    }
    .product__content {
      //   background-color: red;
      padding: 0rem 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
  .products__button {
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0rem;
    cursor: pointer;
  }
  a {
    // display: block;
    text-align: center;
    text-decoration: none;
    padding: 0.6rem 1rem;
    font-size: 1.3rem;
    color: white;
    transition: 0.3s ease;
    margin: 1rem 1rem 0rem 1rem;
    border: none;
    transition: all 0.5s ease;
    background-color: #e21f36;
    box-shadow: 0 0.25rem 0.5rem rgba(255, 255, 255, 0.4) inset;
    &:hover {
      background: orangered;
    }
    @media screen and (max-height: 900px) {
      padding: 0.6rem;
      font-size: 1.1rem;
    }
  }

.products__items {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0rem 1rem;
}
`