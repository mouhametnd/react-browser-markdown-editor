import getValueFromLS from './getValueFromLS';

const getCurrentTheme = () => {
  let isDark = getValueFromLS('isDarkTheme');
  isDark ??= matchMedia('(prefers-color-scheme: dark)').matches;

  return isDark;
};

export default getCurrentTheme;
