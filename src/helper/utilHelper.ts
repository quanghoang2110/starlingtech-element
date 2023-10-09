import { StyleSheet } from 'react-native';

import type { ViewStyle } from 'react-native';
import { appSize } from './sizeHelper';

export function handleMargin(
  margin: boolean | `${number}%` | number | number[]
): ViewStyle {
  if (typeof margin === 'boolean') {
    return {
      margin: appSize(15),
    };
  }
  if (typeof margin === 'number') {
    return {
      marginTop: appSize(margin),
      marginBottom: appSize(margin),
      marginLeft: appSize(margin),
      marginRight: appSize(margin),
    };
  }

  if (typeof margin === 'string') {
    return {
      marginTop: margin,
      marginBottom: margin,
      marginLeft: margin,
      marginRight: margin,
    };
  }

  const marginSize = Object.keys(margin).length;
  switch (marginSize) {
    case 1:
      return {
        marginTop: appSize(margin[0]),
        marginRight: appSize(margin[0]),
        marginBottom: appSize(margin[0]),
        marginLeft: appSize(margin[0]),
      };
    case 2:
      return {
        marginTop: appSize(margin[0]),
        marginRight: appSize(margin[1]),
        marginBottom: appSize(margin[0]),
        marginLeft: appSize(margin[1]),
      };
    case 3:
      return {
        marginTop: appSize(margin[0]),
        marginRight: appSize(margin[1]),
        marginBottom: appSize(margin[2]),
        marginLeft: appSize(margin[1]),
      };
    default:
      return {
        marginTop: appSize(margin[0]),
        marginRight: appSize(margin[1]),
        marginBottom: appSize(margin[2]),
        marginLeft: margin[3],
      };
  }
}

export function handlePadding(padding: boolean | number | number[]): ViewStyle {
  if (typeof padding === 'boolean') {
    return {
      padding: appSize(15),
    };
  }
  if (typeof padding === 'number') {
    return {
      paddingTop: appSize(padding),
      paddingRight: appSize(padding),
      paddingBottom: appSize(padding),
      paddingLeft: appSize(padding),
    };
  }
  if (typeof padding === 'string') {
    return {
      marginTop: padding,
      marginBottom: padding,
      marginLeft: padding,
      marginRight: padding,
    };
  }
  const marginSize = Object.keys(padding).length;
  switch (marginSize) {
    case 1:
      return {
        paddingTop: appSize(padding[0]),
        paddingRight: appSize(padding[0]),
        paddingBottom: appSize(padding[0]),
        paddingLeft: appSize(padding[0]),
      };
    case 2:
      return {
        paddingTop: appSize(padding[0]),
        paddingRight: appSize(padding[1]),
        paddingBottom: appSize(padding[0]),
        paddingLeft: appSize(padding[1]),
      };
    case 3:
      return {
        paddingTop: appSize(padding[0]),
        paddingRight: appSize(padding[1]),
        paddingBottom: appSize(padding[2]),
        paddingLeft: appSize(padding[1]),
      };
    default:
      return {
        paddingTop: appSize(padding[0]),
        paddingRight: appSize(padding[1]),
        paddingBottom: appSize(padding[2]),
        paddingLeft: appSize(padding[3]),
      };
  }
}

export function handleBorder(
  border: boolean | number | number[],
  borderColor: string
): ViewStyle {
  if (typeof border === 'boolean') {
    return {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor,
    };
  }

  if (typeof border === 'number') {
    return {
      borderTopWidth: border,
      borderRightWidth: border,
      borderBottomWidth: border,
      borderLeftWidth: border,
      borderColor,
    };
  }
  const marginSize = Object.keys(border).length;
  switch (marginSize) {
    case 1:
      return {
        borderTopWidth: border[0],
        borderRightWidth: border[0],
        borderBottomWidth: border[0],
        borderLeftWidth: border[0],
        borderColor,
      };
    case 2:
      return {
        borderTopWidth: border[0],
        borderRightWidth: border[1],
        borderBottomWidth: border[0],
        borderLeftWidth: border[1],
        borderColor,
      };
    case 3:
      return {
        borderTopWidth: border[0],
        borderRightWidth: border[1],
        borderBottomWidth: border[2],
        borderLeftWidth: border[1],
        borderColor,
      };
    default:
      return {
        borderTopWidth: border[0],
        borderRightWidth: border[1],
        borderBottomWidth: border[2],
        borderLeftWidth: border[3],
        borderColor,
      };
  }
}
