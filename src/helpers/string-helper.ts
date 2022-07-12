import DeviceInfo from 'react-native-device-info';

export function numberOfLines(title: string, lengthChar?: number) {
  return (
    title?.substr(0, lengthChar ?? 20) +
    (title?.length > (lengthChar ?? 20) ? '...' : '')
  );
}

export function insertSpace(text: string) {
  return text.replace(/([A-Z])/g, ' $1').trim();
}

export function validateUsername(username: string) {
  if (!username) {
    return false;
  }
  if (
    username.match(/^\d{10}$/g) &&
    parseInt(username, 10).toString().length + 1 === username.length
  ) {
    return true;
  }
  return !!username.match(/\S+@\S+\.\S+/);
}

export function isPhoneNumber(username: string) {
  if (!username) {
    return false;
  }
  if (username.length === 12) {
    return username.match(/\+84\d{9}$/g);
  }
  return (
    username.match(/^\d{10}$/g) &&
    parseInt(username, 10).toString().length + 1 === username.length
  );
}

export function isEmail(username: string) {
  if (!username) {
    return false;
  }
  return !!username.match(/\S+@\S+\.\S+/);
}

export function removeCountryCode(phone: string) {
  if (phone.length > 10) {
    const startIndex = phone.length - 9;
    return '0' + phone.substring(startIndex, phone.length);
  }
  return phone;
}

export function validatePassword(password: string) {
  if (password && password.length > 0) {
    const condition = new RegExp(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
    );
    return condition.test(password);
  }
}

export const getDeviceName = (name: string, count: number) => {
  if (count === undefined || count === null) {
    return name;
  }
  if (count < 9) {
    return name + ` 00${count + 1}`;
  }
  if (count >= 9 && count < 99) {
    return name + ` 0${count + 1}`;
  }
  return name + ` ${count + 1}`;
};

export function isBelowIphoneX() {
  const deviceId = DeviceInfo.getDeviceId();
  const regex = new RegExp('iPhone[1-9],[1-9]|iPhone10,[1245]|iPod');
  return regex.test(deviceId);
}
