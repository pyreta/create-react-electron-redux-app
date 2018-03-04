import { createStore } from 'redux';

const devToolsEnhancer =
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = state => state;
const initialState = { data: 'stuff' };

export default createStore(
  rootReducer,
  initialState,
  devToolsEnhancer
);
