import React from "react";
import styled from "styled-components/macro";

const Component = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const Label = styled.label`
  margin: 0 1rem 0 0;
  min-width: 8rem;
`;

const StyledSelect = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  flex: 1;
  appearance: none;

  &:hover {
    cursor: pointer;
  }
`;

const Select = ({ name, label, value, onChange }) => (
  <Component>
    <Label htmlForm={name}>{label}:</Label>
    <StyledSelect id={name} value={value} name={name} onChange={onChange(name)}>
      <option value="egy">Egypt</option>
      <option value="ksa">Saudi Arabia</option>
      <option value="other">Other</option>
    </StyledSelect>
  </Component>
);

export default Select;
