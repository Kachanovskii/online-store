import { RootState } from "@reduxjs/toolkit/query";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const CartItemContainer = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ItemName = styled.p`
  font-size: 1.1rem;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ItemQuantity = styled.p`
  font-size: 1rem;
`;

const Total = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const CheckoutPage: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  const total = items?.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <PageContainer>
      <Title>Оформлення замовлення</Title>
      {orderPlaced ? (
        <div>
          <h2>Замовлення оформлено</h2>
          <h3>Контактні дані:</h3>
          <p>Ім'я: {formData.name}</p>
          <p>Адреса доставки: {formData.address}</p>
          <p>Номер телефону: {formData.phone}</p>
          <p>Метод оплати: {formData.paymentMethod}</p>
          <h3>Товари в замовленні:</h3>
          {items.length > 0 && (
            <div>
              {items.map((item) => (
                <CartItemContainer>
                  <ItemName>{item.title}</ItemName>
                  <ItemQuantity>{item.quantity}</ItemQuantity>
                  <ItemPrice>{item.price * item.quantity} грн</ItemPrice>
                </CartItemContainer>
              ))}
              <Total>Загальна сума: {total?.toFixed(2)} грн</Total>
            </div>
          )}
        </div>
      ) : (
        <div>
          {items.length > 0 && (
            <div>
              {items.map((item) => (
                <CartItemContainer>
                  <ItemName>{item.title}</ItemName>
                  <ItemQuantity>{item.quantity}</ItemQuantity>
                  <ItemPrice>{item.price * item.quantity} грн</ItemPrice>
                </CartItemContainer>
              ))}
              <Total>Загальна сума: {total?.toFixed(2)} грн</Total>
            </div>
          )}
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Ім'я"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="address"
              placeholder="Адреса доставки"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Номер телефону"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="paymentMethod"
              placeholder="Метод оплати"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit">Підтвердити замовлення</SubmitButton>
          </Form>
        </div>
      )}
    </PageContainer>
  );
};

export default CheckoutPage;
