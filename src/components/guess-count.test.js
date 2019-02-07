import React from "react";
import { shallow } from "enzyme";

import GuessCount from "./guess-count";

describe("<GuessCount />", () => {
  it("renders without crashing", () => {
      shallow(<GuessCount />)
  });

  it("should count how many guesses user has", () => {
    const values= [9];
    const wrapper= shallow(<GuessCount guesses={values} />);
    const count= wrapper.find("h2");
    expect(count.length).toEqual(values.length)
  })
});
