// Testing the behavior

import React from "react";
import SignupForm from "../components/SignupForm";
import { shallow, mount } from "enzyme";

describe("SignupForm", () => {
  let signupForm;
  let signupFormlist;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
    signupForm = mount(<SignupForm onAdd={onAdd} />);
    signupFormlist = shallow(<SignupForm onAdd={onAdd} />);
  });

  it("SignupForm requires onAdd prop", () => {
    expect(signupForm.props().onAdd).toBeDefined();
  });

  it("SignupForm renders button", () => {
    const button = signupForm.find("button").first();
    expect(button).toBeDefined();
  });

  it("Button click calls onAdd first input", () => {
    const button = signupForm.find("button").first();
    const input = signupForm.find("input").first();
    input.simulate("change", { target: { value: "Rakin" } });
    button.simulate("click");
    expect(onAdd).toBeCalledWith({
      firstName: "Rakin",
      company: "",
      department: "",
      email: "",
      lastName: "",
      position: ""
    });
  });

  it("Button click calls onAdd  last input", () => {
    const button = signupForm.find("button").first();
    const input = signupForm.find("input").last();
    input.simulate("change", { target: { value: "a@g.com" } });
    button.simulate("click");
    expect(onAdd).toBeCalledWith({
      company: "",
      department: "",
      email: "a@g.com",
      firstName: "",
      lastName: "",
      position: ""
    });
  });
});
