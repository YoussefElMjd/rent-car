import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ComponentStory } from "@storybook/react";
import Text from ".";
import COLORS from "../../../constant/colors";

export default {
  title: "Contents/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Title = Template.bind({});

Title.args = {
  children: "RentCarEmirats",
  color: COLORS.Secondary.value,
  fontSize: "2.25rem",
  fontWeight: "700",
};
