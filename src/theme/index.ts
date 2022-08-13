import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

import colors from './foundations/colors';
import fonts from './foundations/fonts';
import lineHeights from './foundations/lineHeights';

const Theme = {
  styles,
  colors,
  fonts,
  lineHeights,
};

export default extendTheme(Theme);
