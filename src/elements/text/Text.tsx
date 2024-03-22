import React, { Component } from 'react';
import { Text as RNText } from 'react-native';

import { type AppTextProps } from './TextProps';
import StarlingThemeContext from '../../theme/ThemeContext';
import type { StarlingTheme } from '../../theme/type';
import { handleTextStarlingStyle } from '../../helper/styleHelper';
import type { TextProps } from 'react-native';

export class AppText extends Component<AppTextProps & TextProps> {
  static contextType = StarlingThemeContext;
  static defaultProps = {
    allowFontScaling: false,
  };

  context: StarlingTheme = {} as StarlingTheme;

  render() {
    const { elementProps, elementStyles } = handleTextStarlingStyle(
      this.props,
      this.context.colors
    );
    return (
      <RNText {...elementProps} style={elementStyles}>
        {this.props.children}
      </RNText>
    );
  }
}
