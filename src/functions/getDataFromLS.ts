const getDataFromLS = <T>(query: 'isDarkTheme' | 'document'): T | null =>
  JSON.parse(localStorage.getItem(query) || 'null');

export default getDataFromLS;
