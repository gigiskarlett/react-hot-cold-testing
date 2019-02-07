import React from "react";
import { shallow } from "enzyme";

import GuessList from "./guess-list";

describe("<GuessList />", () => {
  it("renders without crashing", () => {
    shallow(<GuessList guesses={[]} />);
  });

  it("renders a list of guesses", () => {
    const values= [6, 7, 1];
    const wrapper = shallow(<GuessList guesses={values} />);
    const items = wrapper.find("li")
    expect(items.length).toEqual(values.length)
    //expect(values).to.have.property('key')
  })

});
