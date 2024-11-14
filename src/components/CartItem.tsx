import React from "react";
import styled from "styled-components";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const ItemName = styled.p`
  flex: 2;
  font-size: 1rem;
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  margin-right: 10px;
`;

const ItemPrice = styled.p`
  flex: 1;
  font-size: 1rem;
  text-align: right;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d9363e;
  }
`;

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <ItemContainer>
      <ItemName>{name}</ItemName>
      <QuantityInput
        type="number"
        value={quantity}
        onChange={(e) => onUpdateQuantity(id, parseInt(e.target.value))}
      />
      <ItemPrice>{price * quantity} грн</ItemPrice>
      <RemoveButton onClick={() => onRemove(id)} >Видалити</RemoveButton>
    </ItemContainer>
  );
};

export default CartItem;
