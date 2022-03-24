import {getAuthHeaders} from "../../auth/Authentication";
import {ApiRoutes, getServerUrl} from "../../routes/Routes";

export async function updateEntity(entity, modifiedEntity) {
    let updateUrl = getServerUrl(ApiRoutes.update);
    const requestOptions = {
        headers: getAuthHeaders(),
        method: 'POST',
        body: JSON.stringify({title: entity.title, entity: modifiedEntity})
    };
    let response = await fetch(updateUrl, requestOptions);
    return response.json();
}
