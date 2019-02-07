import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './aural-status';

describe("<AuralStatus />", () => {
    it("renders without crashing", () => {
       shallow(<AuralStatus />)
    })

    it("gives auralStatus", () => {
        const auralStatus = "warm";
        const wrapper= shallow(<AuralStatus auralStatus={auralStatus} />);
        expect(wrapper.contains(auralStatus)).toEqual(true)
    })
})
