export const fonts = {
  mulishRegular400: {
    fontFamily: 'Mulish',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  mulishRegularItalic400: {
    fontFamily: 'Mulish',
    fontWeight: 400,
    fontStyle: 'italic',
  },
  mulishBold700: {
    fontFamily: 'Mulish',
    fontWeight: 700,
    fontStyle: 'normal',
  },
  mulishBoldItalic700: {
    fontFamily: 'Mulish',
    fontWeight: 700,
    fontStyle: 'italic',
  },
  mulishExtraBold800: {
    fontFamily: 'Mulish',
    fontWeight: 800,
    fontStyle: 'normal',
  },
};

const fontMeasurements = {
  // large titles
  fontSizeTitle32: {
    fontSize: '32px',
    lineHeight: '40px',
  },
  // default titles
  fontSizeTitle24: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  // small titles
  fontSizeTitle20: {
    fontSize: '20px',
    lineHeight: '24px',
  },
  // sub-titles or section headers set with body text
  fontSizeTitle16: {
    fontSize: '16px',
    lineHeight: '20px',
  },
  // largest body text with line height optimized for long text
  fontSizeText16: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  // default body text with line height optimized for long text
  fontSizeText14: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  // smallest body text with line height optimized for long text
  fontSizeText12: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  fontSizeText10: {
    fontSize: '10px',
    lineHeight: '12px',
  },
  textStyleParagraph: (fontSize: number) => {
    return {
      marginBottom: `${fontSize}px`,
    };
  },
  textStyleCaps: (fontSize: number) => {
    return {
      letterSpacing: `${fontSize * 0.1}px`,
      textTransform: 'uppercase',
    };
  },
};

export const typography = {
  fonts: { ...fonts },
  title32: {
    ...fonts.mulishExtraBold800,
    ...fontMeasurements.fontSizeTitle32,
  },
  title24: {
    ...fonts.mulishExtraBold800,
    ...fontMeasurements.fontSizeTitle24,
  },
  title20: {
    ...fonts.mulishExtraBold800,
    ...fontMeasurements.fontSizeTitle20,
  },
  title16: {
    ...fonts.mulishBold700,
    ...fontMeasurements.fontSizeTitle16,
  },
  subtitle12: {
    ...fonts.mulishRegular400,
    ...fontMeasurements.fontSizeText12,
    ...fontMeasurements.textStyleCaps(
      parseInt(fontMeasurements.fontSizeText12.fontSize.slice(0, -2), 10)
    ),
  },
  text16: {
    ...fonts.mulishRegular400,
    ...fontMeasurements.fontSizeText16,
  },
  text14: {
    ...fonts.mulishRegular400,
    ...fontMeasurements.fontSizeText14,
  },
  text14Bold: {
    ...fonts.mulishBold700,
    ...fontMeasurements.fontSizeText14,
  },
  text14Italic: {
    ...fonts.mulishRegularItalic400,
    ...fontMeasurements.fontSizeText14,
  },
  text12: {
    ...fonts.mulishRegular400,
    ...fontMeasurements.fontSizeText12,
  },
  text12Bold: {
    ...fonts.mulishBold700,
    ...fontMeasurements.fontSizeText12,
  },
  text12Italic: {
    ...fonts.mulishRegularItalic400,
    ...fontMeasurements.fontSizeText12,
  },
  text10: {
    ...fonts.mulishRegular400,
    ...fontMeasurements.fontSizeText10,
  },
  text10Bold: {
    ...fonts.mulishBold700,
    ...fontMeasurements.fontSizeText10,
  },
  text10Italic: {
    ...fonts.mulishRegularItalic400,
    ...fontMeasurements.fontSizeText10,
  },
};
