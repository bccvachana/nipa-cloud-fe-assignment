import { action } from 'typesafe-actions';
import { ACTIONS_CONSTANT } from './constants';

export const setInputModeAction = (
  inputMode: string,
) => action(ACTIONS_CONSTANT.SET_INPUT_MODE, inputMode);

export const setInputRawDataAction = (
  rawData: string,
) => action(ACTIONS_CONSTANT.SET_INPUT_RAW_DATA, rawData);

export const setInputConfidenceThresholdAction = (
  confidenceThreshold: number,
) => action(ACTIONS_CONSTANT.SET_INPUT_CONFIDENCE_THRESHOLD, confidenceThreshold);

export const setInputOutputCroppedImageAction = (
  inputOutputCroppedImage: boolean,
) => action(ACTIONS_CONSTANT.SET_INPUT_OUTPUT_CROPPED_IMAGE, inputOutputCroppedImage);

export const setInputOutputVisualizedImageAction = (
  inputOutputVisualizedImage: boolean,
) => action(ACTIONS_CONSTANT.SET_INPUT_OUTPUT_VISUALIZED_IMAGE, inputOutputVisualizedImage);
