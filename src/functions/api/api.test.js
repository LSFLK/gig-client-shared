import React from "react";
import 'regenerator-runtime/runtime';
import {createEntity, deleteEntity, getEntity, getGraphStats, getResults, updateEntity, validateToken} from "./index";
import {userLogin} from "../../auth";
import fetchMock from "jest-fetch-mock"
import 'jest-localstorage-mock';
import testEntity from "./testEntity.json"
import testModifiedEntity from "./testModifiedEntity.json"
import {TestServerUrl} from "../../test-config/TestServer";

fetchMock.doMock();
describe("validateToken", () => {
    const setMockState=()=>{console.log("this is a mock function")};
    test("validateToken fails with no token", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return validateToken(setMockState).then(data => {
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
        return validateToken(setMockState).then(data => {
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
        return getEntity(entityTitle, setMockState).then(data => {
            expect(data.title).toBe(entityTitle);
        });
    });

    test("getResults works", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return getResults(entityTitle, true, [], 1, setMockState, setMockState, 15).then(data => {
            expect(data.length).toBe(15);
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