import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';


describe('<List />', () => {
  //all test cases here
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  //render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<List header='someHeader' cards={['theCards']} />, div);
  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<List header='someHeader' cards={['theCards']} />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });

});
