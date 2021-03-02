import {
  createContext, FC, ReactNode, useContext, useReducer,
} from 'react';
import { INPUT_MODE } from 'constant';
import { ICommonObject } from 'types/common';

interface IAppState {
  inputMode: string;
  input: {
    rawData: string,
    confidenceThreshold: number,
    outputCroppedImage: boolean,
    outputVisualizedImage: boolean;
  };
}

interface IAppProviderProps {
  children: ReactNode;
}

const defaultValue: IAppState = {
  inputMode: INPUT_MODE.FILE,
  input: {
    rawData: '',
    confidenceThreshold: 1,
    outputCroppedImage: false,
    outputVisualizedImage: false,
  },
};

export const AppContext = createContext({});

const appReducer = (state: IAppState, action: ICommonObject) => {
  switch (action.type) {
    case 'setRawData':
      return {
        ...state,
        input: {
          ...state.input,
          rawData: action.payload,
        },
      };
    case 'setConfidenceThreshold':
      return {
        ...state,
        input: {
          ...state.input,
          confidenceThreshold: action.payload,
        },
      };
    case 'setOutputCroppedImage':
      return {
        ...state,
        input: {
          ...state.input,
          confidenceThreshold: action.payload,
        },
      };
    default: return state;
  }
};

export const AppProvider: FC<IAppProviderProps> = ({
  children,
}) => {
  const appContextValue = useReducer(appReducer, defaultValue);

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
