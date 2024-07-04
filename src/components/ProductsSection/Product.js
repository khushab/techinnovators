import React from "react";
import styled from "styled-components";

function Product({ product }) {
  const icon = product.icon;
  return (
    <Card className="card">
      {icon}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </Card>
  );
}

export default Product;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem;
  padding: 1.2rem;
  width: 25rem;
  height: 13rem;
  transition: all 0.3s ease;
  box-shadow: 1px -1px 25px 3px rgba(226, 223, 223, 0.9);
  -webkit-box-shadow: 1px -1px 25px 3px rgba(226, 223, 223, 0.9);
  -moz-box-shadow: 1px -1px 25px 3px rgba(226, 223, 223, 0.9);
  .icon {
    font-size: 3.5rem;
    color: #e21f36;
  }
  h3 {
    color: #000219;
    font-size: 1.5rem;
    padding: 1rem 0rem;
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
    color: #4b5280;
  }
  &:hover {
    transform: translateY(-4%);
  }
`;
