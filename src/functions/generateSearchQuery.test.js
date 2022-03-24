import React from "react";
import {BrowserRouter} from 'react-router-dom';
import 'regenerator-runtime/runtime';

import {generateSearchQuery} from "./generateSearchQuery";

describe("generateSearchQuery", () => {
    test("generateSearchQuery for plain text search", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        expect(generateSearchQuery("Sri Lanka")).toBe("http://localhost:9000/api/search?query=Sri Lanka");
    });
});

describe("generateSearchQuery", () => {
    test("generateSearchQuery with categories", () => {
        process.env.REACT_APP_SERVER_URL = 'http://localhost:9000/';
        expect(generateSearchQuery("Daily Miror:Sri Lanka")).toBe("http://localhost:9000/api/search?query=Sri Lanka&categories=Daily Miror");
    });
});