const setValueToLS = (query: string, value: unknown) => localStorage.setItem(query, JSON.stringify(value));

export default setValueToLS;
