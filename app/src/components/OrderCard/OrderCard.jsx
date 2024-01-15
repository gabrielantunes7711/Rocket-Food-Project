import React from "react";
import { Container, Exclude } from "./styles";
import foodImg from "../../../public/images/food.png";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  decreaseProduct,
  increaseProduct,
  removeFromCart,
} from "../../redux/cart/actions";

export const OrderCard = ({ data }) => {
  const { name, price, quantity, id } = data;
  const totalValue = Number(price) * quantity;
  const dispatch = useDispatch();

  function handleRemoveProduct() {
    dispatch(removeFromCart(id));
  }

  function handleIncreaseProduct() {
    dispatch(increaseProduct(id));
  }

  function handleDecreaseProduct() {
    if (quantity !== 1) {
      dispatch(decreaseProduct(id));
    } else {
      dispatch(removeFromCart(id));
    }
  }

  return (
    <Container>
      <img src={foodImg} alt="" />

      <div>
        <h3>
          {name}
          <span>R$ {String(totalValue.toFixed(2)).replace(".", ",")}</span>
        </h3>

        <div>
          <button onClick={handleDecreaseProduct}>
            <BiMinus size={24} />
          </button>

          <span>{String(quantity).padStart(2, "0")}</span>

          <button onClick={handleIncreaseProduct}>
            <BiPlus size={24} />
          </button>

          <Exclude onClick={handleRemoveProduct}>Excluir</Exclude>
        </div>
      </div>
    </Container>
  );
};
