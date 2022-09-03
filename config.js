import { resolve } from 'path'

// Use the following variables in public/views. They are made available in
// build-tools/ejs-to-html.js in the 'transformer' function

// PP (public path) must begin and end with '/' unless it is just '/'
export const PP = ''
export const SITE_TITLE = 'Care Force Lumber Calculator'
export const SITE_NAME = 'CareForce-Lumber-Calculator'
export const DESCRIPTION = 'Calulates optimal lumber orders for Care Force schematics.'
export const SITE_URL = 'https://brentoncozby.com' + PP
export const SITE_IMAGE = 'http://i.imgur.com/mI78pXY.jpg'
export const DEVELOPER_NAME = 'Brenton Cozby'
export const DEVELOPER_URL = 'https://brentoncozby.com'
export const GOOGLE_ANALYTICS_ID = ''
export const DEV_PATH = __dirname

export const Dir = {
    dist: resolve(__dirname, 'dist'),
    public: resolve(__dirname, 'public'),
    css: resolve(__dirname, 'public', 'css'),
    js: resolve(__dirname, 'public', 'js'),
    static: resolve(__dirname, 'public', 'static'),
    images: resolve(__dirname, 'public', 'static', 'images'),
    vendor: resolve(__dirname, 'public', 'vendor'),
    views: resolve(__dirname, 'public', 'views'),
    pages: resolve(__dirname, 'public', 'views', 'pages'),
    partials: resolve(__dirname, 'public', 'views', 'partials'),
}
