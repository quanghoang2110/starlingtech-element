import React, { Component } from 'react';
import { View } from 'react-native';

import {
  type BlockProps,
  handleBlockStarlingStyle,
} from './element.block.props';
import StarlingThemeContext from '../../theme/ThemeContext';
import type { StarlingTheme } from '../../theme/type';

class Block extends Component<BlockProps> {
  static contextType = StarlingThemeContext;
  static defaultProps = {
    allowFontScaling: false,
  };

  context: StarlingTheme = {} as StarlingTheme;

  render() {
    const { colors } = this.context;
    const { elementProps, elementStyles } = handleBlockStarlingStyle(
      this.props,
      colors!
    );
    return (
      <View {...elementProps} style={elementStyles}>
        {this.props.children}
      </View>
    );
  }
}

export default Block;
