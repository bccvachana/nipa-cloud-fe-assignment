export interface IAppStore {
  inputMode: string;
  input: {
    rawData: string,
    confidenceThreshold: number,
    outputCroppedImage: boolean,
    outputVisualizedImage: boolean;
  };
}
