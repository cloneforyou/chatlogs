import React from 'react';
import PropTypes from 'prop-types';
import { timeFormatter } from '../utils';

const MessageItem = ({ item, avatar, isShow, ...props }) => {
  return (
    <li className="list-item" {...props}>
      <img src={item.avatar || avatar} />
      <div>
        <p>{item.message}</p>
        <time>{timeFormatter(item.timestamp)}</time>
        {isShow && <div className="list-item__email">{item.email}</div>}
      </div>
    </li>
  );
};

MessageItem.defaultProps = {
  avatar: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
};

MessageItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string,
    timestamp: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.string,
    userId: PropTypes.string,
  }).isRequired,
  isShow: PropTypes.bool.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default MessageItem;
