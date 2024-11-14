import React from "react";
import styled from "styled-components";
import CartItem from "../components/CartItem";

interface CartPageProps {
  items: Array<{ id: number; name: string; price: number; quantity: number }>;
  onUpdateQuantity: (id: number, qauntity: number) => void;
  onRemoveItem: (id: number) => void;
}

const PageContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Total = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
`;

const CartPage: React.FC<CartPageProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <PageContainer>
      <Title>Кошик</Title>
      {items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemoveItem}
        />
      ))}
      <Total>Загальна сума: {total} грн</Total>
    </PageContainer>
  );
};

export default CartPage;
