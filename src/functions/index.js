export * from "./api/index"
export {generateSearchQuery} from "./generateSearchQuery"

export function getServerUrl(url) {
    console.log(process.env.REACT_APP_SERVER_URL);
    return process.env.REACT_APP_SERVER_URL + url
}