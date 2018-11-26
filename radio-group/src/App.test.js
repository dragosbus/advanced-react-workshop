import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App/>', () => {
  const app = shallow(<App/>);

  it('the initial value should be play button', ()=>{
    expect(app.find('RadioGroup').prop('defaultValue')).toBe('play');
  });
});