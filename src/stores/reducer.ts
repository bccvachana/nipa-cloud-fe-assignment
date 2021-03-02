import { ActionType } from 'typesafe-actions';
import { INPUT_MODE } from 'constant';
import { IAppStore } from './types';
import * as actions from './actions';
import { ACTIONS_CONSTANT } from './constants';

export type TAppActions = ActionType<typeof actions>;

const initState: IAppStore = {
  inputMode: INPUT_MODE.FILE,
  input: {
    rawData: '',
    confidenceThreshold: 1,
    outputCroppedImage: false,
    outputVisualizedImage: false,
  },
};

export const appReducer = (
  state: IAppStore = initState,
  action: TAppActions,
): IAppStore => {
  switch (action.type) {
    case ACTIONS_CONSTANT.SET_INPUT_MODE: {
      return {
        ...state,
        inputMode: action.payload as string,
      };
    }
    case ACTIONS_CONSTANT.SET_INPUT_RAW_DATA: {
      return {
        ...state,
        input: {
          ...state.input,
          rawData: action.payload as string,
        },
      };
    }
    case ACTIONS_CONSTANT.SET_INPUT_CONFIDENCE_THRESHOLD: {
      return {
        ...state,
        input: {
          ...state.input,
          confidenceThreshold: action.payload as number,
        },
      };
    }
    case ACTIONS_CONSTANT.SET_INPUT_OUTPUT_CROPPED_IMAGE: {
      return {
        ...state,
        input: {
          ...state.input,
          outputCroppedImage: action.payload as boolean,
        },
      };
    }
    case ACTIONS_CONSTANT.SET_INPUT_OUTPUT_VISUALIZED_IMAGE: {
      return {
        ...state,
        input: {
          ...state.input,
          outputVisualizedImage: action.payload as boolean,
        },
      };
    }
    default:
      return state;
  }
};
