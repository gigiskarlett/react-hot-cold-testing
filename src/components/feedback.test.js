import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe("<Feedback />", () => {
    it("renders without crashing", () => {
        shallow(<Feedback />)
    })

    it("gives feedback to player", () => {
        const feedback = "you're hot"
        const wrapper= shallow(<Feedback feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    })
})