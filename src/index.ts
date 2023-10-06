import { appSize, appSizeByHeight, getDimension } from './helper/sizeHelper';
import AppBlock from './elements/block/Block';
import AppButton from './elements/button/Button';
import {
  AppPressable,
  AppTouchableOpacity,
  AppTouchableWithoutFeedback,
} from './elements/button/Pressable';
import AppText from './elements/text/Text';
import OverlayLoading from './elements/overlay/Overlay';
import Divider from './elements/divider/Divider';
import Skeleton from './elements/skeleton/Skeleton';
import KeyboardDismiss from './elements/others/KeyboardDismiss';
import AppTextInput from './elements/textInput/TextInput';
import StarlingContainer from './StarlingContainer';

import { useThemeContext } from './hook/contextHook';

export {
  useThemeContext,
  appSize,
  appSizeByHeight,
  getDimension,
  AppBlock,
  AppText,
  StarlingContainer,
  AppPressable,
  AppTouchableOpacity,
  AppTouchableWithoutFeedback,
  AppButton,
  OverlayLoading,
  Divider,
  Skeleton,
  KeyboardDismiss,
  AppTextInput,
};
