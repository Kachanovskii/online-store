import React from "react";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { removeItem, updateQuantity } from "../redux/slices/cartSlice";

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

const CartPage: React.FC = () => {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <PageContainer>
      <Title>Кошик</Title>
      {items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onUpdateQuantity={(quantity) => handleUpdateQuantity(item.id, quantity)}
          onRemove={() => handleRemoveItem(item.id)}
        />
      ))}
      <Total>Загальна сума: {total} грн</Total>
    </PageContainer>
  );
};

export default CartPage;
