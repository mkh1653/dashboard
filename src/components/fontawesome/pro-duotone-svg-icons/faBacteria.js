"use strict"
Object.defineProperty(exports, "__esModule", { value: true });
var prefix = 'fad';
var iconName = "bacteria";
var width = 640;
var height = 512;
var aliases = [];
var unicode = "e059";
var svgPathData = ["M416 352c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32c17.67 0 32-14.33 32-32C448 366.3 433.7 352 416 352zM361.1 65.26l-11.34 3.357C341.5 53.13 328.8 40.76 313.4 33.05l2.838-10.85c2.482-9.477-3.223-19.16-12.74-21.62C293.9-1.901 284.2 3.801 281.8 13.27l-2.82 10.78C273.4 23.86 267.8 24.2 262.2 25.15C250.8 27.04 239.1 30.22 229.1 33.39L225.7 23.93c-3.305-9.225-13.5-14.11-22.75-10.76c-9.266 3.279-14.1 13.41-10.81 22.65l3.498 9.793C180.2 52.27 165.6 60.07 151.7 69.19L145.4 60.76C139.5 52.92 128.3 51.32 120.5 57.16C112.6 63.02 110.1 74.13 116.8 81.98l6.457 8.611c-12.66 10.78-24.33 22.54-34.96 35.33L79.52 119.5C71.59 113.7 60.44 115.4 54.63 123.4C48.82 131.3 50.56 142.4 58.51 148.1l8.885 6.465C58.5 168.5 50.86 183.1 44.41 198.5L33.93 194.9c-9.334-3.186-19.44 1.721-22.64 10.99C8.086 215.2 13.04 225.3 22.34 228.4l10.33 3.541C29.88 241.9 26.88 251.8 25.15 262.2C24.07 268.6 23.94 274.1 24.33 281.2L12.75 284.7C3.309 287.4-2.061 297.3 .7441 306.7C3.041 314.4 10.13 319.4 17.8 319.4c1.682 0 3.387-.2303 5.08-.7382l11.27-3.33c8.086 15.15 20.68 27.55 36.39 35.43l-2.887 11.06c-2.471 9.479 3.246 19.15 12.77 21.62c1.496 .3809 3.004 .5666 4.488 .5666c7.92 0 15.14-5.287 17.23-13.28l2.863-10.97c1.027 .0371 2.074 .2577 3.098 .2577c16.64 0 32.32-5.174 45.66-13.89l8.59 8.809c3.49 3.578 8.129 5.379 12.78 5.379c4.477 0 8.942-1.662 12.41-5.01c7.062-6.822 7.225-18.04 .3711-25.07l-9.14-9.373C184.6 311.6 188.9 301.3 190.9 289.8c.8887-5.332 2.244-10.5 3.801-15.56L203.8 278.5c2.447 1.143 5.022 1.684 7.563 1.684c6.689 0 13.09-3.762 16.13-10.19C231.6 261.1 227.8 250.6 218.9 246.4L210.1 242.3c.668-.9883 1.197-2.078 1.894-3.047c2.4-3.334 5.152-6.354 7.877-9.408c3.623-4.074 7.504-7.857 11.64-11.41c3.213-2.727 6.441-5.428 9.943-7.814c1.119-.7695 2.323-1.419 3.469-2.154l3.922 8.856c2.945 6.625 9.474 10.57 16.32 10.57c2.4 0 4.836-.4844 7.178-1.502c9-3.959 13.08-14.42 9.115-23.39L277.4 193.9c4.078-1.135 8.14-2.324 12.38-3.031c12.6-2.098 23.91-7.094 33.76-13.9l9.996 9.012c3.408 3.082 7.687 4.593 11.95 4.593c4.848 0 9.684-1.962 13.2-5.829c6.609-7.26 6.053-18.47-1.24-25.04l-9.713-8.756c8.49-14.18 12.74-30.77 11.64-48.18l11.86-3.511c9.428-2.793 14.8-12.66 11.99-22.05C380.5 67.81 370.6 62.49 361.1 65.26zM128 256C110.3 256 96 241.7 96 223.1c0-17.67 14.33-32 32-32c17.67 0 32 14.33 32 32C160 241.7 145.7 256 128 256zM208 160c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16s16 7.162 16 16C224 152.8 216.8 160 208 160z","M615.7 230.8l11.58-3.425c9.439-2.781 14.81-12.65 12-22.04c-2.297-7.711-9.383-12.69-17.06-12.69c-1.682 0-3.387 .2313-5.08 .7391l-11.27 3.33c-8.088-15.15-20.68-27.55-36.4-35.43l2.888-11.06c2.469-9.477-3.248-19.15-12.77-21.62c-1.496-.3809-3.004-.5658-4.488-.5658c-7.92 0-15.14 5.288-17.23 13.28l-2.865 10.97c-1.027-.0371-2.073-.2574-3.096-.2574c-16.64 0-32.32 5.173-45.66 13.89L477.6 157.1c-3.49-3.578-8.129-5.38-12.78-5.38c-4.477 0-8.942 1.663-12.41 5.011c-7.062 6.822-7.225 18.04-.3711 25.07l9.14 9.373c-5.854 9.221-10.17 19.6-12.08 31.05c-.8887 5.33-2.244 10.49-3.801 15.56L436.2 233.5c-2.445-1.143-5.022-1.685-7.562-1.685c-6.691 0-13.09 3.763-16.13 10.19c-4.186 8.854-.3599 19.42 8.546 23.58l8.797 4.115c-.668 .9883-1.195 2.078-1.892 3.045c-2.416 3.355-5.186 6.4-7.932 9.473c-3.602 4.047-7.463 7.805-11.58 11.33c-3.219 2.73-6.453 5.438-9.959 7.828c-1.119 .7715-2.321 1.418-3.467 2.152l-3.922-8.855c-2.945-6.627-9.474-10.57-16.32-10.57c-2.4 0-4.836 .4849-7.178 1.501c-9 3.959-13.08 14.42-9.115 23.39l4.041 9.127c-4.078 1.135-8.14 2.324-12.38 3.031c-12.6 2.098-23.91 7.092-33.76 13.9l-9.996-9.012c-3.41-3.082-7.689-4.594-11.95-4.594c-4.848 0-9.684 1.962-13.2 5.829c-6.611 7.262-6.055 18.47 1.24 25.04l9.713 8.756c-8.49 14.18-12.74 30.77-11.64 48.17l-11.86 3.512c-9.428 2.793-14.8 12.66-11.99 22.05c2.783 9.385 12.69 14.71 22.15 11.94l11.34-3.359c8.287 15.49 20.99 27.86 36.38 35.57l-2.839 10.85c-2.48 9.479 3.224 19.16 12.75 21.62c9.566 2.482 19.25-3.221 21.72-12.69l2.82-10.78c5.508 .1875 11.11-.1523 16.75-1.102c11.37-1.893 22.23-5.074 33.1-8.24l3.379 9.455c3.305 9.223 13.5 14.11 22.75 10.76c9.266-3.277 14.1-13.41 10.81-22.65l-3.498-9.792c15.41-6.654 30.08-14.46 43.95-23.57l6.321 8.429c5.891 7.838 17.05 9.443 24.93 3.602c7.885-5.863 9.496-16.97 3.617-24.82l-6.457-8.611c12.66-10.78 24.33-22.54 34.96-35.33l8.816 6.413c7.932 5.795 19.08 4.076 24.89-3.855c5.811-7.906 4.07-19-3.874-24.77l-8.885-6.465c8.893-13.88 16.54-28.52 22.99-43.91l10.47 3.59c9.334 3.188 19.44-1.719 22.64-10.99c3.213-9.258-1.739-19.35-11.04-22.53l-10.33-3.541c2.791-9.961 5.793-19.84 7.521-30.21C615.9 243.4 616.1 237 615.7 230.8zM416 416c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32c17.67 0 32 14.33 32 32C448 401.7 433.7 416 416 416zM128 191.1c-17.67 0-32 14.33-32 32C96 241.7 110.3 256 128 256c17.67 0 32-14.33 32-32C160 206.3 145.7 191.1 128 191.1z"]

exports.definition = {
 prefix: prefix,
 iconName: iconName,
 icon: [width, height, aliases, unicode, svgPathData],
};

exports.faBacteria = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;