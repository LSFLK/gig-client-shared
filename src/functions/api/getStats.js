import {ApiRoutes} from "../../config";
import {getServerUrl} from "../index";

export async function getGraphStats() {
    const result = await fetch(getServerUrl(ApiRoutes.status), {method: 'GET'});
    if (result.status === 200) {
        return result.json();
    } else {
        return null
    }
}
