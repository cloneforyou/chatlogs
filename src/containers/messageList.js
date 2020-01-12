import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageItem from './messageItem';

class MessageList extends Component {
  state = {
    id: null,
  };
  handleMouseEnter = id => {
    this.setState({ id });
  };
  handleMouseLeave = () => {
    this.setState({ id: null });
  };

  render() {
    const { messages } = this.props;
    const { id } = this.state;
    return (
      <ul>
        {messages.map(item => {
          const isShow = id === item.id;
          return (
            <MessageItem
              onMouseLeave={this.handleMouseLeave}
              onMouseOver={() => this.handleMouseEnter(item.id)}
              key={item.id}
              isShow={isShow}
              item={item}
            />
          );
        })}
      </ul>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      userId: PropTypes.string,
      message: PropTypes.string,
      timeStamp: PropTypes.string,
      avatar: PropTypes.string,
      email: PropTypes.string,
    })
  ),
};

export default MessageList;
