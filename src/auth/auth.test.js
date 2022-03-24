import React from "react";
import {BrowserRouter} from 'react-router-dom';
import 'regenerator-runtime/runtime';
import fetchMock from "jest-fetch-mock"
import 'jest-localstorage-mock';
import {readerRegister} from "./Register";

fetchMock.doMock();
describe("validateToken", () => {

    test("register reader works", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        let newEmail = "newemail7@gmail.com";
        return readerRegister(newEmail, "abc123").then(data => {
            console.log(data);
            expect(data?.result?.email).toBe(newEmail);
        });
    });


});