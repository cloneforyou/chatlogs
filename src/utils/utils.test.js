import {
  getChatMemberMessagesDetails,
  timeFormatter,
  sortByDate,
} from './index';

const members = [
  {
    id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
    firstName: 'Martin',
    lastName: 'Bradley',
    email: 'mbradley0@google.it',
    avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    ip: '166.124.172.160',
  },
  {
    id: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
    firstName: 'Helen',
    lastName: 'Hawkins',
    email: 'hhawkins1@posterous.com',
    avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    ip: '179.239.189.173',
  },
];
const messages = [
  {
    id: '22a887be-78dc-45bf-8997-b712d3de4510',
    userId: 'e837c9f5-247f-445f-bcc3-7d434348336b',
    message: 'Cras in purus eu magna vulputate luctus.',
    timestamp: '2017-01-26T07:53:12Z',
  },
  {
    id: '45eca532-2d63-4519-9fe9-5aa3b81d919a',
    userId: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
    message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    timestamp: '2016-10-04T05:22:32Z',
  },
];

describe('utils', () => {
  describe('Messages full details', () => {
    const expectedPayload = [
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
    ];
    it('should get chat member messages details', () => {
      const messagesDetail = getChatMemberMessagesDetails(messages, members);
      expect(messagesDetail).toHaveLength(2);
      expect(messagesDetail).toEqual(expectedPayload);
    });
  });

  describe('timeFormat', () => {
    it('should format time as Month date year, time', () => {
      const expectedResult = 'October 4, 2016 06:22 AM';
      expect(timeFormatter('2016-10-04T05:22:32Z')).toEqual(expectedResult);
    });
  });

  describe('sortByDate', () => {
    const messages = [
      {
        id: '22a887be-78dc-45bf-8997-b712d3de4510',
        userId: 'e837c9f5-247f-445f-bcc3-7d434348336b',
        message: 'Cras in purus eu magna vulputate luctus.',
        timestamp: '2017-01-26T07:53:12Z',
      },
      {
        id: '45eca532-2d63-4519-9fe9-5aa3b81d919a',
        userId: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
        message:
          'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
        timestamp: '2016-10-04T05:22:32Z',
      },
    ];
    const payload = sortByDate(messages);
    expect(payload[0]).toEqual({
      id: '45eca532-2d63-4519-9fe9-5aa3b81d919a',
      userId: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
      message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
      timestamp: '2016-10-04T05:22:32Z',
    });
    expect(payload[1]).toEqual({
      id: '22a887be-78dc-45bf-8997-b712d3de4510',
      userId: 'e837c9f5-247f-445f-bcc3-7d434348336b',
      message: 'Cras in purus eu magna vulputate luctus.',
      timestamp: '2017-01-26T07:53:12Z',
    });
  });
});
