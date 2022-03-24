import React from "react";
import { render } from "@testing-library/react";

import RelatedLinkList from "./RelatedLinkList";

describe("RelatedLinkList", () => {
    test("renders the RelatedLinkList component", () => {
        render(<RelatedLinkList />);
    });
});