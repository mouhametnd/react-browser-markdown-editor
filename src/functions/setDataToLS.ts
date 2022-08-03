const setDataToLS = (query: 'isDarkTheme' | 'document', value: unknown) => localStorage.setItem(query, JSON.stringify(value));

export default setDataToLS;
