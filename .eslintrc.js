module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'globals': {
        'NODE_ENV': false,
        'PP': false,
        'SITE_TITLE': false,
        'SITE_NAME': false,
        'DESCRIPTION': false,
        'SITE_URL': false,
        'SITE_IMAGE': false,
        'DEVELOPER_NAME': false,
        'DEVELOPER_URL': false,
        'GOOGLE_ANALYTICS_ID': false,
        'DEV_PATH': false,
        '$': false,
        'libs': false,
    },
    'rules': {
        // off
        'import/prefer-default-export': 'off',
        'indent': ['error', 4],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-prototype-builtins': 'off',
        'no-fallthrough': 'off',

        // warning
        'no-console': 'warn',

        // on
        'comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': ['error', 'always'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'prefer-promise-reject-errors': ['error'],
        'no-throw-literal': ['error'],
        'no-useless-catch': ['error'],
        'no-multi-spaces': ['error'],
        'no-var': ['error'],
    },
}
