import {generateSearchQuery} from "../generateSearchQuery";

export async function getResults(searchParam, newSearch, result, page, setResults, setPage, limit) {
    let searchUrl = generateSearchQuery(searchParam);
    searchUrl += '&limit=' + limit + '&page=' + (newSearch ? 1 : (page + 1));
    const response = await fetch(searchUrl, {method: 'GET'});

    if (response?.status !== 200) {
        return null
    }
    const json = await response.json();

    if (json) {
        if (newSearch) {
            setResults(json);
            setPage(1);
            return json
        } else {
            setResults(result.concat(json));
            setPage(page + 1);
            return json
        }
    }
    setResults([]);
    setPage(1);
    return json
}