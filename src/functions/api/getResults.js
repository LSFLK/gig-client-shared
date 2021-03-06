import {generateSearchQuery} from "../generateSearchQuery";

export async function getResults(searchParam, apiRoute, page = 1, limit = 15) {
    let searchUrl = generateSearchQuery(searchParam, apiRoute);
    searchUrl += '&limit=' + limit + '&page=' + page;
    const response = await fetch(searchUrl, {method: 'GET'});

    if (response?.status !== 200) {
        return null
    }
    return response.json();
}