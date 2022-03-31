import {ApiRoutes, getServerUrl} from "../routes/Routes";

export function generateSearchQuery(searchParam, apiRoute) {
    let searchUrl = getServerUrl(apiRoute);

    if (apiRoute === ApiRoutes.search) {
        if (searchParam.includes(":")) {
            let searchArray = searchParam.split(":", 2);
            return searchUrl + encodeURIComponent(searchArray[1]) + '&categories=' + encodeURIComponent(searchArray[0]);
        }
        return searchUrl + encodeURIComponent(searchParam);
    }

    return searchUrl + encodeURIComponent(searchParam) + '?'
}
