import messagesReducer, { initialState } from './messages';
import createStore from '../testing/testingStore';
import {
  MESSAGES_LOADED,
  MESSAGES_FAILED_TO_LOAD,
  MESSAGES_LOADING,
} from '../action-creators/action-types';

import {
  messagesLoaded,
  messagesFailedToLoad,
  messagesLoading,
  loadMessages,
} from '../action-creators/messages';

describe('messages reducer', () => {
  const messagesPayload = [
    {
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z',
    },
    {
      id: 'b03569ae-ccbf-4975-8040-4daba638b407',
      userId: '16373df5-da0a-4074-8295-f916b94269f4',
      message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
      timestamp: '2016-11-09T05:04:58Z',
    },
  ];

  it(`it should start ${MESSAGES_LOADING}`, () => {
    const expectedResult = {
      isLoading: true,
      errorMessage: '',
      messages: [],
    };
    const result = messagesReducer(initialState, messagesLoading());
    expect(result).toEqual(expectedResult);
  });

  it(`it should set messages on ${MESSAGES_LOADED}`, () => {
    const expectedResult = {
      isLoading: false,
      errorMessage: '',
      messages: messagesPayload,
    };

    const currentState = messagesReducer(
      initialState,
      messagesLoaded(messagesPayload)
    );
    expect(currentState).toEqual(expectedResult);
  });

  it(`it should set errorMessage on ${MESSAGES_FAILED_TO_LOAD}`, () => {
    const expectedResult = {
      isLoading: false,
      errorMessage: 'something went wrong',
      messages: [],
    };

    const currentState = messagesReducer(
      initialState,
      messagesFailedToLoad('something went wrong')
    );
    expect(currentState).toEqual(expectedResult);
  });

  it('should execute fetch messages', async () => {
    const store = createStore(initialState);
    await store.dispatch(loadMessages());
    expect(store.getActions()[0]).toEqual(messagesLoading());
  });
});
