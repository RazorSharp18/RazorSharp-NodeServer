module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": 'module',
        "ecmaFeatures": {   
            "jsx": true
        }
    },
    "plugins": [
        // "react"
    ],
    "rules": {
        "no-console": 0
        // "indent": 2,
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        // "quotes": [
        //     "error",
        //     "single"
        // ],
        // "semi": [
        //     "error",
        //     "always"
        // ]
    }
};