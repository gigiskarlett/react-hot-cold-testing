import React from "react";
import { shallow } from "enzyme";

import TopNav from "./top-nav";

describe("<TopNav />", () => {
  it("renders without crashing", () => {
    shallow(<TopNav />);
  });

  it("Should call onNewGame when new game is clicked", () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const link = wrapper.find(".new");
    link.simulate("click", {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });

  it("should update aural-status", () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    const link = wrapper.find(".visuallyhidden");
    link.simulate("click", {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});
