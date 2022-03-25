import React from "react";
import 'regenerator-runtime/runtime';

import {highlightText} from "./highlightText";

describe("highlightText", () => {
    test("highlightText", () => {
        expect(highlightText("We live in Sri Lanka. It is an island.", ["Sri Lanka"])).toBe("<span>We live in <span key='0'><mark>Sri Lanka</mark>. It is an island.</span></span>");
    });
});
