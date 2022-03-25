import {ApiRoutes, getServerUrl} from "../../routes/Routes";

export async function getEntity(entityTitle) {
    let response = await fetch(getServerUrl(ApiRoutes.entity) + entityTitle, {method: 'GET'});

    if (response?.status !== 200) {
        return null
    }
    return response.json();
}

