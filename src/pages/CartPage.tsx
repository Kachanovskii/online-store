import React from "react";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { removeItem, updateQuantity } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

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

const CheckoutButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  width: 100%;
  &:hover {
    background-color: #45a049;
  }
`;

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const total = items?.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
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
      {items.length > 0 ? (
        items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={() => handleRemoveItem(item.id)}
          />
        ))
      ) : (
        <p>Ваш кошик порожній</p>
      )}
      <Total>Загальна сума: {total.toFixed(2)} грн</Total>
      {items.length > 0 && (
        <Link to="/checkout">
          <CheckoutButton>Оформити замовлення</CheckoutButton>
        </Link>
      )}
    </PageContainer>
  );
};

export default CartPage;
