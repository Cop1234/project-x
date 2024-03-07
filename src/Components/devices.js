const sizes = {
  xs: "400px", // for small screen mobile
  sm: "500px", // for mobile screen
  md: "1000px", // for tablets
  lg: "1280px", // for laptops
  xl: "1440px", // for desktop / monitors
  xxl: "1920px", // for big screens
};

export const devices = {
  xs: `(max-width: ${sizes.xs})`,
  sm: `(max-width: ${sizes.sm})`,
  md: `(max-width: ${sizes.md})`,
  lg: `(max-width: ${sizes.lg})`,
  xl: `(max-width: ${sizes.xl})`,
  xxl: `(max-width: ${sizes.xxl})`,
};
