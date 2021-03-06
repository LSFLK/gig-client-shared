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
    argTypes: {
        label: {
            name: 'label',
            type: { name: 'string', required: false },
            defaultValue: 'Hello',
            description: 'demo description',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Hello' },
            },
            control: {
                type: 'text'
            }
        }
    },
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
    searchKey:"Sri Lanka",
    getResults: (page = 1, limit = 15) => getResults("Sri Lanka", ApiRoutes.search, page, limit),
};

