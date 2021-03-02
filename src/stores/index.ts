import { combineReducers, createStore } from 'redux';
import { appReducer } from './reducer';
import { IAppStore } from './types';

export interface IRootStore {
  app: IAppStore;
}

const stores = createStore<IRootStore, any, any, any>(
  combineReducers({
    app: appReducer,
  }),
);

export default stores;
