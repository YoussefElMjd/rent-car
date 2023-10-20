import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ComponentStory } from "@storybook/react";
import COLORS from "../../../constant/colors";
import Button from ".";
import Text from "../../content/text";

export default {
  title: "Inputs/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Login = Template.bind({});

Login.args = {
  children: (
    <Text color={COLORS.Third.value} fontSize={"14px"}>
      Login
    </Text>
  ),
  bgColor: COLORS.Secondary.value,
  w: "82px",
  h: "38px",
  borderRadius: "5px",
  _hover: {
    filter: "saturate(200%)",
  },
};
