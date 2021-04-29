import { notification } from 'antd';

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const convertTemp = (temp, tempType) => {
  if (tempType === 'Metric') {
    return temp.toFixed() + '°C';
  } else {
    return (temp * 1.8 + 32).toFixed() + '°F';
  }
};

export const openErrorMessage = error => {
  notification.error({
    message: error.name,
    description: error.message,
    placement: 'topRight',
  });
};

export const createImageIcon = icon => {
  const imIcon = `${icon}`.length > 1 ? icon : `0${icon}`;
  return `https://developer.accuweather.com/sites/default/files/${imIcon}-s.png`;
};

export const onlyEnglishLetters = value => {
  const regExp = /[^a-zA-Z\s]+/g;
  return value.replace(regExp, '');
};
