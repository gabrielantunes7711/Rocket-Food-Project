import React, { useState } from "react";
import { Container } from "./styles";
import { AiOutlineCamera } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export const UploadImage = ({ image, setImage }) => {
  const imageUrl =
    typeof image !== "object" ? image : URL.createObjectURL(image);

  return (
    <Container>
      <img src={imageUrl} alt="" />
      <label>
        <AiOutlineCamera size={25} />
        <input
          type="file"
          onChange={({ target }) => setImage(target.files[0])}
        />
      </label>

      <button type="button" onClick={() => setImage(null)}>
        <IoMdClose size={20} />
      </button>
    </Container>
  );
};
