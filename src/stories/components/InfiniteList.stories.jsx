import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {InfiniteList, MainContentList} from '../../components';
import {getResults} from "../../functions/api";
import {ApiRoutes} from "../../routes";
import {TestServerUrl} from "../../test-config/TestServer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/InfiniteList',
    component: InfiniteList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BrowserRouter>
    <InfiniteList {...args}
                  list={(results) => <MainContentList listItems={results} elevation={3}/>}/></BrowserRouter>;

export const Loading = Template.bind({});
Loading.args = {
    getResults: () => {
        return null
    },
};

export const NoResults = Template.bind({});
NoResults.args = {
    getResults: () => {
        return []
    }
};

export const WithResults = Template.bind({});
process.env.REACT_APP_SERVER_URL = TestServerUrl;
WithResults.args = {
    getResults: (page = 1, limit = 15) => getResults("Sri Lanka", ApiRoutes.search, page, limit),
};

