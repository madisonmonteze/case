import { createGlobalStyle } from 'styled-components';

import mediumWoff2 from '../assets/fonts/founders-grotesk-web-medium.woff2'
import mediumWoff from '../assets/fonts/founders-grotesk-web-medium.woff'

import regWoff2 from '../assets/fonts/founders-grotesk-web-regular.woff2'
import regWoff from '../assets/fonts/founders-grotesk-web-regular.woff'

import semiBoldWoff2 from '../assets/fonts/founders-grotesk-web-semibold.woff2'
import semiBoldWoff from '../assets/fonts/founders-grotesk-web-semibold.woff'


const Typography = createGlobalStyle`
    @font-face {
        font-family: 'Founders Grotesk Medium';
        src: url(${mediumWoff2}) format('woff2'),
            url(${mediumWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Founders Grotesk Regular';
        src: url(${regWoff2}) format('woff2'),
            url(${regWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Founders Grotesk Semibold';
        src: url(${semiBoldWoff2}) format('woff2'),
            url(${semiBoldWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
`;

export default Typography;