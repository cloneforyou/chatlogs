import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export default initialState => {
  const middlewares = [thunk];
  return configureStore(middlewares)(initialState);
};
