import React, { useContext } from 'react';
import { View } from 'react-native';

import {
  type ElementBlockProps,
  handleBlockStarlingStyle,
} from './element.block.props';
import ThemeContext from '../../theme/ThemeContext';

export default function (props: ElementBlockProps) {
  const { colors } = useContext(ThemeContext);

  const { elementProps, elementStyles } = handleBlockStarlingStyle(
    props,
    colors
  );

  return (
    <View {...elementProps} style={elementStyles}>
      {props.children}
    </View>
  );
}
