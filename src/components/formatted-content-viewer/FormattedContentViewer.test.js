import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import 'regenerator-runtime/runtime';

import FormattedContentViewer from "./FormattedContentViewer";

describe("FormattedContentViewer", () => {
    test("renders the FormattedContentViewer component", () => {
        render(<BrowserRouter><FormattedContentViewer/></BrowserRouter>);
    });
});