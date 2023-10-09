import { StyleSheet, type ViewProps } from 'react-native';

import { type ElementProps, handleStarlingStyle } from '../element.props';
import type { StarlingColorScheme } from '../../starlingTheme';

export interface BlockProps extends ElementProps, ViewProps {
  center?: boolean;
  row?: boolean;
  column?: boolean;
  primary?: boolean;
  position?: 'absolute' | 'relative' | undefined;
}

export function handleBlockStarlingStyle(
  props: BlockProps,
  color: StarlingColorScheme
) {
  const { primary } = props;

  const { elementProps, elementStyles } = handleStarlingStyle(props, color);

  const tempStyles = { ...elementStyles };
  const tempProps = { ...elementProps };
  if (primary) {
    tempStyles.backgroundColor = color.primary;
    delete tempProps.primary;
  }
  if (props.position) {
    tempStyles.position = props.position;
    delete tempProps.position;
  }
  if (props.row || props.column) {
    tempStyles.flexDirection = props.row ? 'row' : 'column';
    delete tempProps.row;
    delete tempProps.column;
  }
  if (props.center) {
    tempStyles.alignItems = 'center';
    tempStyles.justifyContent = 'center';
    delete tempProps.center;
  }

  return {
    elementProps: tempProps,
    elementStyles: StyleSheet.flatten([tempStyles, props.style]),
  };
}
