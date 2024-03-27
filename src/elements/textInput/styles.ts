import { StyleSheet } from 'react-native';
import { fonts, sizes } from '../../theme/theming';
import { appSize } from '../../helper/sizeHelper';

export default StyleSheet.create({
  appInputEye: {
    paddingRight: appSize(55),
  },
  helperTxt: {
    fontSize: appSize(sizes.hint),
    fontWeight: '300',
    marginHorizontal: 1,
    marginTop: appSize(6),
  },
  inline: {
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineLabel: {
    marginRight: appSize(sizes.padding),
    height: appSize(sizes.inputHeight),
    alignItems: 'center',
  },
  inputView: {
    borderRadius: appSize(sizes.inputRadius),
    borderWidth: sizes.inputBorder,
    maxWidth: appSize(sizes.inputMaxWidth),
    // width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: appSize(sizes.text),
    fontFamily: fonts?.regular,
    height: appSize(sizes.inputHeight),
    paddingLeft: appSize(sizes.inputHorizontalPadding),
  },
  inputWithLeftIcon: {
    marginLeft: appSize(5),
  },
  inputWithRightIcon: {
    paddingRight: appSize(45),
  },
  item: { width: '100%' },
  labelContainer: { flexDirection: 'row', marginBottom: 9 },
  rightIcon: {
    width: appSize(32),
  },
  textErr: {
    marginTop: 5,
    textAlign: 'left',
  },
});
