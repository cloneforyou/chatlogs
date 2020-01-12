import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadMessages } from '../action-creators/messages';
import { sortByDate } from '../utils';
import MessageList from './messageList';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    const { isLoading, errorMessage, messages } = this.props;
    if (isLoading) {
      return <p>Loading....</p>;
    }

    if (!isLoading && errorMessage) {
      return <p>{errorMessage}</p>;
    }

    return (
      <div className="container">
        <MessageList messages={messages} />
      </div>
    );
  }
}

const mapStateToProps = ({ messages }) => ({
  messages: sortByDate(messages.messages),
  isLoading: messages.isLoading,
  errorMessage: messages.errorMessage,
});

Home.defaultProps = {
  errorMessage: 'something went wrong',
};

Home.propTypes = {
  loadMessages: PropTypes.func,
  errorMessage: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  { loadMessages }
)(Home);
