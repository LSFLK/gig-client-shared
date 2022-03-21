const app = require("../../../../../src/routes");        //parent project root directory

export const AppRoutes = app.AppRoutes;

export const ApiRoutes = {
    tokenValidation: 'api/token/validate',
    images: 'images',
    login: 'api/user/login',
    delete: 'api/delete',
    update: 'api/update',
    search: 'api/search?query=',
    entity: 'api/get/',
    status: 'api/status/',
    links: 'api/links/',
    relations: 'api/relations/',
};

export function getServerUrl(url) {
    return process.env.REACT_APP_SERVER_URL + url
}