const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getChatMemberMessagesDetails = (messages, members) => {
  return messages.map(message => {
    const member = members.find(member => member.id === message.userId);
    return {
      ...message,
      email: member.email,
      avatar: member.avatar,
    };
  });
};

export const timeFormatter = providedDate => {
  const dateObj = new Date(providedDate);

  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const min = dateObj.getMinutes();
  const date = dateObj.getDate();

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const meridiemFormat = hours > 12 ? 'PM' : 'AM';
  const formattedMin = min > 9 ? min : `0${min}`;
  const monthString = months[month];

  return `${monthString} ${date}, ${year} ${formattedHours}:${formattedMin} ${meridiemFormat}`;
};

export const sortByDate = (items = []) => {
  return items.sort((a, b) => {
    const itemA = new Date(a.timestamp);
    const itemB = new Date(b.timestamp);

    if (itemA < itemB) {
      return -1;
    }

    if (itemA > itemB) {
      return 1;
    }
    return 0;
  });
};
