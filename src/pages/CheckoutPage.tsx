import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
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
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order placed:', formData)
  }

  return (
    <PageContainer>
        <Title>Оформлення замовлення</Title>
        <Form onSubmit={handleSubmit}>
            <Input type='text' name='name' placeholder="Ім'я" value={formData.name} onChange={handleChange} required/>
            <Input type='text' name='address' placeholder="Адреса доставки" value={formData.address} onChange={handleChange} required/>
            <Input type='tel' name='phone' placeholder="Номер телефону" value={formData.phone} onChange={handleChange} required/>
            <Input type='text' name='paymentMethod' placeholder="Метод оплати" value={formData.paymentMethod} onChange={handleChange} required/>
            <SubmitButton type="submit">Підтвердити замовлення</SubmitButton>
        </Form>
    </PageContainer>
  );
};

export default CheckoutPage;
