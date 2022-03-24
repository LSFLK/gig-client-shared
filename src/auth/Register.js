import {setAuthToken, setAuthUser, setUserRole} from "./User";
import {ApiRoutes, getServerUrl} from "../routes/Routes";

export async function readerRegister(email, password) {
    if (email === "" || password === "") {
        return {error: "email/password required!"};
    }

    let loginUrl = getServerUrl(ApiRoutes.readerRegister);
    const requestOptions = {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({email: email, password: password})
    };
    let response = await fetch(loginUrl, requestOptions);
    let result = await response.json();
    if (response?.status === 200) {
        setAuthUser(result?.payload?.name);
        setAuthToken(result?.payload?.token);
        setUserRole(result?.payload?.role);
        return {error: null, result: result}
    }
    return {error: "User Registration Failed!", result:result}
}
