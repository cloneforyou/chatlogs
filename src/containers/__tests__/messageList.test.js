import React from 'react';
import MessageList from '../messageList';
import { shallow } from 'enzyme';

describe('<MessageList />', () => {
  const props = {
    messages: [
      {
        id: '22a887be-78dc-45bf-8997-b712d3de4510',
        userId: 'e837c9f5-247f-445f-bcc3-7d434348336b',
        message: 'Cras in purus eu magna vulputate luctus.',
        timestamp: '2017-01-26T07:53:12Z',
        email: 'mbradley0@google.it',
        avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
      },
      {
        id: '45eca532-2d63-4519-9fe9-5aa3b81d919a',
        userId: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
        message:
          'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
        timestamp: '2016-10-04T05:22:32Z',
        email: 'hhawkins1@posterous.com',
        avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
      },
    ],
  };

  it('should render two messages', () => {
    const container = shallow(<MessageList {...props} />);
    expect(container.find('MessageItem')).toHaveLength(2);
  });

  it('should display email on mouseOver', () => {
    const container = shallow(<MessageList {...props} />);
    const messageId = '45eca532-2d63-4519-9fe9-5aa3b81d919a';
    container
      .find('MessageItem')
      .at(0)
      .simulate('mouseover', messageId);

    expect(
      container
        .find('MessageItem')
        .at(0)
        .props().isShow
    ).toEqual(true);
  });

  it('should not display email on mouseleave', () => {
    const container = shallow(<MessageList {...props} />);
    container
      .find('MessageItem')
      .at(0)
      .simulate('mouseleave');
    expect(
      container
        .find('MessageItem')
        .at(0)
        .props().isShow
    ).toEqual(false);
  });
});
