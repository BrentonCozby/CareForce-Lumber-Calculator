/****************************************************
 *
 * All the code in this file will be bundled into a
 * 'common.js' file. By separating code that won't
 * change much as you push updates into production,
 * users' browsers can keep the common.js bundle
 * cached (as long as no changes were made to it),
 * allowing for faster repeat page load speeds.
 *
 ****************************************************/

window.libs = {}
// Import the following libraries in other files like this:
//
//      const { sanitizeHTML } = libs
//
libs.sanitizeHTML = require('dompurify').sanitize

// Dump static code here
require('./decimal-round.js')
require('./helpers.js')
require('./errors.js')
