import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import 'regenerator-runtime/runtime';

import Routes from "./Routes";

describe("Routes", () => {
    test("renders the ValueTypes constants", () => {
        render(Routes);
    });
});