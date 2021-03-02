import store from 'stores';
import {
  setInputModeAction,
  setInputRawDataAction,
  setInputConfidenceThresholdAction,
  setInputOutputCroppedImageAction,
  setInputOutputVisualizedImageAction,
} from './actions';

export const setInputMode = (
  inputMode: string,
) => store.dispatch(setInputModeAction(inputMode));

export const setInputRawData = (
  rawData: string,
) => store.dispatch(setInputRawDataAction(rawData));

export const setInputConfidenceThreshold = (
  confidenceThreshold: number,
) => store.dispatch(setInputConfidenceThresholdAction(confidenceThreshold));

export const setInputOutputCroppedImage = (
  inputOutputCroppedImage: boolean,
) => store.dispatch(setInputOutputCroppedImageAction(inputOutputCroppedImage));

export const setInputOutputVisualizedImage = (
  inputOutputVisualizedImage: boolean,
) => store.dispatch(setInputOutputVisualizedImageAction(inputOutputVisualizedImage));
