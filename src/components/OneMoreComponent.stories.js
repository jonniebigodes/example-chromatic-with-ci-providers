import OneMoreComponent from "./OneMoreComponent";

export default {
  title: "OtherComponent",
  component: OneMoreComponent,
};

const Template = (args) => <OneMoreComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  itemA: 33,
  itemB: "Another item",
};
export const WithSixtySeven = Template.bind({});
ExampleStory.args = {
  itemA:67,
  itemB: "Testing more components",
};
