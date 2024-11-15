import { useParams } from "react-router-dom";
import styled from "styled-components";
import AddToCartButton from "../components/AddToCartButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { useEffect } from "react";
import { fetchProducts } from "../api/productsApi";
import { setProducts } from "../redux/slices/productsSlice";
import { AppDispatch } from "../redux/store";
import { addItem } from "../redux/slices/cartSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductContainer = styled.div`
  padding: 20px;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const product = useSelector((state: RootState) =>
    state.products.items.find((item) => item.id === Number(id))
  );

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      })
    );
  };

  useEffect(() => {
    if (!product) {
      fetchProducts().then((data) => {
        dispatch(setProducts(data));
      });
    }
  }, [product, dispatch]);

  if (!product) {
    return <p>Product no found</p>;
  }

  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>{product.price}</ProductPrice>
      <AddToCartButton onClick={handleAddToCart} />
      <ProductDescription>{product.description}</ProductDescription>
    </ProductContainer>
  );
};

export default ProductPage;
