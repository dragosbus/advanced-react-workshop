import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App/>', () => {
  const app = shallow(<App/>);
  
  beforeEach(() => {
    app.find('RadioButton').at(0).simulate('click');
  });
  it('should have active class', ()=>{
    expect(app.find('RadioButton').at(0).hasClass('active')).toBe(true);
  });
});