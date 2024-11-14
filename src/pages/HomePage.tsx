import styled from "styled-components";
import ProductCard from "../components/ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    image: "https://placehold.co/150x150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    image: "https://placehold.co/150x150",
  },
];

const ProductGrid = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
`;

const HomePage: React.FC = ({ onAddToCart }) => {
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </ProductGrid>
  );
};

export default HomePage;
