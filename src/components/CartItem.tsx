import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: () => void;
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
  title,
  price,
  quantity,
  onUpdateQuantity,
  onRemove,
}) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);

  useEffect(() => {
    setLocalQuantity(quantity);
  }, [quantity]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);

    if (!isNaN(value) && value >= 1) {
      setLocalQuantity(value)
      onUpdateQuantity(id, value);
    }
  };

  return (
    <ItemContainer>
      <ItemName>{title}</ItemName>
      <QuantityInput
        type="number"
        min="1"
        value={localQuantity}
        onChange={handleQuantityChange}
      />
      <ItemPrice>{price * quantity} грн</ItemPrice>
      <RemoveButton onClick={onRemove}>Видалити</RemoveButton>
    </ItemContainer>
  );
};

export default CartItem;
