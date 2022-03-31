import {AuthStore} from "./AuthStore";

const authStorage = localStorage;

export function getAuthUser() {
    return authStorage.getItem(AuthStore.user)
}

export function setAuthUser(user) {
    authStorage.setItem(AuthStore.user, user)
}

export function getUserRole() {
    return authStorage.getItem(AuthStore.role)
}

export function setUserRole(role) {
    authStorage.setItem(AuthStore.role, role)
}

export function getAuthToken() {
    return authStorage.getItem(AuthStore.token)
}

export function setAuthToken(token) {
    authStorage.setItem(AuthStore.token, token)
}

export function clearTokens() {
    for (const [key, value] of Object.entries(AuthStore)) {
        console.log("removing auth data:", key);
        authStorage.removeItem(value);
    }
}
