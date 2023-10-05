import React, { Component } from 'react';
import { Text as RNText } from 'react-native';

import {
  handleTextStarlingStyle,
  type ElementTextProps,
} from './element.text.props';
import StarlingThemeContext from '../../theme/ThemeContext';
import type { StarlingTheme } from '../../theme/type';

export default class Text extends Component<ElementTextProps> {
  static contextType = StarlingThemeContext;
  static defaultProps = {
    allowFontScaling: false,
  };

  context: StarlingTheme = {} as StarlingTheme;

  constructor(props: ElementTextProps) {
    super(props);
  }

  render() {
    const { elementProps, elementStyles } = handleTextStarlingStyle(
      this.props,
      this.context.colors,
      this.context.fonts
    );
    return (
      <RNText {...elementProps} style={elementStyles}>
        {this.props.children}
      </RNText>
    );
  }
}
