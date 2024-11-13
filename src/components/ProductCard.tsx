import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddToCartButton from "./AddToCartButton";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCart: (id: number) => void;
}

interface ProductCardProps {
  product: Product;
}

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  width: 200px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductName = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #333;
`;

const DetailsLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer>
        <ProductImage src={product.image} alt={product.name} />
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <AddToCartButton onClick={() => product.onAddToCart(product.id)} />
        <DetailsLink to={`/product/${product.id}`}>View Details</DetailsLink>
    </CardContainer>
  );
};

export default ProductCard;
