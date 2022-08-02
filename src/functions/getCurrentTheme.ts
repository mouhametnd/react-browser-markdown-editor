import getDataFromLS from './getDataFromLS';

const getCurrentTheme = () => {
  let isDark = getDataFromLS<boolean>('isDarkTheme');
  isDark ??= matchMedia('(prefers-color-scheme: dark)').matches;

  return isDark;
};

export default getCurrentTheme;
