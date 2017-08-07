const ROOT_PATH = (process.env.npm_lifecycle_event === 'prod')
    ? '/CareForce-Lumber-Calculator/'
    : '/'

exports.ROOT_PATH = ROOT_PATH
exports.SITE_TITLE = 'Care Force Lumber Calculator'
exports.SITE_URL = 'brentoncozby.com' + ROOT_PATH
