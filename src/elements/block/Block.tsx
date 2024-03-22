import React, { Component } from 'react';
import { View, type ViewProps } from 'react-native';

import { type AppBlockProps } from './BlockProps';
import StarlingThemeContext from '../../theme/ThemeContext';
import type { StarlingTheme } from '../../theme/type';
import { handleBlockStarlingStyle } from '../../helper/styleHelper';

class AppBlock extends Component<AppBlockProps & ViewProps> {
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

export { AppBlock };
