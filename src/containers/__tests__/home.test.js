import React from 'react';
import { shallow } from 'enzyme';
import Home from '../home';

describe('<Home />', () => {
  const props = {
    messages: [],
    errorMessage: '',
    isLoading: false,
    loadMessages: () => {},
  };

  it('should render loading', () => {
    const container = shallow(
      <Home.WrappedComponent {...props} isLoading={true} />
    );
    expect(container.find('p').text()).toEqual('Loading....');
  });

  it('should display errorMessage', () => {
    const container = shallow(
      <Home.WrappedComponent
        {...props}
        errorMessage="something went wrong"
        isLoading={false}
      />
    );
    expect(container.find('p').text()).toEqual('something went wrong');
  });
  it('renders correctly', () => {
    const tree = shallow(<Home.WrappedComponent {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
