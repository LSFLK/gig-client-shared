import {ApiRoutes, getServerUrl} from "../../routes/Routes";
import {getAuthHeaders, clearTokens} from "../../auth/index";

export async function validateToken() {

    let loginUrl = getServerUrl(ApiRoutes.tokenValidation);

    const requestOptions = {
        headers: getAuthHeaders(),
        method: 'GET',
    };
    let response = await fetch(loginUrl, requestOptions);
    let data = await response.json();
    console.log("validating token", data);
    if (data.status === 200) {
        console.log("token is valid.");
        return {error: null, result: true}
    }

    clearTokens();
    console.log("token validation error! logging out.");
    return {error: "token validation error! logging out.", result: false}
}
