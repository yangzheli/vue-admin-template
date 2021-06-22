module.exports = {
    "env": {
        "es2021": true
    },
    "extends": [
        "plugin:vue/essential",
        "standard"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'no-unused-vars': [2, {
            'vars': 'all',
            'args': 'none'
        }],
    }
};