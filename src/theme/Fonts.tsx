import { Global } from "@emotion/react";

// Install VSCode Extension "es6-string-html" for CSS syntax highlighting
// https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html

export const Fonts = () => (
  <Global
    styles={
      /*css*/
      `/**
 * @license
 *
 * Font Family: General Sans
 * Designed by: Frode Helland
 * URL: https://www.fontshare.com/fonts/general-sans
 * © 2022 Indian Type Foundry
 *
 * Font Styles:
 * General Sans Variable(Variable font)
 * General Sans Variable Italic(Variable font)
 * General Sans Extralight
 * General Sans Extralight Italic
 * General Sans Light
 * General Sans Light Italic
 * General Sans Regular
 * General Sans Italic
 * General Sans Medium
 * General Sans Medium Italic
 * General Sans Semibold
 * General Sans Semibold Italic
 * General Sans Bold
 * General Sans Bold Italic
 *
*/


/**
* This is a variable font
* You can control variable axes as shown below:
* font-variation-settings: 'wght' 700.0;
*
* available axes:

* 'wght' (range from 200.0 to 700.0)

*/

@font-face {
  font-family: 'GeneralSans-Variable';
  src: url('/static/fonts/general-sans/GeneralSans-Variable.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-Variable.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-Variable.ttf') format('truetype');
       font-weight: 200 700;
       font-display: swap;
       font-style: normal;
}


/**
* This is a variable font
* You can control variable axes as shown below:
* font-variation-settings: 'wght' 700.0;
*
* available axes:

* 'wght' (range from 200.0 to 700.0)

*/

@font-face {
  font-family: 'GeneralSans-VariableItalic';
  src: url('/static/fonts/general-sans/GeneralSans-VariableItalic.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-VariableItalic.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-VariableItalic.ttf') format('truetype');
       font-weight: 200 700;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'GeneralSans-Extralight';
  src: url('/static/fonts/general-sans/GeneralSans-Extralight.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-Extralight.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-Extralight.ttf') format('truetype');
       font-weight: 200;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'GeneralSans-ExtralightItalic';
  src: url('/static/fonts/general-sans/GeneralSans-ExtralightItalic.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-ExtralightItalic.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-ExtralightItalic.ttf') format('truetype');
       font-weight: 200;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'GeneralSans-Light';
  src: url('/static/fonts/general-sans/GeneralSans-Light.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-Light.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-Light.ttf') format('truetype');
       font-weight: 300;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'GeneralSans-LightItalic';
  src: url('/static/fonts/general-sans/GeneralSans-LightItalic.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-LightItalic.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-LightItalic.ttf') format('truetype');
       font-weight: 300;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'GeneralSans-Regular';
  src: url('/static/fonts/general-sans/GeneralSans-Regular.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-Regular.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-Regular.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'GeneralSans-Italic';
  src: url('/static/fonts/general-sans/GeneralSans-Italic.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-Italic.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-Italic.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'GeneralSans-Medium';
  src: url('/static/fonts/general-sans/GeneralSans-Medium.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-Medium.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-Medium.ttf') format('truetype');
       font-weight: 500;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'GeneralSans-MediumItalic';
  src: url('/static/fonts/general-sans/GeneralSans-MediumItalic.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-MediumItalic.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-MediumItalic.ttf') format('truetype');
       font-weight: 500;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'GeneralSans-Semibold';
  src: url('/static/fonts/general-sans/GeneralSans-Semibold.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-Semibold.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-Semibold.ttf') format('truetype');
       font-weight: 600;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'GeneralSans-SemiboldItalic';
  src: url('/static/fonts/general-sans/GeneralSans-SemiboldItalic.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-SemiboldItalic.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-SemiboldItalic.ttf') format('truetype');
       font-weight: 600;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'GeneralSans-Bold';
  src: url('/static/fonts/general-sans/GeneralSans-Bold.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-Bold.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-Bold.ttf') format('truetype');
       font-weight: 700;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'GeneralSans-BoldItalic';
  src: url('/static/fonts/general-sans/GeneralSans-BoldItalic.woff2') format('woff2'),
       url('/static/fonts/general-sans/GeneralSans-BoldItalic.woff') format('woff'),
       url('/static/fonts/general-sans/GeneralSans-BoldItalic.ttf') format('truetype');
       font-weight: 700;
       font-display: swap;
       font-style: italic;
}

`
    }
  />
);
