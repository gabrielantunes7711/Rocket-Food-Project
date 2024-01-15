import React from "react";
import Select from "react-select";
import theme from "../../../styles/theme";
import { Container } from "./styles";

export const ReactSelect = ({ options, label, setValue, value, ...rest }) => {
  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: "none",
      background: theme.colors.dark900,
      padding: "0.5rem 0",
      borderRadius: "0.8rem",
      color: theme.colors.light100,
      boxShadow: state.isFocused ? "0 0 0 1px white" : "",
    }),
    menu: (provided) => ({
      ...provided,
      background: theme.colors.dark900,
      color: theme.colors.light100,
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isFocused ? theme.colors.dark700 : "transparent",
      color: theme.colors.light100,
    }),
    singleValue: (provide) => ({
      ...provide,
      color: theme.colors.light100,
      padding: "0.7rem",
    }),
    multiValueLabel: (provide) => ({
      ...provide,
      color: theme.colors.light100,
      padding: "0.7rem",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: theme.colors.light500,
      lineHeight: 1,
      fontSize: "1.6rem",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: theme.colors.light700, // Altere para a cor desejada
    }),
  };
  return (
    <Container>
      {label && <span>{label}</span>}

      <Select
        options={options}
        onChange={(options) => setValue(options.map((option) => option.value))}
        value={options.filter((option) => value.includes(option.value))}
        styles={styles}
        theme={(SelectTheme) => ({
          ...SelectTheme,
          borderRadius: 8,
          colors: {
            ...SelectTheme.colors,
            neutral10: theme.colors.dark700,
            neutral20: theme.colors.light100,
            neutral60: theme.colors.light100,
            dangerLight: theme.colors.light300,
          },
        })}
        {...rest}
      />
    </Container>
  );
};
