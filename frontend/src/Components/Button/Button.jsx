import React from 'react';
import styled from "styled-components";

const Button = ({name, icon, onClick, background, bottomPadding, color, borderRadius}) => {
    return (
        <ButtonStyled style={{
            background: background,
            padding: bottomPadding,
            borderRadius: borderRadius,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    );
};

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  gap: .5rem;
  cursor: pointer;
  transition: all .4s ease-in-out;
`;

export default Button;