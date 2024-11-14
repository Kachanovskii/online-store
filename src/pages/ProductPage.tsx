import { useParams } from "react-router-dom";
import styled from "styled-components";
import AddToCartButton from "../components/AddToCartButton";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  descriptions: string;
  onAddToCart: (id: number) => void;
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

const ProductPage: React.FC = ({onAddToCart}) => {
  const { id } = useParams<{ id: string }>();

  const product: Product = {
    id: Number(id),
    name: `Product ${id}`,
    price: 29.99,
    image: 'https://placehold.co/150x150',
    descriptions: 'This is a detailed description of the product.',
    onAddToCart: (id) => id
  };

  return (
    <ProductContainer>
        <ProductImage src={product.image} alt={product.name} />
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>{product.price}</ProductPrice>
        <AddToCartButton onClick={() => onAddToCart(product.id)} />
        <ProductDescription>{product.descriptions}</ProductDescription>
    </ProductContainer>
  );
};

export default ProductPage;
