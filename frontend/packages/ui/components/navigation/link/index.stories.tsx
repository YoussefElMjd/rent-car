import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ComponentStory } from "@storybook/react";
import Link from ".";
import COLORS from "../../../constant/colors";

export default {
  title: "Navigation/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Home = Template.bind({});

Home.args = {
  children: "Home",
  isExternal: true,
  href: "https://github.com/",
  color: COLORS.Primary.value,
  hoverFilter: "opacity(80%)",
};
