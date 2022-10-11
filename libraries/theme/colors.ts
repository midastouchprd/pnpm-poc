/* eslint-disable @typescript-eslint/ban-ts-comment */
import { transparentize } from 'polished';
import { ThemedStyledProps } from 'styled-components';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

const gray = {
  black: '#000000',
  100: '#17181C',
  90: '#282B33',
  80: '#3D424D',
  70: '#575E6B',
  60: '#6C727E',
  50: '#9196A1',
  40: '#AEB2BA',
  30: '#C8CBD0',
  20: '#E4E5E7',
  10: '#F7F7F8',
  white: '#FFFFFF',
};

const red = {
  90: '#810920',
  80: '#C5050B',
  70: '#DE2121',
  40: '#F95D64',
  30: '#FF8686',
  20: '#FCDCDD',
};

const orange = {
  90: '#77310F',
  80: '#A73B06',
  70: '#C44A08',
  40: '#FC7F3B',
  30: '#FE9B67',
  20: '#FEDFCF',
};

const yellow = {
  90: '#704500',
  80: '#995E00',
  70: '#DD8C00',
  40: '#FFB62F',
  30: '#FFCE6C',
  20: '#FFEDC9',
};

const green = {
  90: '#0B4C1F',
  80: '#026E24',
  70: '#0B8331',
  40: '#2BBC58',
  30: '#71DA91',
  20: '#D6F2DF',
};

const teal = {
  90: '#0E4E5D',
  80: '#006C84',
  70: '#017C98',
  40: '#0CADD3',
  30: '#58D8F5',
  20: '#D5F7FF',
};

const blue = {
  90: '#1D4670',
  80: '#0F5EAD',
  70: '#1273C9',
  40: '#359AF3',
  30: '#83C4FE',
  20: '#D9EFFF',
};

const purple = {
  90: '#4D2E78',
  80: '#6730B4',
  70: '#8544DF',
  40: '#AF75FF',
  30: '#C79FFF',
  20: '#EFE8FB',
};

const neutral = { ...gray };
const system = { ...teal };

export const colors = {
  gray,
  red,
  orange,
  yellow,
  green,
  teal,
  blue,
  purple,
  neutral,
  system,
};

export type ThemeColor = keyof typeof colors;

const light = {
  labelPrimary: neutral[90],
  labelSecondary: neutral[80],
  labelTertiary: neutral[60],
  labelInverse: neutral.white,
  pageBackground: neutral[10],
  containerBackground: neutral.white,
  overlayDarken: transparentize(0.4, neutral[90]),
  overlayLighten: transparentize(0.4, neutral[10]),
  containerTinted: (color: ThemeColor): string => colors[color]['20'],
  containerTintedInverse: (color: ThemeColor): string => colors[color]['80'],
  outline: (color: ThemeColor): string =>
    transparentize(0.8, colors[color]['80']),
  divider: (color: ThemeColor): string =>
    transparentize(0.9, colors[color]['90']),
  disabled: (color: ThemeColor): string =>
    transparentize(0.5, colors[color]['80']),
  action: (color: ThemeColor): string => colors[color]['80'],
  actionHover: (color: ThemeColor): string => colors[color]['90'],
  actionHoverFill: (color: ThemeColor): string =>
    transparentize(0.9, colors[color]['80']),
  actionActive: (color: ThemeColor): string => colors[color]['70'],
  actionActiveFill: (color: ThemeColor): string =>
    transparentize(0.8, colors[color]['80']),
  actionFocusOutline: (color: ThemeColor): string =>
    transparentize(0.7, colors[color]['80']),
  shadow04: `0px 2px 4px ${transparentize(
    0.9,
    neutral.black
  )}, 0px 0px 1px ${transparentize(0.7, neutral.black)}`,
  shadow04Inset: `inset 0px 2px 4px ${transparentize(
    0.9,
    neutral.black
  )}, 0px 0px 1px ${transparentize(0.7, neutral.black)}`,
  shadow04InsetInvisible: `inset 0px 2px 4px ${transparentize(
    1,
    neutral.black
  )}, 0px 0px 1px ${transparentize(1, neutral.black)}`,
  shadow12: `0px 6px 12px ${transparentize(
    0.9,
    neutral.black
  )}, 0px 3px 6px ${transparentize(
    0.96,
    neutral.black
  )}, 0px 0px 1px ${transparentize(0.8, neutral.black)}`,
  shadow32: `0px 16px 32px ${transparentize(
    0.9,
    neutral.black
  )}, 0px 8px 16px ${transparentize(
    0.9,
    neutral.black
  )}, 0px 2px 4px ${transparentize(
    0.9,
    neutral.black
  )}, 0px 0px 1px ${transparentize(0.7, neutral.black)}`,
  barHeader: `0px 1px 0px ${transparentize(0.9, neutral.black)}`,
  barElevated: `0px 2px 12px ${transparentize(
    0.94,
    neutral.black
  )}, 0px 1px 6px ${transparentize(
    0.96,
    neutral.black
  )}, 0px 0px 1px ${transparentize(0.8, neutral.black)}`,
  barFooter: `0px -1px 0px ${transparentize(0.9, neutral.black)}`,
  outlineInverse: transparentize(0.7, neutral.white),
  dividerInverse: transparentize(0.8, neutral.white),
  actionInverse: neutral.white,
  actionHoverInverse: neutral.white,
  actionHoverFillInverse: transparentize(0.8, neutral.white),
  actionActiveInverse: neutral.white,
  actionActiveFillInverse: transparentize(0.7, neutral.white),
  actionFocusOutlineInverse: transparentize(0.6, neutral.white),
};

