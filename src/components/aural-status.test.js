import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './aural-status';

describe("<AuralStatus />", () => {
    it("renders without crashing", () => {
       shallow(<AuralStatus />)
    })
})