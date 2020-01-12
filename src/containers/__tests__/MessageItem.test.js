import React from 'react';
import MessageItem from '../messageItem';
import { shallow } from 'enzyme';

describe('<MessageItem />', () => {
  const props = {
    isShow: false,
    item: {
      id: '45eca532-2d63-4519-9fe9-5aa3b81d919a',
      userId: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
      message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
      timestamp: '2016-10-04T05:22:32Z',
      email: 'hhawkins1@posterous.com',
      avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    },
    onMouseOver: jest.fn(),
    onMouseLeave: jest.fn(),
  };

  it('should not display email', () => {
    const container = shallow(<MessageItem {...props} />);
    expect(container.find('.list-item__email')).toHaveLength(0);
  });

  it('should display email', () => {
    const container = shallow(<MessageItem {...props} isShow={true} />);
    expect(container.find('.list-item__email')).toHaveLength(1);
  });

  it('should simulate mouseOver ', () => {
    const container = shallow(<MessageItem {...props} />);
    container.simulate('mouseover', props.item.id);
    expect(props.onMouseOver).toHaveBeenCalled();
    expect(props.onMouseOver.mock.calls[0][0]).toEqual(props.item.id);
  });

  it('should simulate mouseleave ', () => {
    const container = shallow(<MessageItem {...props} />);
    container.simulate('mouseleave');
    expect(props.onMouseLeave).toHaveBeenCalled();
  });
});
