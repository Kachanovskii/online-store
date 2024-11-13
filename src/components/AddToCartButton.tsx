import React from "react";
import styled from "styled-components";

interface AddToCartButtonProps {
    onClick: () => void;
}

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const AddToCartButton: React.FC<AddToCartButtonProps> = ({onClick}) => {
    return <Button onClick={onClick}>Add to cart</Button>
}

export default AddToCartButton;
