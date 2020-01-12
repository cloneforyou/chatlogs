import { getMessages, getMembers } from '../data';
import { getChatMemberMessagesDetails } from '../utils/index';
import {
  MESSAGES_LOADED,
  MESSAGES_LOADING,
  MESSAGES_FAILED_TO_LOAD,
} from './action-types';

export const messagesLoading = () => ({
  type: MESSAGES_LOADING,
});

export const messagesFailedToLoad = payload => ({
  type: MESSAGES_FAILED_TO_LOAD,
  payload,
});

export const messagesLoaded = payload => ({
  type: MESSAGES_LOADED,
  payload,
});

export const loadMessages = () => async dispatch => {
  dispatch(messagesLoading());
  try {
    const [messages, members] = await Promise.all([
      getMessages(),
      getMembers(),
    ]);

    const memberMessages = getChatMemberMessagesDetails(messages, members);

    dispatch(messagesLoaded(memberMessages));
  } catch (err) {
    dispatch(messagesFailedToLoad());
  }
};
