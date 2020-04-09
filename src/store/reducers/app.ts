import { Reducer } from 'redux';
import {
  UPDATE_PAGE,
  UPDATE_OFFLINE,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  UPDATE_MENU_STATE
} from '../actions/app';
import { RootAction } from '../store';

export interface AppState {
  page: string;
  offline: boolean;
  menuOpened: boolean;
  snackbarOpened: boolean;
}

const INITIAL_STATE: AppState = {
  page: '',
  offline: false,
  menuOpened: false,
  snackbarOpened: false,
};

const app: Reducer<AppState, RootAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page
      };
    case UPDATE_OFFLINE:
      return {
        ...state,
        offline: action.offline
      };
    case UPDATE_MENU_STATE:
      return {
        ...state,
        menuOpened: action.opened
      };
    case OPEN_SNACKBAR:
      return {
        ...state,
        snackbarOpened: true
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarOpened: false
      };
    default:
      return state;
  }
};

export default app;
