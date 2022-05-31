import React from 'react';
import testSearchResults from "../test-data/TestSearchResults"
import { FormattedContentViewer} from '../../components';
import TestEntity from '../test-data/TestEntity.json'

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
  childKey: 3,
  content: null,
};

export const WithData = Template.bind({});
WithData.args = {
    childKey: 3,
    content: testSearchResults[0].attributes["content"].values,
};

export const WithShortData = Template.bind({});
WithShortData.args = {
    childKey: 3,
    content: TestEntity.attributes["content"].values,
    highlightTags:["Rathindra Kuruwita", "Dr. Asela Gunawardena"],
    entityRoute:"entity/",
};

export const WithJsonData = Template.bind({});
WithJsonData.args = {
    childKey: 3,
    content: TestEntity.attributes["organizations"].values,
    highlightTags:['National Planning Department','Department of Census and Statistics','Institute of Policy Studies','Sustainable Development Council','Office of Comptroller General','Department of Valuation','Sri Lanka Accounting and Auditing Standard Monitoring Board','Public Utilities Commission of Sri Lanka','Welfare Benefits Board','Public Service Mutual Provident Fund'],
    entityRoute:"entity/",
};

