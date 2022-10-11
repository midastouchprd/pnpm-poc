import { createGlobalStyle, css } from 'styled-components';
import { themes } from './colors';

export const fontUrl =
  'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';

export const bodyStyles = css`
  /* global styles */
  padding: 0;
  font-family: Mulish;
  margin: 0;
  padding: 0;

  .docs-story {
    -webkit-transform: translateZ(0);
  }
`;

export const LightGlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
   background-color: ${themes.light.pageBackground};
 }
`;

export const DarkGlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
background-color: ${themes.dark.pageBackground};
 }
`;
