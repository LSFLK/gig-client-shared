import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import fetchMock from "jest-fetch-mock"
import RelatedLinkItem from "./RelatedLinkItem";

describe("RelatedLinkItem", () => {
    test("renders the RelatedLinkItem component", () => {
        render(<BrowserRouter><RelatedLinkItem title={"test title"}/></BrowserRouter>);
    });
});