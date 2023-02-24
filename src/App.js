import React from "react";
import styled from "styled-components/macro";

import Form from "./components/Form/Form";
import User from "./components/User/User";

const Component = styled.div`
  display: flex;
  background-color: #fafafa;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
`;

class App extends React.Component {
  state = {
    users: [
      {
        userName: "Omar",
        firstName: "Omar",
        lastName: "Tony",
        email: "youCanGoogleMe@gmail.com",
      },
      {
        userName: "Ricky",
        firstName: "Ricky",
        lastName: "Manyal",
        email: "youCan'tGoogleMe@gmail.com",
      },
    ],
  };

  handleFormSubmit = (formUser) => {
    this.setState({ users: [formUser, ...this.state.users] });
  };

  render() {
    return (
      <Component>
        <Wrapper>
          <Form onFormSubmit={this.handleFormSubmit} />
          <UserList>
            {this.state.users.map((user) => (
              <User
                key={user.userName}
                firstName={user.firstName}
                lastName={user.lastName}
                userName={user.userName}
                email={user.email}
              />
            ))}
          </UserList>
        </Wrapper>
      </Component>
    );
  }
}

export default App;
