import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Input,
  Message,
  Segment
} from "semantic-ui-react";

class SignupForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    company: "",
    department: "",
    position: "",
    email: ""
  };
  componentDidMount = () => {
    try {
      const json = localStorage.getItem("user");
      const user = JSON.parse(json); // json to js {}
      if (user) {
        const {
          firstName,
          lastName,
          company,
          department,
          position,
          email
        } = user;
        this.setState(() => ({
          firstName,
          lastName,
          company,
          department,
          position,
          email
        }));
        // console.log("user", user);
      }
    } catch (error) {
      // Do nothing at all
    }
  };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state);
  };

  render() {
    const {
      firstName,
      lastName,
      company,
      department,
      position,
      email
    } = this.state;
    return (
      <div className="signup-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Welcome To Signup
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Field inline>
                  <label>First name : </label>
                  <Input
                    placeholder="First name"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field inline>
                  <label>Last name : </label>
                  <Input
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                    id="name"
                    value={lastName}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field inline>
                  <label>Company : </label>
                  <Input
                    placeholder="company name"
                    type="text"
                    name="company"
                    value={company}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field inline>
                  <label> Department : </label>
                  <Input
                    placeholder="Department name"
                    type="text"
                    name="department"
                    value={department}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field inline>
                  <label> Position : </label>
                  <Input
                    placeholder=" your position"
                    type="text"
                    name="position"
                    value={position}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field inline>
                  <label>Email : </label>
                  <Input
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.handleSubmit}
                >
                  Signup
                </Button>
              </Segment>
            </Form>
            <Message>
              Have an account? <a href="#">Login</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignupForm;

{
  /* <Form.Field inline>
                  <label> : </label>
                  <Input
                    placeholder=""
                    onChange={e => this.setState({ : e.value })}
                  />
                </Form.Field> */
}
