import React from "react";
import 'regenerator-runtime/runtime';

import {highlightText} from "./highlightText";

describe("highlightText", () => {
    test("highlightText", () => {
        expect(highlightText("We live in Sri Lanka. It is an island.","/entity/", ["Sri Lanka"])).
        toBe("<span>We live in <span key='0'><a class='highlighted-link' href='/entity/Sri%20Lanka'><span>Sri Lanka</span></a>. It is an island.</span></span>");
    });
});
