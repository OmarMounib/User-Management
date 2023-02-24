import React, { Component } from "react";
import styled from "styled-components/macro";

import Section from "./Section";
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  min-width: 600px;
  width: 100%;
`;

const Header = styled.div`
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 300;
`;

const Content = styled.div`
  padding: 1rem 2rem;
`;

const Footer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  border: 1px solid ${(props) => (props.primary ? "#68d391" : "#e2e8f0")};
  background-color: ${(props) => (props.primary ? "#68d391" : "#e2e8f0")};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  padding: 0.5rem 2rem;
  transition: all 0.25s ease-in-out;
  border-radius: 0.375rem;

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => (props.primary ? "#9ae6b4" : "#fff")};
    background-color: ${(props) => (props.primary ? "#9ae6b4" : "#fff")};
  }

  &:nth-child(2) {
    margin-left: 1rem;
  }
`;

class Form extends Component {
  state = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    country: "other",
    notifications: [
      {
        label: "Newsletter",
        value: "newsletter",
        checked: false,
      },
      {
        label: "Updates",
        value: "updates",
        checked: false,
      },
      {
        label: "Reports",
        value: "reports",
        checked: false,
      },
    ],
  };

  handleTextChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleCheckboxChange = (name) => (event) => {
    const newNotification = [...this.state.notifications];

    const neededNotifications = newNotification.filter(
      (item) => item.value === name
    )[0];

    neededNotifications.checked = !neededNotifications.checked;

    this.setState({ notifications: newNotification });
  };

  handleSubmitAndClear = () => {
    this.props.onFormSubmit(this.state);
    this.setState({
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      bio: "",
      country: "other",
      notifications: [
        {
          label: "Newsletter",
          value: "newsletter",
          checked: false,
        },
        {
          label: "Updates",
          value: "updates",
          checked: false,
        },
        {
          label: "Reports",
          value: "reports",
          checked: false,
        },
      ],
    });
  };

  render() {
    const {
      userName,
      firstName,
      lastName,
      email,
      bio,
      country,
      notifications,
    } = this.state;

    return (
      <Wrapper>
        <Header>
          <Title>Add a user</Title>
        </Header>
        <Content>
          <Section
            title="Profile"
            description="Information about the user. Publicly available."
          >
            <Input
              label="Username"
              value={userName}
              name="userName"
              onChange={this.handleTextChange}
            />
            <Input
              label="Bio"
              value={bio}
              name="bio"
              onChange={this.handleTextChange}
              type="textarea"
            />
          </Section>
          <Section
            title="Information"
            description="Additional information. Please check out all the data so we can get in touch with the user."
          >
            <Input
              label="First name"
              value={firstName}
              name="firstName"
              onChange={this.handleTextChange}
            />
            <Input
              label="Last name"
              value={lastName}
              name="lastName"
              onChange={this.handleTextChange}
            />
            <Input
              label="Email"
              value={email}
              name="email"
              onChange={this.handleTextChange}
              type="email"
            />
            <Select
              label="Country"
              value={country}
              name="country"
              onChange={this.handleTextChange}
            />
          </Section>
          <Section
            title="Notifications"
            description="Please define how do you want to receive the messages."
          >
            <Checkbox
              label="Email"
              name="notifications"
              values={notifications}
              onChange={this.handleCheckboxChange}
            />
          </Section>
        </Content>
        <Footer>
          <Button>Cancel</Button>
          <Button primary onClick={this.handleSubmitAndClear}>
            Add
          </Button>
        </Footer>
      </Wrapper>
    );
  }
}

export default Form;
