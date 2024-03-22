import {
  type ColorScheme,
  sizes,
  fonts,
  UI_WIDTH,
  UI_HEIGHT,
} from '@starling/theme';

export interface StarlingColorScheme extends ColorScheme {}

const starlingSizes = sizes;
const starlingFonts = fonts;

export { starlingSizes, starlingFonts, UI_WIDTH, UI_HEIGHT };
