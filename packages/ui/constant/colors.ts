export type Color = string;

export interface Colors {
  Primary: { value: Color };
  Secondary: { value: Color };
  Third: { value: Color };
}
const COLORS: Colors = {
  Primary: { value: "#000000" },
  Secondary: {
    value: "#D8781F",
  },
  Third: { value: "#FFFFFF" },
};
export default COLORS;
