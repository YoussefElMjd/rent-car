import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ComponentStory } from "@storybook/react";
import Text from ".";
import COLORS from "../../../constant/colors";
import Header from ".";

export default {
  title: "Contents/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Test = Template.bind({});
