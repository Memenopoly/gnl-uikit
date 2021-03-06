import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  // primary: "#aa8929",
  primary: "#246103",
  primaryBright: "#318504",
  primaryDark: "#768a11",
  //secondary: "#7645D9",
  secondary: "#be6aff",
  success: "#89ba80",
  warning: "#FFB237",
  cta: "#23e233",
};

export const brandColors = {
  binance: "#F0B90B",
};

/* export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};
*/

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  //background: "#e0eaea",
  background: "#1d1e21",
  backgroundDisabled: "#b3bbc3",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#d3efff",
  tertiary: "#EFF4F5",
  text: "#142e44",
  textDisabled: "#BDC2C4",
  textSubtle: "#809dba",
  borderColor: "#c2c4c5",
  card: "#afafaf",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#bee01b",
  background: "#1d1e21",
  backgroundDisabled: "#244007",
  contrast: "#FFFFFF",
  invertedContrast: "#172613",
  input: "#20261d",
  primaryDark: "#0d9600",
  tertiary: "#c2d7b1",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "rgba(0,50,0,0.5)",
  card: "#246103",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
