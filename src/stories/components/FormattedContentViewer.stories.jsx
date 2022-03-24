import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import testSearchResults from "../test-data/TestSearchResults"
import { FormattedContentViewer} from '../../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/FormattedContentViewer',
  component: FormattedContentViewer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FormattedContentViewer {...args}/>;

export const Loading = Template.bind({});
Loading.args = {
  key: 3,
  content: null,
};

export const WithData = Template.bind({});
WithData.args = {
    key: 3,
    content: testSearchResults[0].attributes["content"].values,
};
