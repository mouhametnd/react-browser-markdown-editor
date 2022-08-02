const getDataFromLS = <T>(query: string): T | null => JSON.parse(localStorage.getItem(query) || 'null');


export default getDataFromLS;
