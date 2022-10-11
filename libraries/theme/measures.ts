import { fetchThemeColor, FetchThemeColorProps } from './colors';

export const mediaQueries = {
  // corresponds to small as per design docs
  mobile: '@media (min-width: 320px) and (max-width: 767px)',
  // corresponds to medium as per design docs
  tabletPortrait: '@media (min-width: 768px) and (max-width: 1023px)',
  tableLandscape: '@media (min-width: 1024px) and (max-width: 1440px)',
  desktop: '@media (min-width: 1440px)',
  // corresponds to large as per design docs
  landscapeAndUp: '@media (min-width: 1024px)',
};

export const measures = {
  borderRadiusSmall: '2px',
  borderRadiusSmallTop: '2px 2px 0 0',
  borderRadiusSmallBottom: '0 0 2px 2px',
  borderRadius: '4px',
  borderRadiusTop: '4px 4px 0 0',
  borderRadiusBottom: '0 0 4px 4px',
  borderRadiusLarge: '8px',
  borderRadiusLargeTop: '8px 8px 0 0',
  borderRadiusLargeBottom: '0 0 8px 8px',
  stroke: `box-shadow: 0 0 0 1px ${(props: FetchThemeColorProps) =>
    fetchThemeColor(props, 'action')}`,
  transitionDuration: '0.25s',
  transitionFunction: 'ease',
  focusOutline: `box-shadow: 0 0 0 2px ${(props: FetchThemeColorProps) =>
    fetchThemeColor(props, 'actionFocusOutline')}`,
  disabled: `opacity: 0.5; cursor: not-allowed`,
  mediaQueries,
};
