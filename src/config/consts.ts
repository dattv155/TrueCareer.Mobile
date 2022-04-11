import type {KeyboardAvoidingViewProps} from 'react-native';
import {Dimensions, Platform} from 'react-native';
import * as DeviceInfo from 'react-native-device-info';

/**
 * Platform constants
 */

export const DEVICE_ID: string = DeviceInfo.getDeviceId();

export const DEVICE_MODEL: string = DeviceInfo.getModel();

export const DEVICE_APP_BUNDLE_ID: string = DeviceInfo.getBundleId();

export const DEVICE_APP_VERSION: string = DeviceInfo.getVersion();

export const DEVICE_APP_BUILD_NUMBER: string = DeviceInfo.getBuildNumber();

export const PLATFORM_IS_ANDROID: boolean = Platform.OS === 'android';

export const PLATFORM_IS_IOS: boolean = Platform.OS === 'ios';

export const PLATFORM: string = PLATFORM_IS_ANDROID ? 'Android' : 'iOS';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

export {SCREEN_WIDTH, SCREEN_HEIGHT};

/**
 * Ratio width / height of banner images
 *
 * @type {number}
 */
export const RATIO: number = 296 / 343;

// ------------------------------------------------------------------------

/**
 * Date time constants
 */

export const KEYBOARD_AVOIDING_VIEW_BEHAVIOR: KeyboardAvoidingViewProps['behavior'] =
  PLATFORM_IS_IOS ? 'padding' : 'height';

export const DEVICE_TIME_FORMAT: string = 'HH:mm:ss';

export const DEVICE_DATE_TIME_FORMAT: string = 'DD-MM-YYYY HH:mm';

export const DATE_FORMAT: string = 'DD/MM/YYYY';

export const DEFAULT_DATE: Date = new Date(0);

/**
 * Environment
 */

// export const APP_SERVER_URL: string = process.env.APP_SERVER_URL!;
export const APP_SERVER_URL: string = 'https://truecareer.thunghiem.club';

if (!APP_SERVER_URL) {
  throw new Error('Missing API_BASE_URL');
}

export const END_REACHED_THRESHOLD: number = 0.5;

//const
export const HEIGHT_HEADER: number = 88;

//10MB
export const MAX_FILE_SIZE: number = 10485760;
