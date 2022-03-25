import {ApiRoutes, getServerUrl} from "../../routes/Routes";
import {getAuthHeaders} from "../../auth/Authentication";

export async function deleteEntity(entity) {
    let deleteUrl = getServerUrl(ApiRoutes.delete);
    const requestOptions = {
        headers: getAuthHeaders(),
        method: 'POST',
        body: JSON.stringify({title: entity.title})
    };
    let response = await fetch(deleteUrl, requestOptions);
    return response.json();
}