const dark = {
  labelPrimary: neutral[10],
  labelSecondary: neutral[30],
  labelTertiary: neutral[50],
  labelInverse: neutral[100],
  pageBackground: neutral[100],
  containerBackground: neutral[90],
  overlayDarken: transparentize(0.4, neutral.black),
  overlayLighten: transparentize(0.4, neutral[90]),
  containerTinted: (color: ThemeColor): string => {
    let level: keyof typeof colors[typeof color] = 90;
    if (color === 'gray' || color === 'neutral') {
      level = 80;
    }
    return colors[color][level];
  }, // gray 80, everything else 90
  containerTintedInverse: (color: ThemeColor): string => colors[color]['30'],
  outline: (color: ThemeColor): string =>
    transparentize(0.7, colors[color]['30']),
  divider: (color: ThemeColor): string =>
    transparentize(0.8, colors[color]['40']),
  disabled: (color: ThemeColor): string =>
    transparentize(0.5, colors[color]['30']),
  action: (color: ThemeColor): string => colors[color]['30'],
  actionHover: (color: ThemeColor): string => colors[color]['20'],
  actionHoverFill: (color: ThemeColor): string =>
    transparentize(0.8, colors[color]['30']),
  actionActive: (color: ThemeColor): string => colors[color]['40'],
  actionActiveFill: (color: ThemeColor): string =>
    transparentize(0.7, colors[color]['30']),
  actionFocusOutline: (color: ThemeColor): string =>
    transparentize(0.6, colors[color]['30']),
  shadow04: `0px 2px 4px ${transparentize(
    0.8,
    neutral.black
  )}, 0px 0px 1px ${transparentize(0.6, neutral.black)}`,
  shadow04Inset: `0px 0px 1px ${transparentize(
    0.6,
    neutral.black
  )}, inset 0px 2px 4px ${transparentize(0.8, neutral.black)}`,
  shadow04InsetInvisible: `0px 0px 1px ${transparentize(
    1,
    neutral.black
  )}, inset 0px 2px 4px ${transparentize(1, neutral.black)}`,
  shadow12: `0px 6px 12px ${transparentize(
    0.85,
    neutral.black
  )}, 0px 3px 6px ${transparentize(
    0.9,
    neutral.black
  )}, 0px 0px 1px ${transparentize(0.6, neutral.black)}`,
  shadow32: `0px 6px 12px ${transparentize(
    0.85,
    neutral.black
  )}, 0px 3px 6px ${transparentize(
    0.9,
    neutral.black
  )}, 0px 0px 1px ${transparentize(0.6, neutral.black)}`,
  barHeader: `0px 1px 0px ${transparentize(0.8, neutral.black)}`,
  barElevated: `0px 2px 12px ${transparentize(
    0.85,
    neutral.black
  )}), 0px 1px 6px ${transparentize(
    0.9,
    neutral.black
  )}, 0px 0px 1px ${transparentize(0.6, neutral.black)}`,
  barFooter: `0px -1px 0px ${transparentize(0.8, neutral.black)}`,
  outlineInverse: transparentize(0.7, neutral[100]),
  dividerInverse: transparentize(0.8, neutral[100]),
  actionInverse: neutral[100],
  actionHoverInverse: neutral[100],
  actionHoverFillInverse: transparentize(0.8, neutral[100]),
  actionActiveInverse: neutral[100],
  actionActiveFillInverse: transparentize(0.7, neutral[100]),
  actionFocusOutlineInverse: transparentize(0.6, neutral[100]),
};

