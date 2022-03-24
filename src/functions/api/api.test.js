import React from "react";
import {BrowserRouter} from 'react-router-dom';
import 'regenerator-runtime/runtime';
import {createEntity, deleteEntity, getEntity, getGraphStats, getResults, updateEntity, validateToken} from "./index";
import {userLogin} from "../../auth";
import fetchMock from "jest-fetch-mock"
import 'jest-localstorage-mock';
import testEntity from "./testEntity.json"
import testModifiedEntity from "./testModifiedEntity.json"

fetchMock.doMock();
describe("validateToken", () => {
    const setMockState=()=>{};
    test("validateToken fails with no token", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        return validateToken(setMockState).then(data => {
            expect(data.result).toBe(false);
        });
    });

    test("user login", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        return userLogin("someone@gmail.com", "abc123").then(data => {
            expect(data.result.payload.email).toBe("someone@gmail.com");
        });
    });

    test("validateToken after login", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        return validateToken(setMockState).then(data => {
            expect(data.result).toBe(true);
        });
    });

    test("getStats works", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        return getGraphStats().then(data => {
            expect(data.status).toBe(200);
        });
    });

    const entityTitle = "Sri Lanka";

    test("getEntity works", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        return getEntity(entityTitle, setMockState).then(data => {
            expect(data.title).toBe(entityTitle);
        });
    });

    test("getResults works", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        const entityTitle = "Sri Lanka";
        return getResults(entityTitle, true, [], 1, setMockState, setMockState, 15).then(data => {
            expect(data.length).toBe(15);
        });
    });

    test("createEntity works", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        return createEntity(testEntity).then(data => {
            expect(data.status).toBe(200);
        });
    });

    test("updateEntity works", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        return updateEntity(testEntity, testModifiedEntity).then(data => {
            expect(data.status).toBe(200);
        });
    });

    test("deleteEntity works", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        return deleteEntity(testModifiedEntity).then(data => {
            expect(data.status).toBe(200);
        });
    });


});