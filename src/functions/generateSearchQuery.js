import {getServerUrl} from "../routes/Routes";

export function generateSearchQuery(searchParam, apiRoute) {
    let searchUrl = getServerUrl(apiRoute);
    if (searchParam.includes(":")) {
        let searchArray = searchParam.split(":", 2);
        searchUrl += encodeURIComponent(searchArray[1]) + '&categories=' + encodeURIComponent(searchArray[0]);
    } else {
        searchUrl += encodeURIComponent(searchParam);
    }
    return searchUrl
}
