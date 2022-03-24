import {getAuthHeaders} from "../../auth/Authentication";
import {ApiRoutes, getServerUrl} from "../../routes/Routes";

export function saveEntity(entity, modifiedEntity, navigate, editRoute) {
    let updateUrl = getServerUrl(ApiRoutes.update);
    const requestOptions = {
        headers: getAuthHeaders(),
        method: 'POST',
        body: JSON.stringify({title: entity.title, entity: modifiedEntity})
    };
    fetch(updateUrl, requestOptions).then(results => {
        return results.json();
    }, error => {
        alert("error connecting to server");
    }).then(data => {
        if (data) {
            if (data.status === 200) {
                alert("updated successfully!");
                if (entity.title !== modifiedEntity.title) {
                    navigate(editRoute + modifiedEntity.title)
                }
            }
            else {
                alert("Server error: error saving entity!");
            }
        }
    });
}
