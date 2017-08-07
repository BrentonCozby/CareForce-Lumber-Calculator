const ROOT_PATH = (process.env.npm_lifecycle_event === 'build-js-min')
    ? '/CareForce-Lumber-Calculator/'
    : '/'

console.log('ROOT_PATH', ROOT_PATH);

exports.ROOT_PATH = ROOT_PATH
exports.SITE_TITLE = 'Care Force Lumber Calculator'
exports.SITE_URL = 'brentoncozby.com' + ROOT_PATH
