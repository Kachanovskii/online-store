import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { useEffect } from "react";
import { loadProducts } from "../redux/slices/productsSlice";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 29.99,
//     image: "https://placehold.co/150x150",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 39.99,
//     image: "https://placehold.co/150x150",
//   },
// ];

const ProductGrid = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
`;

const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.products.items);
  const loading = useSelector((state: RootState) => state.products.loading);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>

  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </ProductGrid>
  );
};

export default HomePage;
