const app = require("../../../../src/routes");        //parent project root directory

export const AppRoutes = app.AppRoutes;

export const ApiRoutes = {
    images: 'images',
    tokenValidation: 'api/token/validate',
    login: 'api/user/login',
    status: 'api/status/',
    search: 'api/search?query=',
    entity: 'api/get/',
    links: 'api/links/',
    relations: 'api/relations/',
    add: '/api/add',
    addBatch: '/api/add-batch',
    delete: 'api/delete',
    update: 'api/update',
    terminate: '/api/terminate',
    upload: '/api/upload',
    normalizeLocation: '/api/normalize/location',
    normalizeName: '/api/normalize/name',
    normalize: '/api/normalize',
    userRegister: '/api/user/register',
    readerRegister: '/api/reader/register',
    publishTwitter: '/api/publish/twitter'
};

export function getServerUrl(url) {
    return process.env.REACT_APP_SERVER_URL + url
}