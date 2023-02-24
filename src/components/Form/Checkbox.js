import React from "react";
import styled from "styled-components/macro";

const Component = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const Label = styled.div`
  margin: 0 1rem 0 0;
  min-width: 8rem;
`;

const Values = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxLabel = styled.label`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: #4a5568;
  }
`;

const CheckboxInput = styled.input`
  margin-right: 0.25rem;
  margin-bottom: 1px;
`;

const Checkbox = ({ name, label, values, onChange }) => (
  <Component>
    <Label htmlFor={name}>{label}:</Label>
    <Values>
      {values.map((item) => (
        <CheckboxLabel key={item.value}>
          <CheckboxInput
            type="checkbox"
            checked={item.checked}
            onChange={onChange(item.value)}
          />
          {item.label}
        </CheckboxLabel>
      ))}
    </Values>
  </Component>
);

export default Checkbox;
