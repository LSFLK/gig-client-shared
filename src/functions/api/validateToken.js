import {ApiRoutes, getServerUrl} from "../../routes/Routes";
import {getAuthHeaders, logout} from "../../auth/index";

export async function validateToken(setUserState = () => {
    console.log("setUser function is not included")
}) {

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

    logout(setUserState);
    console.log("token validation error! logging out.");
    return {error: "token validation error! logging out.", result: false}
}
