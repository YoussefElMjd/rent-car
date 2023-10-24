import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ComponentStory } from "@storybook/react";
import CarCard from ".";

export default {
  title: "Contents/CarCard",
  component: CarCard,
} as ComponentMeta<typeof CarCard>;

// const Template: ComponentStory<typeof CarCard> = (args) => (
//   <CarCard {...args} />
// );

// export const Test = Template.bind({});

// Test.args = {
//   title: "Class G Mansory",
//   pictures: ["/images/Class_G_Orange_outside_front.jpg"],
//   pricePerDay: "500",
// };
