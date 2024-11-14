import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddToCartButton from "./AddToCartButton";

interface Product {
  id: number;
  title: string;
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
  height: 100%;
  height: auto;
  border-radius: 8px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const ProductName = styled.h2`
  font-size: 18px;
  margin: 10px 0;
  max-height: 58px;
  overflow: hidden;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #333;
`;

const DetailsLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <CardContainer>
        <ProductImage src={product.image} alt={product.title} />
        <ProductName>{product.title}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <AddToCartButton onClick={() => onAddToCart(product.id)} />
        <DetailsLink to={`/product/${product.id}`}>View Details</DetailsLink>
    </CardContainer>
  );
};

export default ProductCard;
