import React from "react";
import {BrowserRouter} from 'react-router-dom';
import 'regenerator-runtime/runtime';
import fetchMock from "jest-fetch-mock"
import 'jest-localstorage-mock';
import {readerRegister} from "./Register";
import {getAuthHeaders, userIsEditAuthorized} from "./Authentication";
import {userLogin} from "./Login";
import {render} from "@testing-library/react";
import FormattedContentViewer from "../components/formatted-content-viewer/FormattedContentViewer";
import {ProtectedRoute} from "./ProtectedRoute";

fetchMock.doMock();
describe("validateToken", () => {

    test("getAuthHeaders works", () => {
        getAuthHeaders()
    });

    test("admin user login", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        return userLogin("someone@gmail.com", "abc123").then(data => {
            expect(data.result.payload.email).toBe("someone@gmail.com");
        });
    });

    test("authorize user works for admin", () => {
        expect(userIsEditAuthorized()).toBe(true);
    });

    test("reader user login", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        return userLogin("someone3@gmail.com", "abc123").then(data => {
            expect(data.result.payload.email).toBe("someone3@gmail.com");
        });
    });

    test("authorize user false for reader", () => {
        expect(userIsEditAuthorized()).toBe(false);
    });

    test("register reader works", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        let newEmail = "newemail" + new Date() + "@gmail.com";
        return readerRegister(newEmail, "abc123").then(data => {
            expect(data?.result?.email).toBe(newEmail);
        });
    });


});