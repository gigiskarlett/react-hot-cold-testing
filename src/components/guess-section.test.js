import React from 'react';
import { shallow } from 'enzyme';

import GuessSection from './guess-section';

describe("<Guess Section />", () => {
    it("renders without crashing", () => {
        shallow(<GuessSection />)
    })
})