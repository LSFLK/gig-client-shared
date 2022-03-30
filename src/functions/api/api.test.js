import React from "react";
import 'regenerator-runtime/runtime';
import {createEntity, deleteEntity, getEntity, getGraphStats, getResults, updateEntity, validateToken} from "./index";
import {userLogin} from "../../auth";
import fetchMock from "jest-fetch-mock"
import 'jest-localstorage-mock';
import testEntity from "./testEntity.json"
import testModifiedEntity from "./testModifiedEntity.json"
import {TestServerUrl} from "../../test-config/TestServer";
import {ApiRoutes} from "../../routes";

fetchMock.doMock();
describe("api function test", () => {

    test("validateToken fails with no token", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return validateToken().then(data => {
            expect(data.result).toBe(false);
        });
    });

    test("user login", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return userLogin("someone@gmail.com", "abc123").then(data => {
            expect(data.result.payload.email).toBe("someone@gmail.com");
        });
    });

    test("validateToken after login", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return validateToken().then(data => {
            expect(data.result).toBe(true);
        });
    });

    test("getStats works", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return getGraphStats().then(data => {
            expect(data.status).toBe(200);
        });
    });

    const entityTitle = "Sri Lanka";

    test("getEntity works", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return getEntity(entityTitle).then(data => {
            expect(data.title).toBe(entityTitle);
        });
    });

    test("getResults works", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return getResults(entityTitle, ApiRoutes.search).then(data => {
            expect(data.length).toBe(15);
        });
    });

    test("getEntityLinks works", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return getResults("US to give two aircraft to Sri Lanka free of charge", ApiRoutes.links).then(data => {
            expect(data.length).toBe(12);
        });
    });

    test("getEntityRelations works", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return getResults(entityTitle, ApiRoutes.relations).then(data => {
            expect(data.length).toBe(14);
        });
    });

    test("createEntity works", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return createEntity(testEntity).then(data => {
            expect(data.status).toBe(200);
        });
    });

    test("updateEntity works", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return updateEntity(testEntity, testModifiedEntity).then(data => {
            expect(data.status).toBe(200);
        });
    });

    test("deleteEntity works", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return deleteEntity(testModifiedEntity).then(data => {
            expect(data.status).toBe(200);
        });
    });


});