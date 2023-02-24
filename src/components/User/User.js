import React from "react";
import styled from "styled-components/macro";

const Component = styled.div`
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 2rem;
`;

const Header = styled.h4`
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.25rem;
  text-align: center;
  margin: 0 0 1rem 0;
`;

const Field = styled.div`
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

const Text = styled.p`
  margin: 0;
  min-width: 6rem;
`;

const Item = styled.p`
  margin: 0;
`;

const User = ({ firstName, lastName, userName, email }) => (
  <Component>
    <Header>
      {firstName} {lastName}{" "}
    </Header>
    <Field>
      <Text>
        <strong>Username:</strong>
      </Text>
      <Item>{userName}</Item>
    </Field>
    <Field>
      <Text>
        <strong>Email:</strong>
      </Text>
      <Item>{email}</Item>
    </Field>
  </Component>
);

export default User;
