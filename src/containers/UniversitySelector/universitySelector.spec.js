import React from 'react';
import { shallow, mount } from 'enzyme';
import { UniversitySelector } from './';
jest.mock('../../components/UniversityLabel');

const props = {
  universities: [{id: 1}, {id: 2}, {id: 3},{id: 4}],
  selectUniversity: () => ({})
};

describe('Testing module for UniversitySelector Component', ()=>{

  it('should have 4 UniversityLabel Childrens', () => {
    const wrapper = shallow(<UniversitySelector  {...props}/>);
    expect(wrapper.find('UniversityLabel').length).toBe(props.universities.length);
  });

  it('renders correctly', () => {
      const wrapper = mount(<UniversitySelector {...props}/>);
      expect(wrapper).toMatchSnapshot();
  });
});
