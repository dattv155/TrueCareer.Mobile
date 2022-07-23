import type {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Repository} from 'react3l-common';
import {APP_SERVER_URL, PLATFORM_OS_NAME} from 'src/config/consts';
import {Platform} from 'react-native';
import {getBundleId, getDeviceId, getModel} from 'react-native-device-info';

const ContentType = 'Content-Type';

export const httpConfig: AxiosRequestConfig = {
  baseURL: APP_SERVER_URL,
  headers: {
    [ContentType]: 'application/json',
  },
};

Repository.requestInterceptor = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  config.headers = {
    ...config.headers,
    'X-Requested-By': PLATFORM_OS_NAME,
    'X-Device-Id': getDeviceId(),
    'X-Device-Model': getModel(),
    'X-Bundle-Id': getBundleId(),
    'X-Device-OS': PLATFORM_OS_NAME,
    'X-Device-OS-Version': Platform.Version,
    'X-Timezone': (0 - new Date().getTimezoneOffset()) / 60,
  };
  return config;
};

Repository.responseInterceptor = async (
  response: AxiosResponse,
): Promise<AxiosResponse> => {
  return response;
};

Repository.errorInterceptor = async (error: AxiosError): Promise<void> => {
  if (error?.response?.status) {
    switch (error?.response?.status) {
      case 502:
        break;

      case 500:
        break;

      case 401:
        break;

      default:
        break;
    }
  }
  throw error;
};
