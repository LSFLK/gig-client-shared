import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import 'regenerator-runtime/runtime';

import InfiniteList from "./InfiniteList";
import {MainContentList} from "../index";

describe("InfiniteList", () => {
    test("renders the InfiniteList component", () => {
        render(<BrowserRouter><InfiniteList list={(results) => <MainContentList listItems={results} elevation={3}/>}/></BrowserRouter>);
    });
});