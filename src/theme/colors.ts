import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  // primary: "#aa8929",
  primary: "#47b150",
  primaryBright: "#03b500",
  primaryDark: "#235828",
  secondary: "#7645D9",
  success: "#809dba",
  warning: "#FFB237",
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
  background: "#e0eaea",
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
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#235828",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  // card: "#27262c",
  card: "#19171f",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
