import React from "react";
import 'regenerator-runtime/runtime';
import fetchMock from "jest-fetch-mock"
import 'jest-localstorage-mock';
import {readerRegister} from "./Register";
import {getAuthHeaders, userIsEditAuthorized} from "./Authentication";
import {userLogin} from "./Login";
import {TestServerUrl} from "../test-config/TestServer";

fetchMock.doMock();
describe("validateToken", () => {

    test("getAuthHeaders works", () => {
        getAuthHeaders()
    });

    test("admin user login", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return userLogin("someone@gmail.com", "abc123").then(data => {
            expect(data.result.payload.email).toBe("someone@gmail.com");
        });
    });

    test("authorize user works for admin", () => {
        expect(userIsEditAuthorized()).toBe(true);
    });

    test("reader user login", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        return userLogin("someone3@gmail.com", "abc123").then(data => {
            expect(data.result.payload.email).toBe("someone3@gmail.com");
        });
    });

    test("authorize user false for reader", () => {
        expect(userIsEditAuthorized()).toBe(false);
    });

    test("register reader works", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        let newEmail = "newemail" + new Date() + "@gmail.com";
        return readerRegister(newEmail, "abc123").then(data => {
            expect(data?.result?.payload?.email).toBe(newEmail);
        });
    });


});