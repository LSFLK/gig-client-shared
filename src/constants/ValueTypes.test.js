import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import 'regenerator-runtime/runtime';

import ValueTypes from "./ValueTypes";

describe("ValueTypes", () => {
    test("renders the ValueTypes constants", () => {
        render(ValueTypes);
    });
});