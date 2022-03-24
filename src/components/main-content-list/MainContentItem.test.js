import React from "react";
import { render } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'

import MainContentItem from "./MainContentItem";

describe("MainContentItem", () => {
    test("renders the MainContentItem component", () => {
        render(<BrowserRouter><MainContentItem /></BrowserRouter>);
    });
});