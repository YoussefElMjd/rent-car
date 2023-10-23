export type Color = string;

export interface Colors {
  Primary: { value: Color };
  Secondary: { value: Color };
  Third: { value: Color };
  Fourth: { value: Color };
}
const COLORS: Colors = {
  Primary: { value: "#000000" },
  Secondary: {
    value: "#D8781F",
  },
  Third: { value: "#FFFFFF" },
  Fourth: { value: "#1a1a1a" },
};
export default COLORS;
