const getValueFromLS = (query: string): boolean | null => JSON.parse(localStorage.getItem(query) || 'null');

export default getValueFromLS