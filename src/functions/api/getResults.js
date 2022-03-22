export async function getResults(searchUrl, newSearch, result, page, setResults, setPage, limit) {
    searchUrl += '&limit=' + limit + '&page=' + (newSearch ? 1 : (page + 1));
    const response = await fetch(searchUrl, {method: 'GET'});

    if (response?.status !== 200) {
        return null
    }
    const json = await response.json();

    if (json) {
        if (newSearch || result == null) {
            setResults(json);
            setPage(1);
        } else {
            setResults(result.concat(json));
            setPage(page + 1);
        }
    }
    return json
}