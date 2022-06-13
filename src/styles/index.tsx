import { Reset, Typography } from "./defaults";
import { color } from "./variables/colors";
import { spacing } from "./variables/spacings";
import { breakpoint } from "./variables/breakpoints";

export const Defaults = () => (
  <>
    <Reset />
    <Typography />
  </>
);

const theme = {
  color,
  spacing,
  breakpoint,
};

export type themeTypes = typeof theme;
export default theme;
