import {ApiRoutes, getServerUrl} from "../../routes/Routes";

export async function getGraphStats() {
    const result = await fetch(getServerUrl(ApiRoutes.status), {method: 'GET'});
    if (result.status !== 200) {
        return null
    }
    return result.json();
}
