import React, { useRef } from "react";
import { Container, Option } from "./styles";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import Swal from "sweetalert2";

export const NewOptions = ({ options, title, setOptions }) => {
  const inputRef = useRef(null);

  function addOption() {
    const inputValue = inputRef.current.value;
    const haveCurrentOption = options.includes(inputValue);

    if (!inputValue) return;

    if (haveCurrentOption) {
      return new Swal({
        icon: "error",
        title: "Este item já foi adicionado",
        confirmButtonText: "Ok",
      });
    }

    setOptions((prev) => [...prev, inputValue]);
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function removeOption(e) {
    const value = e.target.previousElementSibling.innerText;
    setOptions(options.filter((item) => item !== value));
  }

  return (
    <Container>
      <span>{title}</span>
      <div>
        {options &&
          options.map((option, i) => (
            <Option key={i}>
              <span>{option}</span>
              <button type="button" onClick={removeOption}>
                <AiOutlineClose size={15} />
              </button>
            </Option>
          ))}

        <Option $isNew>
          <input
            placeholder="Adicionar"
            ref={inputRef}
            onKeyUp={(e) => {
              if (e.key === "Enter") addOption();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          />
          <button type="button" onClick={addOption}>
            <AiOutlinePlus size={15} />
          </button>
        </Option>
      </div>
    </Container>
  );
};