export type ThemeTypes = 'light' | 'dark';
export type FetchThemeColorProps = {
  color?: ThemeColor;
  theme?:
    | { id?: 'light' | 'dark' }
    | ThemeTypes
    | (typeof light & { id?: ThemeTypes });
};

export type ThemedElementProps<T> = ThemedStyledProps<
  Pick<
    DetailedHTMLProps<HTMLAttributes<T>, T>,
    'key' | keyof HTMLAttributes<T>
  >,
  any
>;

const themes = { light, dark };

const fetchThemeColor = (
  props: FetchThemeColorProps,
  token: keyof typeof light | keyof typeof dark,
  colorOverride?: ThemeColor
): string => {
  let themeID: keyof typeof themes;
  if (
    props.theme &&
    typeof props.theme === 'string' &&
    (props.theme === 'light' || props.theme === 'dark')
  ) {
    themeID = props.theme;
    // @ts-ignore
  } else if (props.theme && props.theme.id) {
    // @ts-ignore
    themeID = props.theme.id;
  } else {
    themeID = 'light';
  }

  const getColor = (color?: ThemeColor) => {
    if (color && DLS_COLORS.includes(color)) {
      return color;
    }
    // eslint-disable-next-line no-console
    console.warn(
      `Make sure you are using one of eight Real Agent Colors -- "${color}" is not one of the following "${DLS_COLORS.join(
        ', '
      )}"`
    );
    return false;
  };

  const finalColorFn = themes[themeID][token];

  if (typeof finalColorFn === 'string') {
    return finalColorFn;
  }
  /* We have to make sure fetchThemeColor returns string,
  otherwise there will be a typing error in styled components
  using this function */
  if (!finalColorFn) {
    return '';
  }

  const selectedColor = colorOverride || getColor(props.color) || 'system';
  const calledFinalColor = finalColorFn(selectedColor);

  return calledFinalColor;
};

const fetchColor = ({ code }: { code: string }): string => {
  const strColor = code.match(/[a-zA-Z]+/g);

  if (strColor && strColor.length > 0) {
    const color = strColor[0] as ThemeColor;
    const intCode = code.split(color);
    const selectedColor = colors[color];

    if (selectedColor && intCode && intCode.length > 1) {
      const colorVariation =
        intCode[1] as unknown as keyof typeof colors[typeof color];
      const selectedValue = selectedColor[colorVariation];
      if (selectedValue) {
        return selectedValue;
      }
    }
  }
  return gray.white;
};

export const DLS_COLOR = {
  SYSTEM: 'system',
  NEUTRAL: 'neutral',
  RED: 'red',
  ORANGE: 'orange',
  YELLOW: 'yellow',
  GREEN: 'green',
  BLUE: 'blue',
  PURPLE: 'purple',
  TEAL: 'teal',
};

export const DLS_COLORS = [
  DLS_COLOR.SYSTEM,
  DLS_COLOR.NEUTRAL,
  DLS_COLOR.RED,
  DLS_COLOR.ORANGE,
  DLS_COLOR.YELLOW,
  DLS_COLOR.GREEN,
  DLS_COLOR.BLUE,
  DLS_COLOR.PURPLE,
  DLS_COLOR.TEAL,
];

export const DLS_COLORS_NOTIFICATIONS = [
  'none',
  DLS_COLOR.SYSTEM,
  DLS_COLOR.RED,
  DLS_COLOR.ORANGE,
  DLS_COLOR.YELLOW,
  DLS_COLOR.GREEN,
  DLS_COLOR.BLUE,
  DLS_COLOR.PURPLE,
];

export const THEME_PROVIDER_WARNING =
  "The Real Agent Component library cannot be used without KWThemeProvider.\n\n please run npm install\n @real-agent/theme\n then wrap your top-level component with KWThemeProvider\n import { KWThemeProvider } from @real-agent/theme\n\n <KWThemeProvider theme = 'light'>\n {...}\n</KWThemeProvider>\n\n This is a development - only message.It will be removed in production.\n";

export { fetchThemeColor, themes, fetchColor };
