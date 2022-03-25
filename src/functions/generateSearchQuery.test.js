import React from "react";
import 'regenerator-runtime/runtime';

import {generateSearchQuery} from "./generateSearchQuery";
import {TestServerUrl} from "../test-config/TestServer";

describe("generateSearchQuery", () => {
    test("generateSearchQuery for plain text search", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        expect(generateSearchQuery("Sri Lanka")).toBe("http://localhost:9000/api/search?query=Sri Lanka");
    });
});

describe("generateSearchQuery", () => {
    test("generateSearchQuery with categories", () => {
        process.env.REACT_APP_SERVER_URL = TestServerUrl;
        expect(generateSearchQuery("Daily Miror:Sri Lanka")).toBe("http://localhost:9000/api/search?query=Sri Lanka&categories=Daily Miror");
    });
});