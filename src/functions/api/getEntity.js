import {ApiRoutes, getServerUrl} from "../../routes/Routes";

export async function getEntity(entityTitle, callback) {
    let response = await fetch(getServerUrl(ApiRoutes.entity) + entityTitle, {method: 'GET'});

    if (response?.status !== 200) {
        return null
    }
    let data = await response.json();
    callback(data);
    return data
}

