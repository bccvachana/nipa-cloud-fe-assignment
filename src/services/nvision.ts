import nvision from '@nipacloud/nvision';
import config from 'config';

export const objectDetectionService = nvision.objectDetection({
  apiKey: config.API_KEY,
});
