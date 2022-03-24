import React from "react";
import { render } from "@testing-library/react";

import MainContentList from "./MainContentList";

describe("MainContentList", () => {
    test("renders the MainContentList component", () => {
        render(<MainContentList />);
    });
});