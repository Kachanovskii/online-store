import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { useEffect } from "react";
import { loadProducts } from "../redux/slices/productsSlice";
import { addItem } from "../redux/slices/cartSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductGrid = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
`;

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.products.items);
  const loading = useSelector((state: RootState) => state.products.loading);

  const handleAddToCart = (product: Product) => {
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
    dispatch(loadProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </ProductGrid>
  );
};

export default HomePage;
