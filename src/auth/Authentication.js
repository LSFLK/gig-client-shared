import {getAuthToken, getUserRole} from "./User";
import {UserRoles} from "./AuthStore";

export function getAuthHeaders() {
    const token = getAuthToken();
    return {'Authorization': 'Bearer ' + (token ? token : ''), 'Content-Type': 'application/json'};
}

export function userIsEditAuthorized() {
    const currentUserRole = getUserRole();
    return currentUserRole === UserRoles.Admin || currentUserRole === UserRoles.Editor;
}