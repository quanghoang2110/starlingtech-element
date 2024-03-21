import { StyleSheet } from 'react-native';
import { fonts, sizes } from '../../theme/theming';
import { appSize } from '../../helper/sizeHelper';

export default StyleSheet.create({
  appInputEye: {
    paddingRight: 55,
  },
  helperTxt: {
    fontSize: appSize(sizes.hint),
    fontWeight: '300',
    marginHorizontal: 1,
    marginTop: appSize(6),
  },
  inline: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineLabel: { marginRight: appSize(sizes.padding), width: 122 },
  inputView: {
    borderRadius: appSize(sizes.inputRadius),
    borderWidth: 1,
    maxWidth: appSize(sizes.inputMaxWidth),
    paddingLeft: appSize(sizes.inputHorizontalPadding),
    paddingRight: 45,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: appSize(sizes.text),
    fontFamily: fonts?.regular,
    height: appSize(sizes.inputHeight),
  },
  inputWithLeftIcon: {
    marginLeft: appSize(5),
  },
  item: { width: '100%' },
  itemInputInLine: { flexDirection: 'row', width: 120 },
  labelContainer: { flexDirection: 'row', marginBottom: 9 },
  radius5: { borderRadius: 5, paddingHorizontal: 7 },
  rightIcon: {
    width: 32,
  },
  textErr: {
    marginTop: 5,
    textAlign: 'left',
  },
});
