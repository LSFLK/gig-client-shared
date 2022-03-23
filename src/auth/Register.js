import {setAuthToken, setAuthUser, setUserRole} from "./User";
import {ApiRoutes, getServerUrl} from "../routes/Routes";

export async function readerRegister(username, password) {
    if (username === "" || password === "") {
        return {error: "username/password required!"};
    }

    let loginUrl = getServerUrl(ApiRoutes.readerRegister);
    const requestOptions = {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({username: username, password: password})
    };
    let response = await fetch(loginUrl, requestOptions);
    let result = await response.json();
    if (result?.status === 200) {
        setAuthUser(result?.payload?.name);
        setAuthToken(result?.payload?.token);
        setUserRole(result?.payload?.role);
        return {error: null, result: "success"}
    }
    return {error: "User Registration Failed!", result: "error"}
}
