import React from "react";
import { shallow, mount } from "enzyme";

import GuessForm from "./guess-form";

describe("<GuessForm />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessForm />);
  });

  it("calls onMakeGuess when form submits", () => {
    const callback = jest.fn()
    const wrapper= mount(<GuessForm onMakeGuess={callback} />);
    const button = wrapper.find(".button");
    button.simulate("submit", {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  })
});
