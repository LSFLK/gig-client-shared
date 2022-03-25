import {ApiRoutes, getServerUrl} from "../../routes/Routes";
import {getAuthHeaders} from "../../auth/Authentication";

export async function createEntity(entity) {
    let addUrl = getServerUrl(ApiRoutes.add);
    const requestOptions = {
        headers: getAuthHeaders(),
        method: 'POST',
        body: JSON.stringify(entity)
    };
    let response = await fetch(addUrl, requestOptions);
    return response.json();
}
