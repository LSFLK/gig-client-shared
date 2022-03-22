const app = require("../../../../../src/routes");        //parent project root directory

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
    add_batch: '/api/add-batch',
    delete: 'api/delete',
    update: 'api/update',
    terminate: '/api/terminate',
    upload: '/api/upload',
    normalize_location: '/api/normalize/location',
    normalize_name: '/api/normalize/name',
    normalize: '/api/normalize',
    user_register: '/api/user/register',
    reader_register: '/api/reader/register',
    publish_twitter: '/api/publish/twitter'

};

export function getServerUrl(url) {
    return process.env.REACT_APP_SERVER_URL + url
}