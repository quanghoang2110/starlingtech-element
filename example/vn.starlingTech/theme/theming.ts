import { sizes } from './sizes';
import { fonts } from './fonts';
import colorDefault from './color/light';
import colorDark from './color/dark';

const UI_WIDTH = 375;
const UI_HEIGHT = 812;

export { sizes, fonts, UI_WIDTH, UI_HEIGHT, colorDefault, colorDark };
export type ColorScheme = typeof colorDefault;
