export * from "./api/index"
export {generateSearchQuery} from "./generateSearchQuery"

export function getServerUrl(url) {
    return process.env.REACT_APP_SERVER_URL + url
}