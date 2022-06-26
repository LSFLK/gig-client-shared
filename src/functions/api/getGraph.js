import {ApiRoutes, getServerUrl} from "../../routes/Routes";

export async function getGraph() {
    const result = await fetch(getServerUrl(ApiRoutes.graph), {method: 'GET'});
    if (result.status !== 200) {
        return null
    }
    return result.json();
}
