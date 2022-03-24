import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import { MainContentList, InfiniteList} from '../../components';
import testSearchResults from "../test-data/TestSearchResults"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/InfiniteList',
  component: InfiniteList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BrowserRouter><InfiniteList {...args}
                                         list={<MainContentList {...args}/>}
/></BrowserRouter>;

export const Loading = Template.bind({});
Loading.args = {
  elevation: 3,
  listItems: null,
};

export const NoResults = Template.bind({});
NoResults.args = {
    elevation: 3,
    listItems: [],
};

export const WithResults = Template.bind({});
WithResults.args = {
    elevation: 3,
    listItems: testSearchResults,
};

